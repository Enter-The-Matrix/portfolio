
import Socials from "../components/Socials";
import TypewritterEffect from "../components/TypewritterEffect";
import HeroImage from "../components/HeroImage";
function Home() {

  const scrollToTarget = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div id="home" className="flex flex-col-reverse md:flex-row md:w-full md:mt-10">

 {/* home description */}
      <div className=" md:ml-40 md:w-1/2 text-white flex flex-col justify-center sm:items-center md:items-start p-4">
        <h1 className="text-3xl ">
          {" "}
          Hi, <span className="text-primary"> Ashwani</span> here
        </h1>
        <h1>
          <TypewritterEffect/>
        </h1>
        <p className="text-sm md:text-base md:w-2/3 mt-4  ">
        A Passionate full stack developer with a flair for crafting innovative web apps and exploring cutting-edge frameworks. Fueled by a love for anime and fueled by the thrill of biking adventures. Welcome to my portfolio, where code meets creativity, and technology intertwines with passion.
        </p>
        <Socials/>
        <button className="mt-8 md:mt-6  border-2  border-primary font-bold text-primary py-2 px-6 rounded-full
           hover:text-black hover:bg-primary"
           onClick={()=>scrollToTarget("contact")}
           >Contact Me</button>
      </div>


{/* hero image */}
      <div className="flex justify-center items-center md:w-1/2 p-4">
        <HeroImage/>
      </div>
    </div>
  );
}

export default Home;
