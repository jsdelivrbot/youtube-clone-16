import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelect}) => {
  let videoItems = videos.map((ele) => {
   return <VideoListItem key={ele.etag} video={ele} onVideoSelect={onVideoSelect}/>
 });

  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList