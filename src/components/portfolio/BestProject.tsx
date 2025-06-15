
const profileImg = "/lovable-uploads/c58de510-be2f-4999-b017-6fa9ffabe1bb.png";

export default function BestProject() {
  return (
    <section id="best-project" className="slide-section flex flex-col md:flex-row items-center gap-8 justify-between">
      <div className="w-full flex justify-between items-center mb-7">
        <div className="font-oswald text-[2rem] sm:text-[2.7rem] uppercase font-bold tracking-tight">Best Project</div>
        <div className="text-xs text-muted">dm034.github.io</div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center gap-8">
        <img src={profileImg} alt="Best Project" className="slide-img object-cover max-w-[220px]" />
        <div className="flex-1">
          <div className="text-beige text-xl font-semibold mb-3">Order Tracking System (BICI)</div>
          <div className="text-muted mb-3">
            Real-time solution for managing and tracking orders and production flows in printing (Java).
            Key strengths include real-time dashboard, robust search, and deployment.
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between text-xs mt-7">
        <span>Michael Raharison</span>
        <span>dm034.github.io</span>
      </div>
    </section>
  );
}
