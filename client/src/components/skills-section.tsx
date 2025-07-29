export default function SkillsSection() {
  const skills = [
    { name: "HTML", icon: "https://files.catbox.moe/v046oz.png" },
    { name: "CSS", icon: "https://files.catbox.moe/boz009.png" },
    { name: "JavaScript", icon: "https://files.catbox.moe/x9t0ks.png" },
    { name: "Next.js", icon: "https://files.catbox.moe/k8h7r1.png" },
    { name: "React", icon: "https://files.catbox.moe/9tfr5f.png" },
    { name: "Python", icon: "https://files.catbox.moe/giv4ke.png" }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Skills</h2>
        
        <div className="overflow-hidden">
          <div className="flex animate-marquee space-x-12 mb-8">
            {skills.map((skill, index) => (
              <div key={`row1-${index}`} className="flex flex-col items-center space-y-3 min-w-max skill-icon">
                <img 
                  src={skill.icon} 
                  alt={`${skill.name} Logo`} 
                  className="w-16 h-16 object-contain"
                />
                <span className="text-muted-foreground font-medium">{skill.name}</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {skills.map((skill, index) => (
              <div key={`row1-dup-${index}`} className="flex flex-col items-center space-y-3 min-w-max skill-icon">
                <img 
                  src={skill.icon} 
                  alt={`${skill.name} Logo`} 
                  className="w-16 h-16 object-contain"
                />
                <span className="text-muted-foreground font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
          
          <div className="flex animate-marquee-reverse space-x-12">
            {skills.map((skill, index) => (
              <div key={`row2-${index}`} className="flex flex-col items-center space-y-3 min-w-max skill-icon">
                <img 
                  src={skill.icon} 
                  alt={`${skill.name} Logo`} 
                  className="w-16 h-16 object-contain"
                />
                <span className="text-muted-foreground font-medium">{skill.name}</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {skills.map((skill, index) => (
              <div key={`row2-dup-${index}`} className="flex flex-col items-center space-y-3 min-w-max skill-icon">
                <img 
                  src={skill.icon} 
                  alt={`${skill.name} Logo`} 
                  className="w-16 h-16 object-contain"
                />
                <span className="text-muted-foreground font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
