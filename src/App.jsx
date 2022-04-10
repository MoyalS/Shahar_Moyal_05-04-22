import './App.css';
import Header from './Header/Header';
import HomeScreen from './HomeScreen/HomeScreen'
import FavoritesScreen from './FavoritesScreen/FavoritesScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const renderRouter = () => {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/favorites" element={<FavoritesScreen />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }

  return (
    <div className="App">
      {renderRouter()}
    </div>
  );
}

export default App;
