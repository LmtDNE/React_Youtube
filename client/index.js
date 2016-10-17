//Create new component. This component will produce some HTML
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar.js'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import Private from '../private'



class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('Solange');
  }

  videoSearch(term) {
    YTSearch({key:Private.API_KEY, term: term}, (videos) => {
      console.log(videos)
      this.setState({ 
        videos:videos,
        selectedVideo: videos[0] })
    });
  }
  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
        onVideoSelect = { selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos}/>
      </div>
      );
  }
}


ReactDOM.render(<App />,document.querySelector('.container'))