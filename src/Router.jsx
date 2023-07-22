import Lobby from 'pages/Lobby/Lobby';
import Main from 'pages/Main/Main';
import SignIn from 'pages/SignIn/SignIn';
import TestPage from 'pages/TestPage';
import Waiting from 'pages/WaitingRoom/Waiting';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/lobby" element={<Lobby />} />
        {/* <Route path="/room/:roomId" element={<Waiting />} /> */}
        <Route path="/room" element={<Waiting />} />

        <Route path="/game/:gameId" />

        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
