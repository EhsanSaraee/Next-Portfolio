import ProjectItem from './ProjectItem';
import Portfolio from '../public/assets/projects/Portfolio.png';
import GPT3 from '../public/assets/projects/GPT-3.png';
import GriffinTech from '../public/assets/projects/Griffin-Tech.png';
import Travelya from '../public/assets/projects/Travelya.png';
import STARBUCKS from '../public/assets/projects/STARBUCKS.png';
import ComfySlothStore from '../public/assets/projects/Comfy-Sloth-Store.png';
import Cryptoffin from '../public/assets/projects/Cryptoffin.png';
import RealEstate from '../public/assets/projects/Real-Estate.png';

const Projects = () => {
   return (
      <section id='projects' className="w-full">
         <section className="max-w-[1240px] px-2 py-16 mx-auto">
            <p className="text-xl tracking-widest uppercase text-[#5651e5] font-bold">
               Projects
            </p>
            <h2 className="py-4">What I&apos;ve Built</h2>
            <div className="grid md:grid-cols-2 gap-8">
               <ProjectItem
                  title="Personal Portfolio"
                  backgroundImg={Portfolio}
                  alt="portfolio"
                  projectUrl="/personal-portfolio"
                  tool
               />
               <ProjectItem
                  title="GPT-3"
                  backgroundImg={GPT3}
                  alt="gpt-3"
                  projectUrl="/gpt-3"
               />
               <ProjectItem
                  title="Griffin Tech"
                  backgroundImg={GriffinTech}
                  alt="griffin tech"
                  projectUrl="/griffin-tech"
                  tool
               />
               <ProjectItem
                  title="Travelya"
                  backgroundImg={Travelya}
                  alt="travelya"
                  projectUrl="/travelya"
               />
               <ProjectItem
                  title="STARBUCKS"
                  backgroundImg={STARBUCKS}
                  alt="starbucks"
                  projectUrl="/starbucks"
               />
               <ProjectItem
                  title="Comfy Sloth Store"
                  backgroundImg={ComfySlothStore}
                  alt="comfy sloth store"
                  projectUrl="/comfy-sloth-store"
               />
               <ProjectItem
                  title="Cryptoffin"
                  backgroundImg={Cryptoffin}
                  alt="cryptoffin"
                  projectUrl="/cryptoffin"
               />
               <ProjectItem
                  title="Real Estate"
                  backgroundImg={RealEstate}
                  alt="real estate"
                  projectUrl="/real-estate"
                  tool
               />
            </div>
         </section>
      </section>
   );
};
export default Projects;
