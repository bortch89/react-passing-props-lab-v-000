import React, { Component } from 'react';

const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit: '',
  filters: '',
  currentFilter: '',
  updateFilterCallback: '',
}

export default FruitBasket;
