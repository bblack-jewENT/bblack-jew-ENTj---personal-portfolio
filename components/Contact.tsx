import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending
    setTimeout(() => {
      setIsSent(true);
      setFormState({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-[48px] shadow-xl overflow-hidden border border-slate-100 grid md:grid-cols-2">
          <div className="p-12 bg-indigo-600 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">
                Let's grow together.
              </h2>
              <p className="text-indigo-100 text-lg mb-10">
                Ready to take your social presence to the next level? Book a
                discovery call or send a message.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                    📍
                  </div>
                  <span>Remote / Global</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                    ✉️
                  </div>
                  <span>mrswartz4@icloud.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                    📸
                  </div>
                  <span>@bblack-jew ENTj</span>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-indigo-500/50">
              <p className="text-sm text-indigo-200">
                Usually responds within 24 hours.
              </p>
            </div>
          </div>

          <div className="p-12">
            {isSent ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fadeIn">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-3xl mb-6">
                  ✅
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-slate-500">
                  I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="mt-8 text-indigo-600 font-bold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    style={{ resize: "none" }}
                    placeholder="Tell me about your project..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
