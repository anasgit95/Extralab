
import './App.css'
import React from "react";
import Header from './layout/Header'
import Home from './pages/home'
import Favorites from "./pages/favorite";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (


    <Provider store={store}>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Favorites" element={<Favorites />} />

          <Route path="*" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
