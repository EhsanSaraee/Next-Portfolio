import Link from 'next/link';

const MobileLinks = ({ setNav }) => {
   return (
      <ul className="uppercase">
         <Link href="/" passHref>
            <li onClick={() => setNav(false)} className="py-4 text-sm">
               Home
            </li>
         </Link>
         <Link href="/#about" passHref>
            <li onClick={() => setNav(false)} className="py-4 text-sm">
               About
            </li>
         </Link>
         <Link href="/#skills" passHref>
            <li onClick={() => setNav(false)} className="py-4 text-sm">
               Skills
            </li>
         </Link>
         <Link href="/#projects" passHref>
            <li onClick={() => setNav(false)} className="py-4 text-sm">
               Projects
            </li>
         </Link>
         <Link href="/#contact" passHref>
            <li onClick={() => setNav(false)} className="py-4 text-sm">
               Contact
            </li>
         </Link>
      </ul>
   );
};
export default MobileLinks;
