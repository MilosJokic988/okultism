import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Demonology from './pages/Demonology';
import Alchemy from './pages/Alchemy';
import SignsAndSymbols from './pages/SignsAndSymbols';
import Rituals from './pages/Rituals';
import Seals from './pages/Seals';
import MainLayout from './components/MainLayout';
import './App.css';
function App() {
  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="demonology" element={<Demonology />} />
          <Route path="alchemy" element={<Alchemy />} />
          <Route path="signs-and-symbols" element={<SignsAndSymbols />} />
          <Route path="rituals" element={<Rituals />} />
          <Route path="seals" element={<Seals />} />
        </Route>
      </Routes>
  );
}

export default App;
