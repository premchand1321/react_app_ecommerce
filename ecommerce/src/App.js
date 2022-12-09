import {Routes,Route} from "react-router-dom"
import Home from './components/pages/Home'
import Store from './components/pages/Store'
import {Container} from "react-bootstrap"
import Nave from "./components/Nav"
import './App.css';
import { MyShoppingContextProvider } from "./components/contextProvider"

const App=({children})=> {
  return (
    <MyShoppingContextProvider>
      <Nave />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/store" element={<Store />} />
        </Routes>
      </Container>
    </MyShoppingContextProvider>
  );
}

export default App;
