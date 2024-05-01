import meImg from "../assets/me.png";
function HeroImage() {
  return (
    <div className="rounded-full bg-primary  overflow-hidden heroImgGlow">
      <img className="rounded-full h-60 md:h-full" src={meImg} alt="" />
    </div>
  );
}

export default HeroImage;
