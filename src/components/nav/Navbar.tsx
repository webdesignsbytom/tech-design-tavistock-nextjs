import { NavItem } from './NavItem';

export function Navbar() {
  // Array of links
const links = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Services', href: '/services' },
  { title: 'Contact', href: '/contact' },
  { title: 'Blog', href: '/blog' },
];

  return (
    <nav className='grid w-full bg-secondary-colour text-secondary-text-colour'>
      <div className=''>
        <ul className='flex space-x-4'>
          {links.map((link, index) => (
            <NavItem key={link.title} id={`Link ${index}`} title={link.title} href={link.href} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
