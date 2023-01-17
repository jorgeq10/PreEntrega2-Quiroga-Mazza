import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import {BrowserRouter} from 'react-router-dom'

const greeting = [
  {
    id: 1,
    name: "torta oreo",
    description: "Chocolate con crema oreo",
    count: 6
  },
  {
    id: 2,
    name: "torta marroc",
    description: "torta con pedazitos de marroc",
    count: 1
  },
  {
    id: 3,
    name: "chocotorta",
    description: "Tarta de galletas de chocolate con dulce de leche y queso crema",
    count: 3
  },
]

function App() {
  return (
   <BrowserRouter>
    <NavBar />
    <ItemListContainer />
    <Footer />
   </BrowserRouter>
  );
}

export default App;