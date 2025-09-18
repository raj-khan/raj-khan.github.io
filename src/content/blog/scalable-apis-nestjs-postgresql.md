---
title: "Building Scalable APIs with NestJS and PostgreSQL"
date: "2024-08-15"
excerpt: "Learn how to create enterprise-grade APIs using NestJS framework with PostgreSQL database, including authentication, validation, and performance optimization."
tags: ["NestJS", "PostgreSQL", "API Design", "TypeScript"]
readTime: "8 min read"
---

# Building Scalable APIs with NestJS and PostgreSQL

When building enterprise-grade applications, choosing the right tech stack is crucial. In this post, I'll walk you through creating a scalable API using NestJS and PostgreSQL - a combination I've used successfully in production environments.

## Why NestJS and PostgreSQL?

**NestJS** provides a solid architectural foundation with:
- Built-in TypeScript support
- Dependency injection system
- Modular architecture
- Extensive ecosystem of modules

**PostgreSQL** offers:
- ACID compliance
- Advanced data types (JSON, arrays, etc.)
- Excellent performance with proper indexing
- Strong consistency guarantees

## Project Setup

Let's start by setting up a new NestJS project:

```bash
npm i -g @nestjs/cli
nest new my-api
cd my-api
npm install @nestjs/typeorm typeorm pg
npm install -D @types/pg
```

## Database Configuration

Create a `database.config.ts` file:

```typescript
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'myapi',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.NODE_ENV === 'development',
};
```

## Creating Your First Entity

Here's a User entity with proper relationships:

```typescript
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Post } from './post.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ select: false })
  password: string;

  @OneToMany(() => Post, post => post.author)
  posts: Post[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
```

## Implementing Services

A clean service layer separates business logic from controllers:

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(page = 1, limit = 10): Promise<{ data: User[]; total: number }> {
    const [data, total] = await this.userRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: { createdAt: 'DESC' },
    });

    return { data, total };
  }

  async findById(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }
}
```

## Performance Optimization

### Database Indexing

Create proper indexes for frequently queried fields:

```sql
-- Add indexes for better query performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_posts_author_id ON posts(author_id);
CREATE INDEX idx_posts_created_at ON posts(created_at);
```

### Query Optimization

Use TypeORM's query builder for complex queries:

```typescript
async findUserPostsWithStats(userId: string) {
  return this.userRepository
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.posts', 'post')
    .loadRelationCountAndMap('user.postCount', 'user.posts')
    .where('user.id = :userId', { userId })
    .getOne();
}
```

## Authentication & Authorization

Implement JWT authentication:

```typescript
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    
    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtService.verifyAsync(token);
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }
}
```

## Error Handling

Implement global exception handling:

```typescript
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = exception instanceof HttpException 
      ? exception.getStatus() 
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const message = exception instanceof HttpException
      ? exception.getResponse()
      : 'Internal server error';

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    });
  }
}
```

## Testing Strategy

Write comprehensive tests for your services:

```typescript
describe('UserService', () => {
  let service: UserService;
  let repository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            findAndCount: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should find all users with pagination', async () => {
    const mockUsers = [/* mock data */];
    jest.spyOn(repository, 'findAndCount').mockResolvedValue([mockUsers, 10]);

    const result = await service.findAll(1, 10);
    expect(result.data).toEqual(mockUsers);
    expect(result.total).toBe(10);
  });
});
```

## Deployment Considerations

### Docker Configuration

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["node", "dist/main"]
```

### Environment Variables

```env
NODE_ENV=production
DB_HOST=your-postgres-host
DB_PORT=5432
DB_USERNAME=your-username
DB_PASSWORD=your-password
DB_NAME=your-database
JWT_SECRET=your-jwt-secret
```

## Conclusion

This architecture provides a solid foundation for scalable APIs. Key takeaways:

- Use TypeORM for type-safe database operations
- Implement proper error handling and validation
- Add comprehensive testing from the start
- Optimize database queries and add appropriate indexes
- Use environment variables for configuration

The combination of NestJS and PostgreSQL has served me well in production environments, handling thousands of requests per minute with proper optimization.

What's your experience with NestJS? Let me know in the comments below!
