import React, { useState, useEffect } from "react";
import bg from "./components/assets/bg.png";
// import Sidebar from './components/widgets/Sidebar';
import Home from "./page/Home";
import Create from "./page/Create";
import Signup from "./page/Signup";
import Login from "./page/Login";
import Feed from "./page/Feed";
import Read from "./page/Read";
import { Routes, Route } from "react-router-dom";
// import Navbar from './components/widgets/Navbar';
import Layout from "./components/widgets/Layout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App bg-primary">
        <section>
          <div>
            <Routes>
              <Route
                path="/home"
                element={
                  <Layout>
                    <Home />
                  </Layout>
                }
              />

              <Route
                path="/create"
                element={
                  <Layout>
                    <Create />
                  </Layout>
                }
              />

              <Route
                path="/feed/:id"
                element={
                  <Layout>
                    <Read />
                  </Layout>
                }
              />

              <Route
                path="/feed"
                element={
                  <Layout>
                    <Feed />
                  </Layout>
                }
              />

              <Route path="/" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
