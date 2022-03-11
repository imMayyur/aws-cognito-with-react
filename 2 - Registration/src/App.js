import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Components/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
