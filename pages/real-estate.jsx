import Image from 'next/image';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Layout from 'layouts/Layout';
import RealEstateImg from '../public/assets/projects/Real-Estate.png';

const RealEstate = () => {
   return (
      <Layout title="Projects | Real Estate">
         <div className="w-full">
            <section className="w-screen h-[30vh] lg:h-[40vh] relative">
               <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
               <Image
                  src={RealEstateImg}
                  layout="fill"
                  objectFit="cover"
                  className="absolute z-1"
                  alt="real estate"
               />
               <div className="absolute top-[70%] w-full max-w-[1240px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                  <h2 className="py-2">Real Estate</h2>
                  <h3>Next JS / Chakra UI / Vercel</h3>
               </div>
            </section>
            <section className="max-w-[1240px] mx-auto grid p-2 md:grid-cols-5 gap-8 pt-8">
               <div className="col-span-4">
                  <p className="text-[#5651e5] text-xl">Project</p>
                  <h2>Overview</h2>
                  <p className="mt-4">
                     This app was built using Next JS and is hosted on Vercel.
                     The purpose of this project is to create a responsive and
                     modern website that is easy to use and easy to maintain.
                     user can view the real estate listings and also search for
                     properties and sorting them. The user can also view every
                     estate details. You can see the code and a live demo of the
                     project down below.
                  </p>
                  <a
                     href="https://realtor-one-gamma.vercel.app/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <button className="px-8 py-2 mt-6 mr-8 hover:bg-gradient-to-l">
                        Demo
                     </button>
                  </a>
                  <a
                     href="https://github.com/EhsanSaraee/Estate-App"
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
                           <RiRadioButtonFill className="pr-1" /> Next.js
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" /> Chakra UI
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
                           <RiRadioButtonFill className="pr-1" /> Framer-Motion
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" /> Emotion
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                           <RiRadioButtonFill className="pr-1" /> Axios
                        </p>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </Layout>
   );
};
export default RealEstate;
