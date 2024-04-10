import { Routes, Route } from 'react-router-dom';
import VendingMachine from './components/VendingMachine';
import Candy from './components/Candy';
import Chips from './components/Chips';
import Soda from './components/Soda';

function App() {
  return (
    <Routes>
      <Route path="/" element={<VendingMachine />} />
      <Route path="/candy" element={<Candy />} />
      <Route path="/chips" element={<Chips />} />
      <Route path="/soda" element={<Soda />} />
    </Routes>
  );
}

export default App;
