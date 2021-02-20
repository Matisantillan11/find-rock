import React, { Component } from 'react'


import SearchBar from '../components/SearchBar.jsx'
import SearchResult from '../components/SearchResult.jsx'
import SimilarArtist from '../components/SimilarArtists.jsx'

class SearchResultPage extends Component {
  
  state={
    search: ''
  };
  
  componentDidMount(){
    
      let searcher = this.props.history.location.search.substr(1).replace("%20", " ");
      this.setState({search: searcher})
    
  }

  Searched = e =>{
    
    this.setState(
      {
        search: e.target.value
      }
    )
  }


 
  render(){
    
    return (
      <>
        <SearchBar 
        onChange = {this.Searched} 
        search = {this.state.search}
        />
        <SearchResult search = {this.state.search}/>
      </>
    );
  }
}

export default SearchResultPage

