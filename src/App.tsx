import { Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./components/templates/Layout";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="task" element={<h1>Header </h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
