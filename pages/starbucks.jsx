import { RiRadioButtonFill } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';
import Layout from 'layouts/Layout';
import STARBUCKSImg from '../public/assets/projects/STARBUCKS.png';

const Starbucks = () => {
   return (
      <Layout title="Projects | STARBUCKS">
         <div className="w-full">
            <section className="w-screen h-[30vh] lg:h-[40vh] relative">
               <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
               <Image
                  src={STARBUCKSImg}
                  layout="fill"
                  objectFit="cover"
                  className="absolute z-1"
                  alt="starbucks"
               />
               <div className="absolute top-[70%] w-full max-w-[1240px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                  <h2 className="py-2">STARBUCKS</h2>
                  <h3>React JS / Redux-Toolkit / Firebase</h3>
               </div>
            </section>
            <section className="max-w-[1240px] mx-auto grid p-2 md:grid-cols-5 gap-8 pt-8">
               <div className="col-span-4">
                  <p className="text-[#5651e5] text-xl">Project</p>
                  <h2>Overview</h2>
                  <p className="mt-4">
                     This app was built using React JS and is hosted on Vercel.
                     The purpose of this project is to create a StarBucks clone,
                     responsive and mobile friendly and an Accordian in the
                     bottom of the site. user can sign up or login and order
                     drinks, food and coffee. You can see the code and a live
                     demo of the project down below.
                  </p>
                  <button className="px-8 py-2 mt-6 mr-8 hover:bg-gradient-to-l">
                     Demo
                  </button>
                  <button className="px-8 py-2 mt-4 hover:bg-gradient-to-l">
                     Code
                  </button>
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
                           <RiRadioButtonFill className="pr-1" /> Material UI
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" /> Javascript
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" /> Firebase
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" /> Redux-Toolkit
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" /> Framer-Motion
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" />
                           React-Hook-Form
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" />
                           Styled-Components
                        </p>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </Layout>
   );
};
export default Starbucks;
