
export default function BestProject() {
  return (
    <section id="best-project" className="slide-section flex flex-col md:flex-row items-center gap-8 justify-between">
      <div className="w-full flex justify-between items-center mb-7">
        <div className="font-oswald text-[2rem] sm:text-[2.7rem] uppercase font-bold tracking-tight">Best Project</div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <div className="text-beige text-xl font-semibold mb-3">Order Tracking System (BICI)</div>
          <div className="text-muted mb-3">
            Real-time solution for managing and tracking orders and production flows in printing (Java).
            Key strengths include a real-time dashboard, robust search, and easy deployment.
          </div>
        </div>
      </div>
    </section>
  );
}
