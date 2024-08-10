import React from "react";
import DataComponent from "./components/DataComponent";
import ErrorComponent from "./components/ErrorComponent";
import LoadingComponent from "./components/LoadingComponent";
import './App.css';

const App = () => {
  return (
    <div>
      <DataComponent />
      <ErrorComponent />
      <LoadingComponent />
    </div>
  );
};

export default App;
