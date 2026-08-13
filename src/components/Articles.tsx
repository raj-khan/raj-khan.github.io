import { Icon } from '@/components/Icons'

type Article = {
  title: string;
  src: 'medium' | 'blog';
  date: string;
  href: string;
}

const ARTICLES: Article[] = [
  {
    title: 'Building Scalable APIs with NestJS and PostgreSQL',
    src: 'blog',
    date: 'Aug 2024',
    href: '/blog/scalable-apis-nestjs-postgresql',
  },
  {
    title: 'AWS CloudWatch Alarms for Node.js Background Jobs: A Practical Setup',
    src: 'medium',
    date: 'Dec 2025',
    href: 'https://rajkhaan.medium.com/aws-cloudwatch-alarms-for-node-js-background-jobs-a-practical-setup-94f59e06a7d7',
  },
  {
    title: 'Export Google Contacts using Node.js and People API',
    src: 'medium',
    date: 'Nov 2020',
    href: 'https://rajkhaan.medium.com/export-google-contacts-using-node-js-and-people-api-662039ab6730',
  },
  {
    title:
      'Configuring Nginx, PHP, MySQL, PHPMyAdmin on Ubuntu 20.04 (A to Z) — with Project Deployment',
    src: 'medium',
    date: 'Sep 2020',
    href: 'https://rajkhaan.medium.com/configuring-nginx-php-mysql-phpmyadmin-on-ubuntu-20-04-a-to-z-with-project-deployment-cf47bd3d1715',
  },
  {
    title: 'Nginx, Apache2 Configuration for CodeIgniter',
    src: 'medium',
    date: 'Sep 2020',
    href: 'https://rajkhaan.medium.com/nginx-apache2-configuration-for-codeigniter-444872ff6ab2',
  },
  {
    title: 'Laragon — The best alternative of the Xampp server!',
    src: 'medium',
    date: 'May 2020',
    href: 'https://rajkhaan.medium.com/laragon-the-best-alternative-of-the-xampp-server-b0444720b8b6',
  },
  {
    title: 'Customize your own Image',
    src: 'medium',
    date: 'Mar 2020',
    href: 'https://rajkhaan.medium.com/customize-your-own-image-b427a2eb5af9',
  },
]

export function Articles() {
  return (
    <section className="section container" id="articles">
      <div className="section-head">
        <h2 className="section-title">Articles</h2>
        <a
          className="section-link"
          href="https://medium.com/@rajkhaan"
          target="_blank"
          rel="noopener noreferrer"
        >
          medium.com/@rajkhaan <Icon.external />
        </a>
      </div>

      <div className="art-list">
        {ARTICLES.map((a, i) => (
          <a
            className="art-row"
            key={i}
            href={a.href}
            target={a.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
          >
            <div>
              <div className="art-title">{a.title}</div>
              <div className="art-meta">
                <span className="src">{a.src === 'medium' ? 'Medium' : 'Blog'}</span>
                <span>{a.date}</span>
              </div>
            </div>
            <span className="art-arrow">
              <Icon.arrowRight />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
