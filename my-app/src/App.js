  import logo from './logo.svg';
  import './App.css';
  import 'bootstrap/dist/css/bootstrap.min.css'
  import NavbarComponent from './components/Navbar';
  import { Container } from 'react-bootstrap';
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Cancel from './pages/Cancel';
  import Success from './pages/Success';
  import Store from './pages/Store';
  import CartProvider from './CartContext';

  // localhost:3000 -> Home
  // localhost:3000/success -> Success
  // we wrap all this code inside the CartProvider, so all this code have access to the cart context

  function App() {
    return (
      <CartProvider>
        <Container>
          <NavbarComponent></NavbarComponent>
          <BrowserRouter>
            <Routes>
              <Route index element={<Store />} />
              <Route path="success" element={<Success />} />
              <Route path="cancel" element={<Cancel />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </CartProvider>
    );
  }

  export default App;