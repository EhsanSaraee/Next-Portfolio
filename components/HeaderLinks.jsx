import Link from 'next/link';

const HeaderLinks = ({ linkColor }) => {
   return (
      <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
         <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
         </Link>
         <Link href="/#about">
            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
         </Link>
         <Link href="/#skills">
            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
         </Link>
         <Link href="/#projects">
            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
         </Link>
         <Link href="/#contact">
            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
         </Link>
      </ul>
   );
};
export default HeaderLinks;
