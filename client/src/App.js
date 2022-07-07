import './App.css';
import { Route, Routes } from 'react-router-dom';
import Game from './components/Game/Game';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/start" element={<div>Регистрация/Вход/Старт страницы</div>} />
        <Route path="/game" element={<Game />} />
        <Route path="/rules" element={<div>Правила игры</div>} />
        <Route path="/info" element={<div>Правила сортировки</div>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
