import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Nav />
        <div className="pages">
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
