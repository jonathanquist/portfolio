import Link from 'next/link';

const links = [
  {
    id: 1,
    title: 'Intro',
    href: '#section1',
  },
  {
    id: 2,
    title: 'Understanding the user',
    href: '#section2',
  },
  {
    id: 3,
    title: 'Starting the design',
    href: '#section3',
  },
  {
    id: 4,
    title: 'Refining the design',
    href: '#section4',
  },
  {
    id: 5,
    title: 'Going forward',
    href: '#section5',
  },
];

const Shortcut = () => {
  return (
    <div>
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
