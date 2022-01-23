import './App.style.scss';

import {Routes, Route} from 'react-router-dom';

import Layout from './components/layout/layout';
import Home from './pages/home';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
