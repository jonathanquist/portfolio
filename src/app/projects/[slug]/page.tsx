'use client';

import Project from '@/components/Project/Project';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Project id={params.slug} />
    </div>
  );
}
