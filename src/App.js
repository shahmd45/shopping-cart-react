import './App.css';

import { GlobalProvider } from './Context/GlobalProvider'
import Navbar from './Components/Navbar/Navbar';
import Product from './Components/Shopping/Product/Product';

const App = () => {
  return (
    <GlobalProvider>
      <div className="App">
        <Navbar />
        <Product />
      </div> 
    </GlobalProvider>
  );
}

export default App;
