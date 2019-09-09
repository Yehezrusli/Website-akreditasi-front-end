import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CapaianPembelajaran.css';

class CapaianPembelajaran extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="CapaianPembelajaran">
        <h1>ini adalah halaman capaian pembelajaran</h1>
      </div>
    )
  }
}
CapaianPembelajaran.propTypes = {
}

export default CapaianPembelajaran;