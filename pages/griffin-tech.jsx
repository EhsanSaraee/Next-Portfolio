import Image from 'next/image';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import GriffinTechImg from '../public/assets/projects/Griffin-Tech.png';
import Layout from 'layouts/Layout';

const GriffinTech = () => {
   return (
      <Layout title="Projects | Griffin Tech">
         <div className="w-full">
            <section className="w-screen h-[30vh] lg:h-[40vh] relative">
               <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
               <Image
                  src={GriffinTechImg}
                  layout="fill"
                  objectFit="cover"
                  className="absolute z-1"
                  alt="griffin tech"
               />
               <div className="absolute top-[70%] w-full max-w-[1240px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                  <h2 className="py-2">Griffin Tech</h2>
                  <h3>Next JS / CSS / Vercel</h3>
               </div>
            </section>
            <section className="max-w-[1240px] mx-auto grid p-2 md:grid-cols-5 gap-8 pt-8">
               <div className="col-span-4">
                  <p className="text-[#5651e5] text-xl">Project</p>
                  <h2>Overview</h2>
                  <p className="mt-4">
                     This app was built using Next JS and is hosted on Vercel.
                     The purpose of this project is to create a simple shopping
                     website. user can select an item and in cart he/she can
                     change the images and on the bottom of the cart page there
                     is a moving carousel of other similar products. You can see
                     the code and a live demo of the project down below.
                  </p>
                  <button className="px-8 py-2 mt-6 mr-8 hover:bg-gradient-to-l">
                     Demo
                  </button>
                  <button className="px-8 py-2 mt-4 hover:bg-gradient-to-l">
                     Code
                  </button>
                  <Link href="/#projects">
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
                           <RiRadioButtonFill className="pr-1" /> Next.js
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" /> CSS
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" /> Javascript
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" /> Vercel
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" /> React-Icons
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" /> Sanity
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" />
                           React-Hot-Toast
                        </p>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </Layout>
   );
};
export default GriffinTech;
