import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Hero = () => {
   return (
      <section className="w-full h-screen text-center">
         <section className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
               <p className="uppercase tracking-widest text-sm text-gray-600">
                  let&apos;s build something together
               </p>
               <h1 className="py-4 text-gray-700">
                  Hi, I&apos;m <span className="text-[#5651e5]">Ehsan</span>
               </h1>
               <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
               <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                  I&apos;m a front-end web developer specializing in building
                  responsive modern websites. Currently, I&apos;m focused on
                  building beautiful and scalable front-end web applications
                  while learning ui/ux concepts.
               </p>
               <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                     <FaLinkedinIn size={22} />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                     <FaGithub size={22} />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                     <AiOutlineMail size={22} />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                     <BsFillPersonLinesFill size={22} />
                  </div>
               </div>
            </div>
         </section>
      </section>
   );
};
export default Hero;