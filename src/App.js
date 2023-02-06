import './App.css';
import { Navbar } from './components/Navbar';
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { ItemListContainer } from './components/Item';
import { ItemDatail } from './components/Item/ItemDetail';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
        <Route exact path="/item/:productId" element={<ItemDatail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
