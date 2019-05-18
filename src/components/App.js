import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.searchVideos('code bullet');
	}

	searchVideos = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term
			}
		});
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	}

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	}

	render() {
		return (
			<div className="ui container">
				<h1 style={{ marginTop: "10px" }} className="ui header">REACTube</h1>
			<SearchBar onSubmit={this.searchVideos} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={this.state.selectedVideo} />
					</div>
					<div className="five wide column">
						<VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
					</div>
				</div>
			</div>
			</div >
		);
	}
}

export default App;