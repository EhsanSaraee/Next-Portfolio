import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import HeaderLinks from './HeaderLinks';
import MobileLinks from './MobileLinks';

const Navbar = () => {
   const [nav, setNav] = useState(false);

   const handleNav = () => {
      setNav((prevNav) => !prevNav);
   };

   return (
      <section className="fixed w-full h-20 shadow-xl z-[100]">
         <section className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            <Image
               src="/assets/Logo_8.png"
               alt="Logo"
               width={110}
               height={70}
               objectFit="contain"
               quality={100}
            />
            <nav>
               <HeaderLinks />
               <div onClick={handleNav} className="md:hidden">
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
                     <Image
                        src="/assets/Logo_8.png"
                        alt="Logo"
                        width={50}
                        height={60}
                        quality={100}
                        objectFit="contain"
                     />
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
                  <MobileLinks />
                  <section className="pt-20">
                     <p className="uppercase tracking-widest text-[#5651e5]">
                        Let&apos;s Connect
                     </p>
                     <div className="flex justify-between items-center my-4 w-full sm:w-[80%]">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                           <FaLinkedinIn />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                           <FaGithub />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                           <AiOutlineMail />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                           <BsFillPersonLinesFill />
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
