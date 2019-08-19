import React, { Component } from 'react';
import './App.css';
import Menu from "./menu/Menu"
import Stores from "./stores/Stores"


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: [],
    }
    this.handleMenu = this.handleMenu.bind(this)
  }

  handleMenu = (menuListFromSelectedStore) => {
    this.setState({
      menu: menuListFromSelectedStore
    })
  }

  render = () => (
    <div>
      <Stores name="Stores" onSelectedStore={this.handleMenu} />
      <Menu menu={this.state.menu} />
    </div>
  )
}
