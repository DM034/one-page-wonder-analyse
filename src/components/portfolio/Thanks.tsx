
const profileImg = "/lovable-uploads/c58de510-be2f-4999-b017-6fa9ffabe1bb.png";

export default function Thanks() {
  return (
    <section id="thanks" className="slide-section flex flex-col items-center justify-center text-center">
      <div className="w-full flex justify-between items-center mb-6">
        <div></div>
        <div className="font-oswald text-[2.7rem] uppercase font-bold tracking-tight">THANK YOU</div>
        <div className="text-xs text-muted">dm034.github.io</div>
      </div>
      <img src={profileImg} alt="Thanks" className="slide-img object-cover max-w-[220px] mx-auto" />
      <div className="mt-7 text-xs text-muted">Michael Raharison</div>
    </section>
  );
}
