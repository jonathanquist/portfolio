import { Hint } from '@/components/UI';
import { social } from './links.const';
import Link from 'next/link';

const MenuRightSocial = () => {
  return (
    <div>
      <p>You can reach me at</p>
      <div className="flex gap-1">
        {social.map((item) => (
          <Hint key={item.link} label={item.tooltip}>
            <Link
              href={item.link}
              target="_blank"
              rel="noreferrer"
              aria-label={item.tooltip}
            >
              <item.Icon className="w-6 h-6" />
            </Link>
          </Hint>
        ))}
      </div>
    </div>
  );
};

export default MenuRightSocial;
