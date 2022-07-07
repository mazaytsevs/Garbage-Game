import './App.css';
import { Route, Routes } from 'react-router-dom';
import Info from './components/Info/Info';
import Rules from './components/Rules/Rules';
import Sample from './components/PDFDoc/PDFDoc';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/start" element={<div>Регистрация/Вход/Старт страницы</div>} />
        <Route path="/game" element={<h1>Welcome to Garbage Game!</h1>} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/info" element={<Info />} />
        <Route path="/doc" element={<Sample />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
