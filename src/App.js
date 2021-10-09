import React from "react";
import Layout from "./containers/Layout/Layout";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { State } from "./state/state";

const App = ({}) => (
  <State>
    <Layout>
      <Header title={ `Filters` }/>
      <Main/>
    </Layout>
  </State>
);

export default App;
