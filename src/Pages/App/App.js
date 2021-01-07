import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="0_1_index.html">Ryan Read</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#playgroundsNavbar" aria-controls="playgroundsNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="playgroundsNavbar">
                <div class="navbar-nav ml-auto">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="0_1_index.html">Home</a>
                        </li>                        
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle active" href="#" id="utilitiesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Grid
                            </a>
                            <div class="dropdown-menu" aria-labelledby="utilitiesDropdown">
                                
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="dropdown show">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown link
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
        </div>
    </nav>
    );
  }
}

export default App;
