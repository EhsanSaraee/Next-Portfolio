import Skill from './Skill';

const Skills = () => {
   return (
      <section className="w-full lg:h-screen p-2">
         <div className="max-w-[1240px] flex flex-col mx-auto h-full justify-center">
            <p className="text-xl uppercase text-[#5156e5] tracking-widest">
               Skills
            </p>
            <h2 className="py-4">What I Can Do</h2>
            <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               <Skill src="/assets/skills/html.png" alt="HTML" text="HTML" />
               <Skill src="/assets/skills/css.png" alt="CSS" text="CSS" />
               <Skill
                  src="/assets/skills/javascript.png"
                  alt="javascript"
                  text="JavaScript"
               />
               <Skill
                  src="/assets/skills/react.png"
                  alt="react"
                  text="React.js"
               />
               <Skill
                  src="/assets/skills/tailwind.png"
                  alt="tailwind"
                  text="Tailwind"
               />
               <Skill
                  src="/assets/skills/mui.png"
                  alt="mui"
                  text="Material UI"
               />
               <Skill
                  src="/assets/skills/nextjs.png"
                  alt="nextjs"
                  text="Next.js"
               />
               <Skill
                  src="/assets/skills/redux-toolkit.png"
                  alt="redux-toolkit"
                  text="Redux Toolkit"
               />
               <Skill src="/assets/skills/git.png" alt="git" text="Git" />
               <Skill
                  src="/assets/skills/github1.png"
                  alt="github1"
                  text="Github"
               />
               <Skill
                  src="/assets/skills/mongo.png"
                  alt="mongo"
                  text="MongoDB"
               />
               <Skill
                  src="/assets/skills/firebase.png"
                  alt="firebase"
                  text="Firebase"
               />
            </section>
         </div>
      </section>
   );
};

export default Skills;
