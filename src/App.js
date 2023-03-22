import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import Homepage from './routes/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Homepage />} />
          <Route path="/detail" element={<h1>Detail</h1>} />
          <Route path="*" element={<div>If page not found it goes here</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
