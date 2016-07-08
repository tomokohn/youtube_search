import React from 'react';
import Video_list_item from './video_list_item.react';

const Video_list = (props) =>{
	
	const list = props.videos.map((video) => {
		return (
			<Video_list_item 
				onVideoSelect={props.onVideoSelect}
				key={video.etag}
				video={video}
			/>
		)
	});
	
	return (
		<ul className="col-md-4 list-group">
			{list}
		</ul>
	);
	
}

export default Video_list;
