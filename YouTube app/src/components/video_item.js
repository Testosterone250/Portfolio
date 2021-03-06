import React from 'react'

const Item = ({video, onVideoSelect}) => {
  const snippet = video.snippet;
  const imageUrl = snippet.thumbnails.default.url;

  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
         <img className="media-object" src={imageUrl} alt="{title}" />
      </div>
      
      <div className="media-body">
        <div className="media-heading">
        {snippet.title}
        </div>
      </div>
      </div>
    </li>
  );
};

export default Item
