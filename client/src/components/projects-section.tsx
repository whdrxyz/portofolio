export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Bot Whatsapp",
      description: "Bot WhatsApp adalah program otomatis yang dapat berinteraksi dengan pengguna WhatsApp. Dibuat menggunakan bahasa Node.js, Bot ini dapat digunakan untuk memberikan informasi, memecahkan masalah, memberikan dukungan pelanggan, dan melakukan transaksi bisnis.",
      image: "https://files.catbox.moe/hnaiev.jpg",
      tags: ["Node.js", "WhatsApp API"],
      color: "green"
    },
    {
      id: 2,
      title: "Front End Developer",
      description: "Pengembang perangkat lunak yang bertugas mendesain dan mengimplementasikan tampilan luar website atau aplikasi. Memastikan tampilan dan fungsionalitas website berjalan dengan baik dan sesuai dengan desain yang telah dirancang.",
      image: "https://files.catbox.moe/hk78bn.png",
      tags: ["React", "Next.js", "Tailwind"],
      color: "purple"
    },
    {
      id: 3,
      title: "Back End Developer",
      description: "Back end developer, pengembangan perangkat lunak yang berfokus pada sisi server dari sebuah situs web atau aplikasi. Memastikan situs web atau aplikasi berjalan dengan lancar dan memenuhi kebutuhan pengguna.",
      image: "https://files.catbox.moe/qpvgv7.png",
      tags: ["Python", "API", "Database"],
      color: "yellow"
    }
  ];

  const getTagStyles = (color: string) => {
    switch (color) {
      case "green":
        return "bg-green-500/20 text-green-400";
      case "purple":
        return "bg-purple-500/20 text-purple-400";
      case "yellow":
        return "bg-yellow-500/20 text-yellow-400";
      default:
        return "bg-blue-500/20 text-blue-400";
    }
  };

  const getTitleColor = (color: string) => {
    switch (color) {
      case "green":
        return "text-green-400";
      case "purple":
        return "text-purple-400";
      case "yellow":
        return "text-yellow-400";
      default:
        return "text-blue-400";
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">My Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-card rounded-xl overflow-hidden shadow-xl card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={project.image} 
                alt={`${project.title} Project`} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${getTitleColor(project.color)}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className={`${getTagStyles(project.color)} px-3 py-1 rounded-full text-sm`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
