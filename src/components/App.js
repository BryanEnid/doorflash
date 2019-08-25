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
    this.HOSTNAME = "http://159.89.53.234:3000/v1"
  }

  handleMenu = (menuListFromSelectedStore) => {
    this.setState({
      menu: menuListFromSelectedStore
    })
  }

  render = () => (
    <div>
      <Stores name="Stores" onSelectedStore={this.handleMenu} HOSTNAME={this.HOSTNAME} />
      <Menu menu={this.state.menu} HOSTNAME={this.HOSTNAME} />
    </div>
  )
}
