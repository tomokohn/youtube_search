import React from 'react';

const VideoDetails = ({video}) => {
	if(!video) return <div>Loading...</div>;

	const videoId = video.id.videoId;
	const videoUrl = `http://www.youtube.com/embed/${videoId}`;
	const title = video.snippet.title;
		return (
				<div className="video-detail col-md-8">
					<div className="embed-responsive embed-responsive-16by9">
						<iframe src={videoUrl} className="embed-responsive-item"></iframe>
					</div>
					<div className="details">
						<div className="">{title}</div>
						<div>{video.snippet.description}</div>
					</div>
				</div>
		);
	
}

export default VideoDetails;
