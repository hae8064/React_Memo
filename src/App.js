import React, {useState, useEffect} from "react";
import List from './list';
import {BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";
import Home from './Home';
import MemoCreate from "./MemoCreate";

function App() {
  return (
        <Routes>
          <Route  path="/" element={<Home/>}></Route>
          <Route  path="/create" element={<MemoCreate/>}></Route>
          <Route  path="/list" element={<List/>}/>
        </Routes>
  );
}

export default App;

