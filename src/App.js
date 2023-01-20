import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { Navbar } from './components/Navbar';
import 'remixicon/fonts/remixicon.css'

function App() {
  return (
    <div className="App">
       <Navbar />
       <ItemListContainer greeting="ItemListContainer Component"/>
    </div>
  );
}

export default App;
