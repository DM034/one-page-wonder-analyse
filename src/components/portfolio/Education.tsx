
export default function Education() {
  return (
    <section id="education" className="slide-section flex flex-col md:flex-row items-start gap-8 justify-between">
      <div className="flex-1 flex flex-col justify-center">
        <div className="font-oswald text-[2.9rem] sm:text-[3.5rem] uppercase font-bold tracking-tight mb-5">Education</div>
        <div className="flex flex-col gap-6 text-base">
          <div>
            <div className="font-bold text-beige text-[1.09rem] mb-1">
              Dec 2024 - Present<br />
              <span className="font-normal">Master 1 in Computer Development</span>
            </div>
            <div className="text-muted text-sm mb-4">
              IT University Andoharanofotsy, Madagascar.<br />
              <ul className="list-disc list-inside">
                <li>Research and implementation of real-time distributed systems</li>
                <li>Team project management using agile methodologies</li>
                <li>Advanced software architecture and best practices</li>
                <li>Supervising junior projects and tech workshops</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="font-bold text-beige text-[1.09rem] mb-1">
              Sep 2021 - Jun 2024<br />
              <span className="font-normal">Bachelor in Computer Development</span>
            </div>
            <div className="text-muted text-sm mb-4">
              IT University Andoharanofotsy, Madagascar.
            </div>
          </div>
          <div>
            <div className="font-bold text-beige text-[1.09rem] mb-1">
              2019<br />
              <span className="font-normal">Initial Programming Training</span>
            </div>
            <div className="text-muted text-sm mb-4">IEFPA ACEEM.</div>
          </div>
        </div>
        <div className="text-xs text-muted mt-9">Michael Raharison</div>
      </div>
    </section>
  );
}
