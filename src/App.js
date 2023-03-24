import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Details from './routes/Details';
import Homepage from './routes/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Homepage />} />
          <Route path="/:code" element={<Details />} />
          <Route path="*" element={<div>If page not found it goes here</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
