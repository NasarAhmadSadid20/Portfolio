import { Zap, Palette, Wrench } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Choose Me?
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
          The reasons that make me suitable for collaborating on your projects
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 
                          transition-shadow duration-300 hover:shadow-lg text-center">
            
            <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center
                            rounded-full bg-blue-50 text-blue-600">
              <Zap className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Fast Development
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              With expertise in React and Tailwind CSS, I deliver projects quickly
              without sacrificing quality.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 
                          transition-shadow duration-300 hover:shadow-lg text-center">
            
            <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center
                            rounded-full bg-green-50 text-green-600">
              <Palette className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Modern Design
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Clean, modern, and user-friendly UI using React,js & Tailwind CSS.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 
                          transition-shadow duration-300 hover:shadow-lg text-center">
            
            <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center
                            rounded-full bg-purple-50 text-purple-600">
              <Wrench className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Technical Support
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Reliable support after delivery to ensure stability
              and smooth performance.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
