import axios from 'axios';

const KEY = 'AIzaSyAetRD8r-EOwA5_hBSyYpg5enCvC0RW9zs';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});