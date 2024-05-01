import { TypeAnimation } from "react-type-animation";

function TypewritterEffect() {
  return (
    <div className="text-2xl flex flex-row  text-primary mt-2 md:mt-2 md:text-3xl">
      

      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "A Full Stack Web Developer",
          4000, // wait 1s before replacing words
          "A React Developer",
          4000,
          "A Node JS Developer",
          4000,
          "An Anime Buff ",
          4000,
          "A Bike Enthusiast ...",
          4000,
        ]}
        wrapper="span"
        speed={40}
        repeat={Infinity}
      />
    </div>
  );
}

export default TypewritterEffect;
