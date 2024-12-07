
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Editor from "./pages/editor";
import Home from "./pages/Home";

import React from 'react'

export default () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </Router>
    </>
  )
}
