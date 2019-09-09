import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Kurikulum.css';

class Kurikulum extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Kurikulum">
        <h1>ini halaan Kurikulum</h1>
      </div>
    )
  }
}
Kurikulum.propTypes = {
}

export default Kurikulum;