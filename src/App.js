import React, { Component } from 'react';
import {Container, Row, Col} from "reactstrap";
import _ from "lodash";
import API from "./utils/API";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import {VideoList, VideoListItem} from "./components/VideoList";



class App extends Component {

  state={
    videos:[],
    selectedVideo: null,
  }

componentDidMount(){
  this.searchYouTube("kittens");
}

searchYouTube = (term) =>{
  API.searchVideos(term)
  .then(res=>this.setState({videos: res.data.items, selectedVideo: res.data.items[0]}))
  .catch(err=>console.log(err));
}

selectVideo = (video) =>{
    this.setState({selectedVideo: video})
}


throttleSearch = _.debounce(this.searchYouTube, 900);


  render() {
    return (
     <Container>
       <Row>
         <Col>
         <SearchBar searchYouTube={this.throttleSearch}/>
         </Col>
        
       </Row>


       <Row> 
         <Col md="9"><VideoDetail video={this.state.selectedVideo} />
         </Col>
         <Col md="3">
            <VideoList>
              {this.state.videos.map(video=>(
                <VideoListItem 
                video={video} 
                key={video.id.videoId}
                selectedVideo={this.state.selectedVideo}
                selectVideo={this.selectVideo}
                />
              ))}
            </VideoList>
         </Col>
       </Row>
     </Container>
    );
  }
}

export default App;
