import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import HeaderLinks from './HeaderLinks';
import MobileLinks from './MobileLinks';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
   const [nav, setNav] = useState(false);
   const [shadow, setShadow] = useState(false);
   const [navBg, setNavBg] = useState('#ecf0f3');
   const [linkColor, setLinkColor] = useState('#1f2937');
   const router = useRouter();

   useEffect(() => {
      if (
         router.asPath === '/portfolio' ||
         router.asPath === '/gpt-3' ||
         router.asPath === '/griffin-tech' ||
         router.asPath === '/travelya' ||
         router.asPath === '/starbucks' ||
         router.asPath === '/comfy-sloth-store' ||
         router.asPath === '/real-estate'
      ) {
         setNavBg('transparent');
         setLinkColor('#ecf0f3');
      } else {
         setNavBg('#ecf0f3');
         setLinkColor('#1f2937');
      }
   }, [router]);

   const handleNav = () => {
      setNav((prevNav) => !prevNav);
   };

   useEffect(() => {
      const handleShadow = () => {
         if (window.scrollY >= 80) {
            setShadow(true);
         } else {
            setShadow(false);
         }
      };
      window.addEventListener('scroll', handleShadow);
   }, []);

   return (
      <section
         style={{ backgroundColor: `${navBg}` }}
         className={
            shadow
               ? 'fixed w-full h-20 shadow-xl z-[100]'
               : 'fixed w-full h-20 z-[100]'
         }
      >
         <section className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            <Link href="/">
               <Image
                  src="/assets/Logo_8.png"
                  alt="Logo"
                  width={120}
                  height={80}
                  objectFit="contain"
                  quality={100}
                  className="cursor-pointer"
               />
            </Link>
            <nav>
               <HeaderLinks linkColor={linkColor} />
               <div
                  style={{ color: `${linkColor}` }}
                  onClick={handleNav}
                  className="md:hidden cursor-pointer"
               >
                  <AiOutlineMenu size={25} />
               </div>
            </nav>
         </section>
         <section
            className={
               nav
                  ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
                  : ''
            }
         >
            <div
               className={
                  nav
                     ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                     : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
               }
            >
               <div>
                  <section className="flex w-full items-center justify-between">
                     <Link href="/" passHref>
                        <Image
                           src="/assets/Logo_8.png"
                           alt="Logo"
                           width={50}
                           height={60}
                           quality={100}
                           objectFit="contain"
                           onClick={() => setNav(false)}
                           className="cursor-pointer"
                        />
                     </Link>
                     <div
                        onClick={handleNav}
                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                     >
                        <AiOutlineClose />
                     </div>
                  </section>
                  <div className="border-b border-gray-300 my-4">
                     <p className="w-[85%] md:w-[90%] py-4">
                        Let&apos;s build something legendary together
                     </p>
                  </div>
               </div>
               <nav className="py-4 flex flex-col">
                  <MobileLinks setNav={setNav} />
                  <section className="pt-20">
                     <p className="uppercase tracking-widest text-[#5651e5]">
                        Let&apos;s Connect
                     </p>
                     <div className="flex justify-between items-center my-4 w-full sm:w-[80%]">
                        <a
                           href="https://www.linkedin.com/in/ehsan-saraee-9b8919241"
                           target="_blank"
                           rel="noreferrer"
                        >
                           <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                              <FaLinkedinIn size={20} />
                           </div>
                        </a>
                        <a
                           href="https://github.com/EhsanSaraee"
                           target="_blank"
                           rel="noreferrer"
                        >
                           <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                              <FaGithub size={20} />
                           </div>
                        </a>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                           <AiOutlineMail size={20} />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                           <FaWhatsapp size={20} />
                        </div>
                     </div>
                  </section>
               </nav>
            </div>
         </section>
      </section>
   );
};
export default Navbar;
