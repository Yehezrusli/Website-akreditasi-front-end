import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Profil.css';

class Profil extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Profil">
        <h1>ini halaman profil dosen</h1>
      </div>
    )
  }
}
Profil.propTypes = {
}

export default Profil;