import ProjectItem from './ProjectItem';
import PortfolioImg from '../public/assets/projects/Portfolio.png';
import GPT3Img from '../public/assets/projects/GPT-3.png';
import GriffinTechImg from '../public/assets/projects/Griffin-Tech.png';
import TravelyaImg from '../public/assets/projects/Travelya.png';
import STARBUCKSImg from '../public/assets/projects/STARBUCKS.png';
import ComfySlothStoreImg from '../public/assets/projects/Comfy-Sloth-Store.png';
import RealEstateImg from '../public/assets/projects/Real-Estate.png';

const Projects = () => {
   return (
      <section id="projects" className="w-full">
         <section className="max-w-[1240px] px-2 py-16 mx-auto">
            <p className="text-xl tracking-widest uppercase text-[#5651e5] font-bold">
               Projects
            </p>
            <h2 className="py-4">What I&apos;ve Built</h2>
            <div className="grid md:grid-cols-2 gap-8">
               <ProjectItem
                  title="Personal Portfolio"
                  backgroundImg={PortfolioImg}
                  alt="portfolio"
                  projectUrl="/portfolio"
                  tool
               />
               <ProjectItem
                  title="GPT-3"
                  backgroundImg={GPT3Img}
                  alt="gpt-3"
                  projectUrl="/gpt-3"
               />
               <ProjectItem
                  title="Griffin Tech"
                  backgroundImg={GriffinTechImg}
                  alt="griffin tech"
                  projectUrl="/griffin-tech"
                  tool
               />
               <ProjectItem
                  title="Travelya"
                  backgroundImg={TravelyaImg}
                  alt="travelya"
                  projectUrl="/travelya"
               />
               <ProjectItem
                  title="STARBUCKS"
                  backgroundImg={STARBUCKSImg}
                  alt="starbucks"
                  projectUrl="/starbucks"
               />
               <ProjectItem
                  title="Comfy Sloth Store"
                  backgroundImg={ComfySlothStoreImg}
                  alt="comfy sloth store"
                  projectUrl="/comfy-sloth-store"
               />
               <ProjectItem
                  title="Real Estate"
                  backgroundImg={RealEstateImg}
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
