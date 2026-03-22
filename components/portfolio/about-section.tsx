import { studioContent } from "@/data/studio-content";

export function AboutSection() {
  const { title, content } = studioContent.about;
  
  return (
    <section id="about" className="py-32 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-start md:items-center">
        <div className="w-full md:w-1/3">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">{title}.</h2>
          <div className="w-12 h-1 bg-blue-600" />
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
}
