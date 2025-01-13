import React from "react";
import GradientBackground from "./components/lightbackground";
import Header from "./components/navbar";
import Home1 from "./components/home1";
import Home2 from "./components/home2";
import Home3 from "./components/home3";

function App() {
    return (
        <div>
            <Header />
            <GradientBackground />
            <Home1 />
            <Home2 />
            <Home3/>
        </div>
    );
}
export default App;


