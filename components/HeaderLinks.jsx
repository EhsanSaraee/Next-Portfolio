import Link from 'next/link';

const HeaderLinks = () => {
   return (
      <ul className="hidden md:flex">
         <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
         </Link>
         <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
         </Link>
         <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
         </Link>
         <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
         </Link>
         <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
         </Link>
      </ul>
   );
};
export default HeaderLinks;
