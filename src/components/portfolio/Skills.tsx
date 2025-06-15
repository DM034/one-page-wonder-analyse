
export default function Skills() {
  const languageSkills = [
    { name: "Java", value: 85 },
    { name: "C++", value: 70 },
    { name: "C#", value: 60 },
    { name: ".NET", value: 60 },
    // ...add more if needed
  ];
  const dbSkills = [
    { name: "PostgreSQL", value: 85 },
    { name: "Oracle", value: 85 },
    { name: "MySQL", value: 70 },
  ];
  const spokenLanguages = [
    { name: "English", value: 75 },
    { name: "French", value: 80 },
    { name: "Malagasy", value: 95 },
  ];

  return (
    <section id="skills" className="slide-section flex flex-col md:flex-row items-start gap-8 justify-between">
      <div className="flex-1">
        <div className="font-oswald text-[2.9rem] sm:text-[3.5rem] uppercase font-bold mb-7 tracking-tight">Skills</div>
        <div className="font-oswald uppercase mb-3 font-bold">Languages</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mb-6">
          {languageSkills.map((s, i) => (
            <div key={s.name}>
              <div className="font-semibold text-beige">{s.name}</div>
              <div className="w-full bg-gray-700 rounded h-2 my-1">
                <div className="bg-beige h-2 rounded" style={{ width: `${s.value}%` }} />
              </div>
              <div className="text-xs text-muted">{s.value}%</div>
            </div>
          ))}
        </div>
        <div className="font-oswald uppercase mb-3 font-bold">Databases</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mb-6">
          {dbSkills.map(s => (
            <div key={s.name}>
              <div className="font-semibold text-beige">{s.name}</div>
              <div className="w-full bg-gray-700 rounded h-2 my-1">
                <div className="bg-beige h-2 rounded" style={{ width: `${s.value}%` }} />
              </div>
              <div className="text-xs text-muted">{s.value}%</div>
            </div>
          ))}
        </div>
        <div className="font-oswald uppercase mb-3 font-bold">Other</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mb-6">
          <div>
            <div className="font-semibold text-beige">Linux</div>
            <div className="w-full bg-gray-700 rounded h-2 my-1">
              <div className="bg-beige h-2 rounded" style={{ width: `75%` }} />
            </div>
            <div className="text-xs text-muted">75%</div>
          </div>
          <div>
            <div className="font-semibold text-beige">Git</div>
            <div className="w-full bg-gray-700 rounded h-2 my-1">
              <div className="bg-beige h-2 rounded" style={{ width: `75%` }} />
            </div>
            <div className="text-xs text-muted">75%</div>
          </div>
        </div>
        <div className="mt-8">
          <div className="font-oswald uppercase mb-3 font-bold">Languages Spoken</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {spokenLanguages.map(l => (
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
