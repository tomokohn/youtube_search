import React from 'react';


const video_list_item  = ({ video, onVideoSelect }) =>{

	const imageUrl = video.snippet.thumbnails.default.url;
	const videoTitle = video.snippet.title;

		return (
				<li className="list-group-item" onClick={() => onVideoSelect(video)}>
					<div className="video-list media">
						<div className="media-left">
							<img src={imageUrl} alt="" className="media-object"/>
						</div>
					</div>
					<div className="media-body">
						<div className="media-heading">{videoTitle}</div>
					</div>
				</li>
		);

}

export default video_list_item;
