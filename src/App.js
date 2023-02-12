import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import {BrowserRouter} from 'react-router-dom'
import Main from './Components/Main';



function App() {
  return (
   <BrowserRouter>
    <NavBar />
    <Main />
    <Footer />
   </BrowserRouter>
  );
}

export default App;