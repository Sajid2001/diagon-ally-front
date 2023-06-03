import AccountPage from './Pages/AccountPage';
import Dashboard from './Pages/Dashboard';
import LoginPage from './Pages/LoginPage';
import MakeCategoryPage from './Pages/MakeCategoryPage';
import { ChakraProvider } from '@chakra-ui/react'
import { HashRouter,BrowserRouter, Routes,Route, Navigate } from 'react-router-dom';
import SignupPage from './Pages/SignupPage';
import Navbar from './Components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext();
  return (
    <ChakraProvider>
      <div className="App">
      <BrowserRouter basename = '/diagon-ally-front'>
        <Navbar/>
          <Routes>
            <Route path='/' element = {!user ? <LoginPage/> : <Navigate to="/account"/>}/>
            <Route path='/signup' element = {!user ? <SignupPage/> : <Navigate to="/account"/>}/>
            <Route path='account' element = { user ? <AccountPage/> : <Navigate to="/" />}>
              <Route path="/account" element = {<Navigate replace to="home"/>}/>
              <Route path='home' element = {<Dashboard/>}/>
              <Route path='add' element = {<MakeCategoryPage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
