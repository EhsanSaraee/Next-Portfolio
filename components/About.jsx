import Link from 'next/link';

const About = () => {
   return (
      <section className="w-full md:h-screen p-2 flex items-center py-16">
         <section className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
            <div className="col-span-2 mb-4">
               <p>About</p>
               <h2 className="mb-8">Who I Am</h2>
               <p className="py-2 text-gray-600">
                  My name is Ehsan, live in Iran/Mashhad, a self-taught
                  front-end web developer. Currently I&apos;m 24 and I start
                  learning programming from 23 with HTML & CSS That&apos;s where
                  I made my first static web app.
               </p>
               <p className="py-2 text-gray-600">
                  I&apos;m always looking for new opportunities to learn and
                  grow. More than one year I created over 50 different projects
                  and practice so much that you can see in my{' '}
                  <Link href="https://github.com/EhsanSaraee?tab=repositories">
                     <span className="text-[#5651e5] underline cursor-pointer rounded-full p-1">
                        Github
                     </span>
                  </Link>{' '}
                  account.
               </p>
               <Link href="/#projects">
                  <p className="py-2 underline cursor-pointer text-[#5651e5]">
                     Check out some of my latest projects.
                  </p>
               </Link>
            </div>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300">
               <img
                  className="rounded-xl"
                  src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
                  alt="about-image"
               />
            </div>
         </section>
      </section>
   );
};
export default About;
