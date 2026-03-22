import { studioContent } from "@/data/studio-content";

export function PhilosophySection() {
  const { title, quote, description } = studioContent.philosophy;
  
  return (
    <section className="py-40 px-6 bg-[#000000] text-center flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background glow for emphasis */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] opacity-50" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-sm font-bold tracking-[0.3em] text-gray-500 uppercase mb-8">
          {title}
        </h2>
        <blockquote className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-12 leading-tight">
          "{quote}"
        </blockquote>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-12" />
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
          {description}
        </p>
      </div>
    </section>
  );
}
