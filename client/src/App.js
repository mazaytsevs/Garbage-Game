import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Info from './components/Info/Info';
import Rules from './components/Rules/Rules';
import Game from './components/Game/Game';
import Navbar from './components/Nav/Navbar';
import PrivateRoute from './components/PrivateRouter/PrivateRouter';
import Registration from './components/Forms/Reg/Registration';
import Login from './components/Forms/Login/Login';
import { checkAuth } from './redux/actions/user.action';
import Logout from './components/Forms/Logout/Logout';
import GameRat from './components/GameRat/GameRat';
import Container from './components/GameLogic/Container';
import Timer from './hardMode/Timer';
import ModalHardMode from './hardMode/ModalHardMode';
import Container2 from './hardMode/Container2';
import Game2 from './hardMode/Game2';
import Conveyor from './hardMode/conveyor/Conveyor';

function App() {
  const dispatch = useDispatch();

  const [initialMinute, setInitialMinute] = useState(0);
  const [initialSeconds, setInitialSeconds] = useState(10);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(checkAuth());
  }, []);
  return (
    <div className="App">
      {isOpen && <ModalHardMode isOpen={isOpen} />}
      {/* <ModalHardMode isOpen={isOpen} /> */}
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/auth/reg" element={<Registration />} />
        <Route path="/auth/login" element={<Login />} />
        <Route
          path="/auth/logout"
          element={(
            <PrivateRoute>
              <Logout />
            </PrivateRoute>
          )}
        />
        {/* <Route path="/game" element={<PrivateRoute><Game /></PrivateRoute>} /> */}
        <Route path="/game" element={<Game />} />
        <Route path="/gamerat" element={<GameRat />} />
        <Route path="/timer" element={<Timer props={{ initialMinute, initialSeconds, setIsOpen }} />} />
        <Route path="/lol" element={<Conveyor />} />
      </Routes>
    </div>
  );
}

export default App;
