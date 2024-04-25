'use client';

import Project from '@/components/Project/Project';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Project slug={params.slug} />
    </div>
  );
}
