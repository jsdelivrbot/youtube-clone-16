import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

import API_KEY from './api_keys'

// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos : [],
      selectedVideo : null,
   };
    this.videoSearch('surfboards')

    this.onVideoSelect = this.onVideoSelect.bind(this);
    this.videoSearch = this.videoSearch.bind(this);
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({
        videos ,
        selectedVideo : videos[0]
       });
    });
  }

  onVideoSelect(event, selectedVideo){
    this.setState({selectedVideo})
  }

  render(){
    const videoSearch = _.debounce(this.videoSearch, 300)
    return (
      <div>
        <SearchBar videoSearch={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect} />
      </div>
    )
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(
  <App />,
  document.querySelector('.container')
)