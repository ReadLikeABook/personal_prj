import { render } from '@testing-library/react';
import React, { Component } from 'react';

class NavigationBar extends Component {

  render() {
    return (
      < nav class="navbar navbar-expand-md navbar-dark bg-dark" >
        <div class="container">
          <a class="navbar-brand" href="index">Ryan Read</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#playgroundsNavbar" aria-controls="playgroundsNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="playgroundsNavbar">
            <div class="navbar-nav ml-auto">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="index">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="index">HighLow Game</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="index">Embedded Map</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="index">Calculator</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav >
    )
  }

}

export default NavigationBar