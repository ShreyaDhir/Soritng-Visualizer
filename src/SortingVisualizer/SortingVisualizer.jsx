import React, { Component } from 'react';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component{
  constructor(props) {
    super(props);
      
    this.state = {
      array: [],
    };
   
    ComponentDidMount()
    {
      this.resetArray();
    }
   
    resetArray(){
      const array = [];
      for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
        array.push(randomIntFromIntervals(5, 730));
      }
      this.setState({ array });
    }

    render()
    {
      const { array } = this.state;
      
      return {
        { array.map{
          (value, idx) => {
            <div className="array-bar" key={idx}>
              {value}
            </div>
        }}
      }
    }
  }
}

export default SortingVisualizer
