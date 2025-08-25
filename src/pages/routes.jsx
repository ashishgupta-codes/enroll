import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
import { Registation } from "./Registation";
import { Profile } from "./profile.jsx"

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/registation" element={<Registation />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
}
