import React from "react";
import Layout from "./containers/Layout/Layout";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { State } from "./state/state";

const App = ({}) => {
  return (
    <Layout>
      <State>
        <Header title={ `Filters` }/>
        <Main/>
      </State>
    </Layout>
  );
};

export default App;
