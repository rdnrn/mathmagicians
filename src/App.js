import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="main">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/quote" element={<Quote />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
