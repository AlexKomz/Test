import React from "react";
import Layout from "./containers/Layout/Layout";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { ApiState } from "./context/api/apiState";

const App = ({}) => {
  return (
    <Layout>
      <ApiState>
        <Header title={ `Filters` }/>
        <Main/>
      </ApiState>
    </Layout>
  );
};

export default App;
