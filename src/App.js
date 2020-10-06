import React from 'react';
import './App.css';
import Header from './Header.js'
import ListOfVideos from './ListOfVideos'
import ReactPlayer from 'react-player';

/* A header
A main video component
A component with list of videos
A component with list of videos
A component with list of videos
 */

function App() {
  return (<div className="App">
    <Header/>
    <ReactPlayer
    url="https://www.youtube.com/watch?v=p_PJbmrX4uk"
    width="70%"
    height="480px" className="Video"
    />
    <div>Yahaa se shuru</div>
    <div className="RowOfVideos">
      <ListOfVideos
      author = "Krish Naik"
      video=""
      />
      <ListOfVideos
      author = "Krish Naik"
      video=""
      />
      <ListOfVideos
      author = "Krish Naik"
      video=""
      />
      <ListOfVideos
      author = "Krish Naik"
      video=""
      />
      <ListOfVideos
      author = "Krish Naik"
      video=""
      />
    </div>
    

    </div>
  );
}


export default App;
