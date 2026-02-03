
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AIContentTool from './components/AIContentTool';
import AIImpactSection from './components/AIImpactSection';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <div id="ai-strategist-suite">
          <AIContentTool />
          <AIImpactSection />
        </div>
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
