import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './PrestasiMahasiswa.css';

class PrestasiMahasiswa extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="PrestasiMahasiswa">
    <h1>ini halaman PrestasiMahasiswa</h1>
      </div>
    )
  }
}
PrestasiMahasiswa.propTypes = {
}

export default PrestasiMahasiswa;