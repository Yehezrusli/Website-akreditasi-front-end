import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Sarana.css';

class Sarana extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Sarana">
        <h1>Ini halaman Sarana dan Prasana</h1>
      </div>
    )
  }
}
Sarana.propTypes = {
}

export default Sarana;