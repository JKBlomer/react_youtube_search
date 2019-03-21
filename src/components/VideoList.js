 import React from "react";
 import styled from "styled-components";

//ordinary css inside back ticks
const List = styled.ul`
      padding: 0;
      list-style-type: none;

`
//item either has active=true or active=false
const Item = styled.li`
    img{
      border: ${props => props.active ? "3px solid orange": "1px solid grey"};
      width: 200px;
      margin-bottom: 15px;
      cursor: pointer;
      border-radius: 5px;

      :hover {
        border-color: red;
      }

    }
`

export const VideoList = (props) => {
     return(
       <List>
            {props.children}
       </List>
     );

}

export const VideoListItem = ({video, selectedVideo, selectVideo}) =>{
    return(
        <Item 
          active={video === selectedVideo} 
          onClick= { () => selectVideo(video)}>
          <img src={video.snippet.thumbnails.medium.url}/>
        </Item>

    );
}