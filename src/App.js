import './App.style.scss';

import Layout from './components/layout/layout';
import About from './components/about/about';
import Services from './components/services/services';

function App() {
  return (
    <Layout>
      <About />
      <Services />
    </Layout>
  );
}

export default App;
