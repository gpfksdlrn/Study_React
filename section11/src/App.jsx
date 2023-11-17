import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Country from './pages/Country';
import NotFount from './pages/NotFound';

function App() {

  const nav = useNavigate();
  const onClick = () => {
    nav("/search");
  };

  return (
    <>
    {/* 1. 페이지 라우팅하기 */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/country/:code" element={<Country/>} />
        <Route path="*" element={<NotFount/>} />
      </Routes>
    {/* 2. 페이지 이동 구현하기 */}
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/search'}>Search</Link>
        <Link to={'/country'}>Country</Link>

        <button onClick={onClick}>서치 페이지로 이동</button>
      </div>
    </>
  );
}

export default App
