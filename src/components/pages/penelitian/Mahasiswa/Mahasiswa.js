import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Mahasiswa.css';

class Mahasiswa extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Mahasiswa">
        <h1>ini halaman penelitian yang melibatkan mahasiswa</h1>
      </div>
    )
  }
}
Mahasiswa.propTypes = {
}

export default Mahasiswa;