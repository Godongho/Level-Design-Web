import { studioContent } from "@/data/studio-content";

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-32 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">Core Competencies</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter">Level Design<br/><span className="text-gray-600">Expertise.</span></h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
          {studioContent.expertise.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="h-px w-full bg-gray-800 mb-8 group-hover:bg-white transition-colors duration-500" />
              <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                <span className="text-gray-600 mr-4 font-mono text-sm">{(index + 1).toString().padStart(2, '0')}</span>
                {item.title}
              </h4>
              <p className="text-gray-400 leading-relaxed text-lg max-w-md">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
