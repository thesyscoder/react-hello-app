import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header"
const App = () => {
    return (
        <div>
            <Header/>
            <h1>Hello App</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)