// eslint-disable-next-line react/prop-types
function Skill({ skill }) {
  return (
    <div className="font-semibold border border-primary px-6 py-2  mb-4 rounded hover:bg-primary
     hover:border-black hover:text-black hover:cursor-pointer hover-wobble ">
      {skill}
    </div>
  );
}

export default Skill;
