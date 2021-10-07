import React from "react";
import Layout from "./containers/Layout/Layout";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = ({}) => {
  return (
    <Layout>
      <Header title={ `Filters` }/>
      <Main/>
    </Layout>
  );
};

export default App;
