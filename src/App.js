import './App.style.scss';

import Layout from './components/layout/layout';
import About from './components/about/about';
import Services from './components/services/services';
import Skills from './components/skills/skills';

function App() {
  return (
    <Layout>
      <About />
      <Services />
      <Skills />
    </Layout>
  );
}

export default App;
