import Image from 'next/image';

const Skill = ({ src, alt, text }) => {
   return (
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
         <section className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
               <Image
                  src={src}
                  alt={alt}
                  width={64}
                  height={64}
                  quality={100}
                  objectFit="contain"
               />
            </div>
            <div className="flex flex-col justify-center items-center">
               <h3>{text}</h3>
            </div>
         </section>
      </div>
   );
};
export default Skill;
