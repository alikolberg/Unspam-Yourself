class SearchBar extends React.Component {
    state = {
      searchTerm: ''
    };
  
    handleChange = (event) => {
      this.setState({ searchTerm: event.target.value });
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      this.props.onSearch(this.state.searchTerm);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
      );
    }
  }
  
  class SearchResultsList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      );
    }
  }
  
  class SearchContainer extends React.Component {
    state = {
      searchTerm: '',
      searchResults: []
    };
  
    performSearch = (searchTerm) => {
      // Make API call to search backend here, and update searchResults in state
    }
  
    render() {
      return (
        <div>
          <SearchBar onSearch={this.performSearch} />
          <SearchResultsList items={this.state.searchResults} />
        </div>
      );
    }
  }
