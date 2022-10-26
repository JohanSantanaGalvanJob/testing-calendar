import React, { Component } from "react";
import './App.css';
import TdlistsContainer from "./components/TdlistsContainer";
import {QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

class App extends Component {
  render() {

    return (
      <QueryClientProvider client={queryClient}>
      <div className="mainContainer">
        <div className="topHeading">
          <h1>A Simple To-Do List App</h1>
        </div>
        <TdlistsContainer />
      </div>
      </QueryClientProvider>
    );
  }
}

export default App;
