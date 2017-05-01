import React , { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    this.setState({ term: event.target.value })
    this.props.videoSearch(event.target.value)
  }

  render(){
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default SearchBar;