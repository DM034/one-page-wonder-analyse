
export default function Experience() {
  return (
    <section id="experience" className="slide-section flex flex-col md:flex-row items-start gap-8 justify-between">
      <div className="flex-1 flex flex-col justify-center">
        <div className="font-oswald text-[2.9rem] sm:text-[3.5rem] uppercase font-bold mb-6 tracking-tight">Work Experience</div>
        <div className="flex flex-col gap-7">
          <div>
            <div className="font-bold text-beige text-[1.09rem] mb-1">Jun 2024 - Nov 2024<br /><span className="font-normal">Printing Quote Management (BICI)</span></div>
            <div className="text-muted text-sm mb-2">Development of a real-time order and production tracking system (Java).</div>
            <ul className="list-disc list-inside text-muted text-sm mb-2">
              <li>Development of new features</li>
              <li>Page design and creation</li>
              <li>Code review and quality assurance</li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-beige text-[1.09rem] mb-1">Jun 2024 - Aug 2024<br /><span className="font-normal">Embedded Task Manager (ASTEK - Reskilling)</span></div>
            <div className="text-muted text-sm mb-2">Task management platform with reporting (C++, Raspberry Pi 4).</div>
            <ul className="list-disc list-inside text-muted text-sm mb-2">
              <li>Reporting module design</li>
              <li>User interface development</li>
              <li>Deployment on Raspberry Pi 4</li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-beige text-[1.09rem] mb-1">Academic Project<br /><span className="font-normal">Online Car Sales Platform</span></div>
            <div className="text-muted text-sm mb-2">Web platform for car sales (PHP/CodeIgniter, MySQL).</div>
            <ul className="list-disc list-inside text-muted text-sm mb-2">
              <li>Feature development and database design</li>
              <li>Vehicle navigation and comparison features</li>
            </ul>
          </div>
        </div>
        <div className="text-xs text-muted mt-9">Michael Raharison</div>
      </div>
    </section>
  );
}
