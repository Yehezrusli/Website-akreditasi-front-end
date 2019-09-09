import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Disertasi.css';

class Disertasi extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Disertasi">
        <h1>ini halaman yang menggunakan Disertasi</h1>
      </div>
    )
  }
}
Disertasi.propTypes = {
}

export default Disertasi;