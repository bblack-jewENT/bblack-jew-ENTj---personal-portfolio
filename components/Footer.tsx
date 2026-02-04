import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xs">
            B
          </div>
          <span className="text-xl font-bold tracking-tighter">
            bblack-jew ENTj
          </span>
        </div>

        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} bblack-jew ENTj Media. Built for
          high-performance brands.
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/mo.ses_themessiah/"
            className="text-slate-400 hover:text-indigo-600 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@bblack_jew"
            className="text-slate-400 hover:text-indigo-600 transition-colors"
          >
            TikTok
          </a>
          <a
            href="https://www.linkedin.com/in/bblack-jewent/"
            className="text-slate-400 hover:text-indigo-600 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
