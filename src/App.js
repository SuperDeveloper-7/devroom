import React from "react";
import Home from "./page/Home";
import Feed from "./page/Feed";
import Signup from "./page/Signup";
import Login from "./page/Login";
import DevRoomTwo from "./page/DevRoomTwo";
import DevRoomThree from "./page/DevRoomThree";
import { Routes, Route } from "react-router-dom";
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
                path="/roomOne"
                element={
                  <Layout>
                    <Feed />
                  </Layout>
                }
              />

              <Route
                path="/roomTwo"
                element={
                  <Layout>
                    <DevRoomTwo />
                  </Layout>
                }
              />

              <Route
                path="/roomThree"
                element={
                  <Layout>
                    <DevRoomThree />
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
