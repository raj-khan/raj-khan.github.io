# Personality Test Web Application

A modern, TypeScript-safe personality test application built with Next.js 14, featuring 16 MBTI personality types organized into 4 role categories (Analysts, Diplomats, Sentinels, Explorers).

## 🎯 Features

- ✅ **Type-Safe**: Full TypeScript coverage across monorepo
- ✅ **Test-Driven Development**: Comprehensive test suite with Vitest
- ✅ **Modern Stack**: Next.js 14, React 18, Tailwind CSS
- ✅ **Monorepo Architecture**: Turborepo + pnpm workspaces
- ✅ **Anonymous Testing**: No registration required
- ✅ **Result Sharing**: Generate photocards for social sharing
- ✅ **Responsive Design**: Beautiful UI across all devices
- ✅ **Mock API Ready**: Easy backend integration

## 📁 Project Structure

```
personality-app-web/
├── apps/
│   └── frontend/          # Next.js 14 app
│       ├── src/
│       │   ├── app/       # App router pages
│       │   ├── components/# React components
│       │   ├── lib/       # Utilities (score calculator)
│       │   ├── store/     # Zustand state management
│       │   └── test/      # Test setup
│       └── vitest.config.ts
├── packages/
│   ├── types/             # Shared TypeScript types
│   └── test-data/         # Questions & personality data (JSON)
├── turbo.json
└── pnpm-workspace.yaml
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

```bash
# Install pnpm if you haven't
npm install -g pnpm

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

The app will be available at `http://localhost:3000`

### Available Scripts

```bash
# Development
pnpm dev              # Start all apps in dev mode
pnpm dev --filter @personality-app/frontend  # Start only frontend

# Building
pnpm build            # Build all apps
pnpm build --filter @personality-app/frontend

# Testing
pnpm test             # Run all tests
pnpm test:watch       # Run tests in watch mode
pnpm test:coverage    # Generate coverage report

# Type checking
pnpm type-check       # Check types across monorepo

# Linting
pnpm lint             # Lint all apps
```

## 🧪 Testing

This project follows **Test-Driven Development (TDD)**:

```bash
# Run tests
cd apps/frontend
pnpm test

# Watch mode
pnpm test:watch

# Coverage
pnpm test:coverage
```

### Test Structure

- **Unit Tests**: `src/lib/*.test.ts` - Score calculation logic
- **Store Tests**: `src/store/*.test.ts` - State management
- **Component Tests**: `src/components/**/*.test.tsx` - UI components

## 📊 Architecture

### Data Flow

```
User Answer → Zustand Store → Score Calculator → Result
                ↓
         Test Data (JSON)
```

### Type Safety

All data structures are typed with TypeScript:

```typescript
// From @personality-app/types
PersonalityCode, Question, Answer, TestResult, etc.
```

### Mock API

The project uses JSON data with a mock API interface that simulates async calls:

```typescript
// Current: JSON import
import { questions } from '@personality-app/test-data';

// Future: Backend API
const response = await fetch('/api/questions');
```

## 🎨 Personality Types

### 16 Types Across 4 Roles

1. **Analysts** (Purple `#88619A`)
   - INTJ (Architect), INTP (Logician), ENTJ (Commander), ENTP (Debater)

2. **Diplomats** (Green `#33A474`)
   - INFJ (Advocate), INFP (Mediator), ENFJ (Protagonist), ENFP (Campaigner)

3. **Sentinels** (Blue `#4298B4`)
   - ISTJ (Logistician), ISFJ (Defender), ESTJ (Executive), ESFJ (Consul)

4. **Explorers** (Yellow `#E4AE3A`)
   - ISTP (Virtuoso), ISFP (Adventurer), ESTP (Entrepreneur), ESFP (Entertainer)

## 🔧 Configuration

### Tailwind Colors

Custom colors are configured in `tailwind.config.ts`:

```typescript
colors: {
  'analyst': '#88619A',
  'diplomat': '#33A474',
  'sentinel': '#4298B4',
  'explorer': '#E4AE3A',
}
```

### TypeScript Paths

Configured for easy imports:

```typescript
import { Question } from '@personality-app/types';
import { questions } from '@personality-app/test-data';
import { Component } from '@/components/Component';
```

## 🚧 Upcoming Features

- [ ] Test question page with progress bar
- [ ] Result page with detailed analysis
- [ ] Photocard generator (html-to-image)
- [ ] All 16 personality detail pages
- [ ] Backend API integration
- [ ] Database persistence (PostgreSQL)
- [ ] Advanced analytics

## 📝 Adding Backend Later

The project is structured for easy backend integration:

1. Replace mock API in `packages/test-data/src/index.ts`
2. Update API calls to use real endpoints
3. Add backend in `apps/backend/` (NestJS suggested)
4. Use shared types from `@personality-app/types`

## 🤝 Contributing

1. Write tests first (TDD approach)
2. Ensure all tests pass: `pnpm test`
3. Type check: `pnpm type-check`
4. Lint: `pnpm lint`

## 📄 License

MIT

## 🙋‍♂️ Support

For questions or issues, please open a GitHub issue.

---

Built with ❤️ using Next.js, TypeScript, and TDD methodology
