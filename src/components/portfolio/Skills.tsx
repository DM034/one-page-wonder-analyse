
export default function Skills() {
  // Could extract these from a data object in the future
  const skillItems = [
    { name: "Java", value: 85 },
    { name: "C++", value: 70 },
    { name: "C#", value: 60 },
    { name: ".NET", value: 60 },
    { name: "PHP", value: 50 },
    { name: "PostgreSQL", value: 85 },
    { name: "Oracle", value: 85 },
    { name: "MySQL", value: 70 },
    { name: "Linux", value: 75 },
    { name: "Git", value: 75 },
  ];
  const languageItems = [
    { name: "English", value: 75 },
    { name: "French", value: 80 },
    { name: "Malagasy", value: 95 },
  ];

  return (
    <section id="skills" className="slide-section flex flex-col md:flex-row items-start gap-8 justify-between">
      <div className="flex-1">
        <div className="font-oswald text-[2.9rem] sm:text-[3.5rem] uppercase font-bold mb-7 tracking-tight">Skills</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
          {skillItems.map((s, i) => (
            <div key={s.name}>
              <div className="font-semibold text-beige">{s.name}</div>
              <div className="w-full bg-gray-700 rounded h-2 my-1">
                <div className="bg-beige h-2 rounded" style={{ width: `${s.value}%` }} />
              </div>
              <div className="text-xs text-muted">{s.value}%</div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <div className="font-oswald uppercase mb-3 font-bold">Languages</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {languageItems.map(l => (
              <div key={l.name}>
                <div className="font-semibold text-beige">{l.name}</div>
                <div className="w-full bg-gray-700 rounded h-2 my-1">
                  <div className="bg-beige h-2 rounded" style={{ width: `${l.value}%` }} />
                </div>
                <div className="text-xs text-muted">{l.value}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
