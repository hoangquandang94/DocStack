import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  badge: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Nghiệp Vụ & Phân Tích (BA)',
    badge: '📋 Chuẩn SRS & User Story',
    description: (
      <>
        Quy chuẩn viết User Story, tiêu chí chấp nhận (Acceptance Criteria),
        mô hình luồng nghiệp vụ với sơ đồ Mermaid trực quan, giúp BA và Dev luôn hiểu đồng nhất.
      </>
    ),
  },
  {
    title: '.NET Backend & Architecture',
    badge: '⚡ Clean Architecture & CQRS',
    description: (
      <>
        Tiêu chuẩn kiến trúc ứng dụng .NET hiện đại, hướng dẫn EF Core & Dapper, chuẩn hóa REST API,
        Middleware xử lý lỗi tập trung và bảo mật JWT.
      </>
    ),
  },
  {
    title: 'DevOps, Frontend & QA',
    badge: '🚀 Tự Động Hóa & Kiểm Thử',
    description: (
      <>
        Dockerfile đa tầng tối ưu, file Docker Compose khởi động CSDL local trong 1 click,
        cùng quy chuẩn Frontend React/Next.js và checklist kiểm thử QA.
      </>
    ),
  },
];

function Feature({title, badge, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="card shadow--md" style={{height: '100%', padding: '1.5rem', borderRadius: '12px'}}>
        <div style={{fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)', marginBottom: '0.5rem'}}>
          {badge}
        </div>
        <Heading as="h3" style={{marginBottom: '0.75rem'}}>{title}</Heading>
        <p style={{color: 'var(--ifm-font-color-secondary)', fontSize: '0.95rem'}}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features} style={{padding: '3rem 0'}}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
