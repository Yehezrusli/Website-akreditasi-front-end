import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './PengabdianMasyarakat.css';

class PengabdianMasyarakat extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="PengabdianMasyarakat">
        <h1>ini halaman Pengabdian Masyarakat</h1>
      </div>
    )
  }
}
PengabdianMasyarakat.propTypes = {
}

export default PengabdianMasyarakat;