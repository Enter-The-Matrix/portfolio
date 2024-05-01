import { useState } from "react";

function NavigationBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToTarget = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="home" className="w-full bg-black z-50">
      <div className="flex justify-between items-center h-20 pr-4 pl-2 md:h-20 md:pr-40 md:pl-10 ">
        <h1  className="text-2xl md:text-4xl text-white font-bold logo-name hover:cursor-pointer"             
        onClick={() => scrollToTarget("home")}>
         Ashwani <span className="text-primary">Sajwan</span>
        </h1>

        {/* Toggle Button */}
        <button
          onClick={toggleMenu}
          className="text-white text-2xl md:hidden focus:outline-none mr-4 md:mr-0"
          style={{ marginLeft: 'auto' }} 
        >
          {showMenu ? (
            <>&#10005;</>
          ) : (
            <>
              &#9776;
              <span className="sr-only">Menu</span>
            </>
          )}
        </button>

        {/* Menu Items */}
        <div
          className={`text-lg md:text-xl font-bold  text-white space-y-4 md:space-y-0 md:space-x-6 text-glow md:flex ${
            showMenu ? "flex flex-col z-40 bg-black md:flex-row mt-44 md:mt-0 rounded p-2" : "hidden"
          }`}
        >
          <h1
            className="text-primary hover:cursor-pointer  hover:border-primary md:border-b-0"
            onClick={() => scrollToTarget("home")}
          >
            Home
          </h1>

           <h1
            onClick={() => scrollToTarget("skills")}
            className="hover:text-primary hover:cursor-pointer  hover:border-primary md:border-b-0"
          >
            Skills
          </h1>

          <h1
            onClick={() => scrollToTarget("experience")}
            className="hover:text-primary hover:cursor-pointer hover:border-primary md:border-b-0"
          >
            Experience
          </h1>
         
          <h1
            onClick={() => scrollToTarget("projects")}
            className="hover:text-primary  hover:cursor-pointer hover:border-primary md:border-b-0"
          >
            Projects
          </h1>
          <h1
            onClick={() => scrollToTarget("contact")}
            className="hover:text-primary  hover:cursor-pointer hover:border-primary md:border-b-0"
          >
            Contact Me
          </h1>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
