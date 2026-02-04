import React from "react";
import myImage from "./img/my-image.jpg";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold mb-6">
            Social Media Manager & Strategist
          </span>
          <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight mb-8">
            Turning <span className="text-indigo-600 italic">Scrolls</span> into{" "}
            <span className="underline decoration-indigo-300">Sales</span>.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-xl">
            I help brands build authentic connections and drive massive ROI
            through data-driven social media strategies and scroll-stopping
            content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all text-center"
            >
              Let's Scale Your Brand
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all text-center"
            >
              View Case Studies
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  className="w-12 h-12 rounded-full border-4 border-white shadow-sm"
                  alt="Client"
                />
              ))}
            </div>
            <p className="text-sm text-slate-500 font-medium">
              Trusted by <span className="text-slate-900 font-bold">50+</span>{" "}
              Forward-Thinking Brands
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src={myImage}
              className="rounded-2xl w-full h-[600px] object-cover"
              alt="Creative Strategy"
            />

            {/* Floating Stats */}
            <div className="absolute -left-6 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 animate-bounce transition-all float-duration">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                  📈
                </div>
                <div>
                  <div className="text-xs text-slate-500">Avg. Engagement</div>
                  <div className="text-lg font-bold">12.4%</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-6 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 animate-pulse">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-pink-100 rounded-lg text-pink-600">
                  ❤️
                </div>
                <div>
                  <div className="text-xs text-slate-500">Monthly Reach</div>
                  <div className="text-lg font-bold">1.2M+</div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Decorative Circles */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-pink-100 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
