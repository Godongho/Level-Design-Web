import { studioContent } from "@/data/studio-content";

export function ProjectGrid() {
  return (
    <section id="portfolio" className="bg-[#050505] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-20 text-center">
          Featured <span className="text-gray-600">Works.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {studioContent.projects.map((project) => (
            <div key={project.id} className="group relative block overflow-hidden cursor-pointer rounded-lg">
              <div className="relative h-[400px] lg:h-[600px] w-full bg-[#111111] overflow-hidden">
                {/* Fallback pattern */}
                <div 
                  className="absolute inset-0 opacity-20 transition-transform duration-1000 group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(45deg, #1a1a1a 25%, transparent 25%, transparent 75%, #1a1a1a 75%, #1a1a1a), linear-gradient(45deg, #1a1a1a 25%, transparent 25%, transparent 75%, #1a1a1a 75%, #1a1a1a)`,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px'
                  }}
                />
                
                {/* Hover overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs font-bold tracking-[0.3em] text-blue-400 uppercase mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
