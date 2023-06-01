import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import MakeCategoryPage from './Pages/MakeCategoryPage';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Dashboard/>}/>
            <Route path='/add' element = {<MakeCategoryPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
