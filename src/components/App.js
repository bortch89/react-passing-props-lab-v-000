import React from 'react';

import FruitBasket from './FruitBasket';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
    };
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ fruit }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {

    return (
      <FruitBasket fruit={this.state.fruit} filters={this.state.filters} currentFilter={this.state.currentFilter}>
        <Filter handleChange={this.handleFilterChange} filter={this.state.filters} />
        <FilteredFruitList filters={this.state.currentFilter} fruit={this.state.fruit}/>
      </FruitBasket>
    );
  }
}

export default App;
