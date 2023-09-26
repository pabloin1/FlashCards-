import React from 'react';
import '../css/styles.css'

const textStyle = {
  padding: '10px 20px',
  borderRadius: '4px',
  margin: '5px'
};

function Text ({ label }){
  return <h1 style={textStyle}>{label}</h1>;
}

export default Text;
