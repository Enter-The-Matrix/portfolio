import Skill from "../components/Skill";

function Skills() {
  return (
    <div id="skills" className="md:px-20 mt-10 md:mt-20 font-semibold">
      
      <h1 className="text-4xl  mt-6 mb-6 text-ends md:text-start text-primary text-glow">
        {" "}
        Skills
      </h1>
      <div className="flex items-center flex-wrap mt-6 p-10 gap-4">
        <Skill skill={"HTML"} />
        <Skill skill={"CSS"} />
        <Skill skill={"Javascript"} />
        <Skill skill={"React"} />
        <Skill skill={"Angular"} />
        <Skill skill={"MongoDB"} />
        <Skill skill={"Node JS"} />
        <Skill skill={"Express JS"} />
        <Skill skill={"Tailwind"} />
        <Skill skill={"Bootstrap"} />
        <Skill skill={"Git"} />
        <Skill skill={"Redux"} />
        <Skill skill={"Daisy UI"} />
        <Skill skill={"Ant Design"} />
        <Skill skill={"Material UI"} />
        <Skill skill={"Android"} />
      </div>
    </div>
  );
}

export default Skills;
