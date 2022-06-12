import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
   return (
      <section id="contact" className="w-full lg:h-screen">
         <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
            <p className="text-xl tracking-widest uppercase text-[#5651e5] font-bold">
               Contact
            </p>
            <h2 className="py-4">Get In Touch</h2>
            <div className="grid lg:grid-cols-5 gap-8">
               <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                  <div className="h-full lg:p-4">
                     <div>
                        <img
                           src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
                           className="rounded-xl hover:scale-105 ease-in duration-300"
                           alt="contact"
                        />
                     </div>
                     <div>
                        <h2 className="py-2">Ehsan Saraee</h2>
                        <p>Front-End Developer</p>
                        <p className="py-4">
                           I am available for freelance or full-time, part-time
                           positions. Contact me and Let&apos;s talk.
                        </p>
                     </div>
                     <div>
                        <p className="uppercase pt-8 font-semibold">
                           Connect With Me
                        </p>
                        <div className="flex items-center justify-between py-4">
                           <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://www.linkedin.com/in/ehsan-saraee-9b8919241"
                           >
                              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                 <FaLinkedinIn size={20} />
                              </div>
                           </a>
                           <a
                              href="https://github.com/EhsanSaraee"
                              target="_blank"
                              rel="noreferrer"
                           >
                              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                 <FaGithub size={20} />
                              </div>
                           </a>
                           <a
                              href="https://twitter.com/saraee_ehsan"
                              target="_blank"
                              rel="noreferrer"
                           >
                              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                 <FaTwitter size={20} />
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               <section className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                  <div className="p-4">
                     <form
                        action="https://getform.io/f/3beb5344-4c7c-4a79-a298-e5029b812024"
                        method="POST"
                        encType="multipart/form-data"
                     >
                        <section className="grid md:grid-cols-2 gap-4 py-2 w-full">
                           <div className="flex flex-col">
                              <label
                                 htmlFor="name"
                                 className="uppercase text-sm py-2"
                              >
                                 Name
                              </label>
                              <input
                                 type="text"
                                 name="name"
                                 className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none"
                              />
                           </div>
                           <div className="flex flex-col">
                              <label
                                 htmlFor="phoneNumber"
                                 className="uppercase text-sm py-2"
                              >
                                 Phone Number
                              </label>
                              <input
                                 type="number"
                                 name="phoneNumber"
                                 className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none"
                              />
                           </div>
                        </section>
                        <div className="flex flex-col py-2">
                           <label
                              htmlFor="email"
                              className="uppercase text-sm py-2"
                           >
                              Email
                           </label>
                           <input
                              type="email"
                              name="email"
                              className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none"
                           />
                        </div>
                        <div className="flex flex-col py-2">
                           <label
                              htmlFor="subject"
                              className="uppercase text-sm py-2"
                           >
                              Subject
                           </label>
                           <input
                              type="text"
                              name="subject"
                              className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none"
                           />
                        </div>
                        <div className="flex flex-col py-2">
                           <label
                              htmlFor="message"
                              className="uppercase text-sm py-2"
                           >
                              Message
                           </label>
                           <textarea
                              name="message"
                              rows="10"
                              className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none"
                           />
                        </div>
                        <button className="w-full p-4 text-gray-100 mt-4 hover:bg-gradient-to-l">
                           Send Message
                        </button>
                     </form>
                  </div>
               </section>
            </div>
            <section className="flex justify-center py-12">
               <Link href="/" passHref>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                     <HiOutlineChevronDoubleUp
                        className="text-[#5651e5]"
                        size={30}
                     />
                  </div>
               </Link>
            </section>
         </div>
      </section>
   );
};
export default Contact;
