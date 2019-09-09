import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Home.css';

class Home extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Home">
        <h1>Ini Home</h1>
      </div>
    )
  }
}
Home.propTypes = {
}

export default Home;