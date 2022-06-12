import Image from 'next/image';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import TravelyaImg from '../public/assets/projects/Travelya.png';
import Layout from 'layouts/Layout';

const Travelya = () => {
   return (
      <Layout title="Projects | Travelya">
         <div className="w-full">
            <section className="w-screen h-[30vh] lg:h-[40vh] relative">
               <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
               <Image
                  src={TravelyaImg}
                  layout="fill"
                  objectFit="cover"
                  className="absolute z-1"
                  alt="travelya"
               />
               <div className="absolute top-[70%] w-full max-w-[1240px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
                  <h2 className="py-2">Travelya</h2>
                  <h3>React JS / Typescript / Vercel</h3>
               </div>
            </section>
            <section className="max-w-[1240px] mx-auto grid p-2 md:grid-cols-5 gap-8 pt-8">
               <div className="col-span-4">
                  <p className="text-[#5651e5] text-xl">Project</p>
                  <h2>Overview</h2>
                  <p className="mt-4">
                     This app was built using React JS and is hosted on Vercel.
                     The purpose of this project is to create a modern
                     responsive website with huge background image and a smooth
                     slider for other images with no special logic. the focus of
                     this project create just a simple website with a simple
                     design. You can see the code and a live demo of the project
                     down below.
                  </p>
                  <a
                     href="https://travelya-coral.vercel.app/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <button className="px-8 py-2 mt-6 mr-8 hover:bg-gradient-to-l">
                        Demo
                     </button>
                  </a>
                  <a
                     href="https://github.com/EhsanSaraee/travelya"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <button className="px-8 py-2 mt-4 hover:bg-gradient-to-l">
                        Code
                     </button>
                  </a>
                  <Link href="/#projects" passHref>
                     <p className="cursor-pointer border-none p-1 rounded-full bg-[#61686d] text-white w-28 text-center text-xl  hover:bg-[#7a838a] ease-in duration-200 mt-32">
                        Back
                     </p>
                  </Link>
               </div>
               <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                  <div className="p-2">
                     <p className="text-center font-bold pb-2">Technologies</p>
                     <div className="grid grid-cols-3 md:grid-cols-1">
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" /> React.js
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" /> Tailwind
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" /> Typescript
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" /> Vercel
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" /> React-Icons
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" />{' '}
                           Styled-Components
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" />{' '}
                           React-Responsive
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" /> React-Scroll
                        </p>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </Layout>
   );
};
export default Travelya;
