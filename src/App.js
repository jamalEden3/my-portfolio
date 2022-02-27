import './App.style.scss';

import Header from './components/header/header';
import About from './components/about/about';
import Services from './components/services/services';
import Skills from './components/skills/skills';
import Works from './components/works/works';
import Contacts from './components/contacts/contacts';

function App() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Skills />
      <Works />
      <Contacts />
    </>
  );
}

export default App;
