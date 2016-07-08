import React from 'react';
import _ from 'lodash';
import Search_bar  from './search.react.js';
import Video_list  from './video_list.react.js';
import VideoDetails  from './video_details.react.js';
import YTSearch from 'youtube-api-search'; //npm install --save youtube-api-search

const API_KEY = "AIzaSyAzPJTEkv5Pn1pXC9ku02CrdfVu5a9R0kU";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch = this.videoSearch.bind(this);
	}

	componentWillMount(){
		this.videoSearch("reactjs");
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term:term},(videos) => {
			this.setState ({
				videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term)=> {this.videoSearch(term),300})
		return (
			<div>
				<Search_bar onSreachTermChange={videoSearch}/>
				<VideoDetails video={this.state.selectedVideo} />
				<Video_list
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}/>
			</div>
		);
	}
}

export default App;

// AIzaSyD_aNre6YutaYtYs8klrIcdivhQyFzcUdw