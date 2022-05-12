import React from 'react';
import './feature.css';

const Feature = (props) => (
  
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{props.title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{props.text}</p>
    </div>
  </div>
  
);


Feature.defaultProps = {
  title: "Some title here",
  text: 'Some default text if there is nothing selected',
}

export default Feature;