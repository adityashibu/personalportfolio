import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, CopyrightFooter } from './components';
import ProfilePage from './profile'

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-black">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Navbar />
                  <Hero />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                {/* <Feedbacks /> */}
                <div className="relative z-0">
                  <Contact />
                  <StarsCanvas />
                </div>
                <div className='bg-black mt-5 py-5'>
                  <CopyrightFooter />
                </div>
              </>
            }
          />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

