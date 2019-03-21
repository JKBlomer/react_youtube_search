import axios from "axios";  //axios preforms ajax calls
// const apiKey = "AIzaSyABWIos2EqZXIbNZik7k1Pdbsqa4qbTUNQ";
import config from "./config.js";
const apiKey = config.apiKey;

export default {
    searchVideos: function(term){
        return axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params:{
                key: apiKey,
                part: "snippet",
                q: term,
                maxResults: 8
            }
        })
}
}