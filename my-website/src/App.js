import './App.css';
import {createGlobalStyle} from 'styled-components';
import Home from './Pages/Home';
import SubPage from './Pages/SubPage';
import {BrowserRouter, Routes, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">     
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="subpage" element={<SubPage/>}/>
          </Routes>
        </BrowserRouter>
     </div>
  );
}

export default App;
