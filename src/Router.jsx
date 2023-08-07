import GameRoom from 'pages/GameRoom/GameRoom';
import KakaoLogin from 'pages/KakaoLogin/KakaoLogin';
import Lobby from 'pages/Lobby/Lobby';
import Main from 'pages/Main/Main';
import SignIn from 'pages/SignIn/SignIn';
import TestPage from 'pages/TestPage';
import WaitingRoom from 'pages/WaitingRoom/WaitingRoom';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/game/:gameId" element={<GameRoom />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/kakao/callback" element={<KakaoLogin />} />
        <Route path="/waitingroom/:sessionId" element={<WaitingRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
