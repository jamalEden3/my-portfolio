import './App.style.scss';

import Header from './components/header/header';
import About from './components/about/about';
import Services from './components/services/services';
import Skills from './components/skills/skills';
import Works from './components/works/works';

function App() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Skills />
      <Works />
    </>
  );
}

export default App;
