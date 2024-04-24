import { SVGProps } from 'react';

export function IconPlaceholder(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="" fill="currentColor" />
    </svg>
  );
}
