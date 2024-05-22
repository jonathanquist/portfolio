import Link from "next/link";
import { Button } from "./Button";

interface IconProps {
  className?: string;
}

interface ButtonProps {
  href: string;
  Icon: React.FC<IconProps>;
  label: string;
}

const ButtonSpecial = ({ href, Icon, label }: ButtonProps) => {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 rounded-md bg-primary px-2 py-4 text-primary transition duration-200 hover:underline md:flex-col md:bg-transparent md:p-0"
    >
      <Button
        variant="ghost"
        className="h-fit bg-transparent transition duration-200 md:bg-background md:group-hover:bg-primary"
      >
        <Icon className="h-12 w-12 text-foreground md:h-64 md:w-64" />
      </Button>
      <span className="text-2xl text-foreground md:text-3xl">{label}</span>
    </Link>
  );
};

export { ButtonSpecial };
