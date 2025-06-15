
export default function Experience() {
  return (
    <section id="experience" className="slide-section flex flex-col md:flex-row items-start gap-8 justify-between">
      <div className="flex-1 flex flex-col justify-center">
        <div className="font-oswald text-[2.9rem] sm:text-[3.5rem] uppercase font-bold mb-6 tracking-tight">Work Experience</div>
        <div className="flex flex-col gap-7">
          <div>
            <div className="font-bold text-beige text-[1.09rem] mb-1">Dec 2024 - Present<br /><span className="font-normal">Master 1 Student: Team/Tech Lead</span></div>
            <div className="text-muted text-sm mb-2">
              Working on university-run client projects, mentoring undergraduates, researching distributed applications.<br />
              <ul className="list-disc list-inside">
                <li>Leading a team for a real-world application for a local startup</li>
                <li>Technical talks and campus hackathons facilitation</li>
                <li>Direct client meetings for requirements gathering & delivery</li>
              </ul>
            </div>
          </div>
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
            <div className="font-bold text-beige text-[1.09rem] mb-1">2022 - 2023<br /><span className="font-normal">Client Relationship Agent</span></div>
            <div className="text-muted text-sm mb-2">Managed clients' requests and inquiries at a local service provider, supporting day-to-day customer satisfaction and data updates.</div>
            <ul className="list-disc list-inside text-muted text-sm mb-2">
              <li>Handled new customer onboarding and follow-ups</li>
              <li>Responded to phone and email inquiries effectively</li>
              <li>Continuous improvement of client support processes</li>
            </ul>
          </div>
        </div>
        <div className="text-xs text-muted mt-9">Michael Raharison</div>
      </div>
    </section>
  );
}
