import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/service/Services';
import Resume from './components/resume/Resume';
import Portofolio from './components/portofolio/Portofolio';
import Contact from './components/contact/Contact';
import Blog from './components/blog/Blog';
import Testimonials from './components/testmonials/Testimonials';

const App = () => {
  return (
    <div>
      <Sidebar />
      <main classname='main'>
        <Home />
        <About />
        <Services />
        <Resume />
        <Portofolio />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </div>
  )
}

export default App;
