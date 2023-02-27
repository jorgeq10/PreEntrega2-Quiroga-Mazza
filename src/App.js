import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom'
import Main from './Components/Main';
import CartContextProvider from './Components/Context/CartContextProvider';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"



function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Main />
        <Footer />
        <ToastContainer />
      </CartContextProvider>
    </BrowserRouter>

  );
}

export default App;