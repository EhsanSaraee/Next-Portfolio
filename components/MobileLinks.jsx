import Link from 'next/link';

const MobileLinks = () => {
   return (
      <ul className="uppercase">
         <Link href="/">
            <li className="py-4 text-sm">Home</li>
         </Link>
         <Link href="/">
            <li className="py-4 text-sm">About</li>
         </Link>
         <Link href="/">
            <li className="py-4 text-sm">Skills</li>
         </Link>
         <Link href="/">
            <li className="py-4 text-sm">Projects</li>
         </Link>
         <Link href="/">
            <li className="py-4 text-sm">Contact</li>
         </Link>
      </ul>
   );
};
export default MobileLinks;
