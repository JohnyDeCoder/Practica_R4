import React, { Component } from "react";
import { Actions, Router, Scene } from "react-native-router-flux";
import LoginView from "./src/LoginView";
import HomeView from "./src/HomeView";

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginView} hideNavBar />
    <Scene key="home" component={HomeView} initial={true} hideNavBar />
  </Scene>
);

export default class App extends Component<Props> {
  render() {
    return <Router scenes={scenes} />;
  }
}
