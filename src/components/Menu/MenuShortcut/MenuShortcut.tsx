import Link from "next/link";

const links = [
  {
    id: 1,
    title: "Intro",
    href: "#intro",
  },
  {
    id: 2,
    title: "Understanding the user",
    href: "#understanding-user",
  },
  {
    id: 3,
    title: "Starting the design",
    href: "#starting-design",
  },
  {
    id: 4,
    title: "Refining the design",
    href: "#refining-design",
  },
  {
    id: 5,
    title: "Going forward",
    href: "#going-forward",
  },
  {
    id: 6,
    title: "View results",
    href: "#outro",
  },
];

const Shortcut = () => {
  return (
    <ul className="flex flex-col lg:gap-2 xl:gap-4">
      {links.map((link) => (
        <li
          key={link.id}
          className="w-fit whitespace-nowrap text-xl opacity-50 transition duration-200 hover:translate-x-4 hover:opacity-100 xl:text-3xl"
        >
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Shortcut;
