import './App.css';
import Nav from './components/nav';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Footer from './components/footer';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element = { <h1>Products Component</h1> } />
        <Route path='/add' element = { <h1>Add Products Component</h1> } />
        <Route path='/Update' element = { <h1> Update Products Component</h1> } />
        <Route path='/logout' element = { <h1>Logout Component</h1> } />
        <Route path='/profile' element = { <h1>Profile Component</h1> } />
        <Route path='/signup' element = {<SignUp/>} />

      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
