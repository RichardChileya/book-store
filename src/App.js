import { Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import Books from './Components/books';
import Categories from './Components/Categories';
import './index.css';

function App() {
  return (
  //  Code here
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
