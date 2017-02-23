import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Api from './api';

import './App.css';

class App extends Component {

  /**
   * TIP:
   *  - this.state = {...}
   *  - this.someFunction = this.someFunction.bind(this)
   * */
  constructor(props) {
    super(props);
  }

  /**
   * TIP:
   *  - Api.getShoes() returns a promise
   *  - this.setState() might be useful
   * */
  componentDidMount() {

  }

  handleShoeSelect (shoe) {

  }

  render() {
    return (
      <div>

        <NavBar title="Hello World"/>

        <div className="row">

          <div className="col s3">
            I am the left pane
          </div>

          <div className="col s6">
            I am in the middle
          </div>

          <div className="col s3">
            Right?
          </div>

        </div>
      </div>

    );
  }
}

export default App;
