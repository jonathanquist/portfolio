import Link from 'next/link';

const links = [
  {
    id: 1,
    title: 'Intro',
    href: '#intro',
  },
  {
    id: 2,
    title: 'Understanding the user',
    href: '#understanding-user',
  },
  {
    id: 3,
    title: 'Starting the design',
    href: '#starting-design',
  },
  {
    id: 4,
    title: 'Refining the design',
    href: '#refining-design',
  },
  {
    id: 5,
    title: 'Going forward',
    href: '#going-forward',
  },
];

const Shortcut = () => {
  return (
    <div className="fixed text-xs">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shortcut;
