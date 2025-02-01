import React from "react";

const Skills = ({ skills }: { skills: string }) => {
  const skillsArray = skills.split(",");
  return (
    <>
      <section className="my-10 p-8">
        <div className="mt-10 lg:mt-20 flex flex-col justify-center items-center w-full gap-2">
          <p className="text-6xl md:text-8xl mt-1 font-bold  text-textBrown font-heading-barlow uppercase">
            My Skills
          </p>
        </div>

        <div
          className="mt-[100px]
        flex flex-wrap
        w-full gap-4 justify-center items-center"
        >
          {skillsArray.map((skill, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center h-[100px] w-[160px] border-2 border-textBrown rounded-2xl hover:scale-[1.08] duration-300 hover:shadow-2xl hover:bg-textPeach hover:text-2xl group"
              >
                <div className=" flex justify-center items-center flex-col text-xl group-hover:text-[23px] duration-300 italic  font-light text-center font-subtext-mont">
                  {skill}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Skills;
