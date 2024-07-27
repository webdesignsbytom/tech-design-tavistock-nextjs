import Link from 'next/link';

type NavItemProps = {
    id: string;
    title: string;
    href: string;
}
export function NavItem({ id, title, href }: NavItemProps) {
    return (
      <li id={id}>
        <Link href={href} className=''>
          {title}
        </Link>
      </li>
    );
  }
  