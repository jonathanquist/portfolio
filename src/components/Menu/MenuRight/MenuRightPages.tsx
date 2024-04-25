import { Hint } from '@/components/UI';
import { pages, social } from './links.const';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuRightPages = () => {
  const path = usePathname();
  console.log(path);
  return (
    <div>
      <ul>
        {pages.map((page) => (
          <li key={page.path}>
            <Link
              href={page.path}
              className={`${path === page.path ? 'text-blue-500' : ''}`}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuRightPages;
