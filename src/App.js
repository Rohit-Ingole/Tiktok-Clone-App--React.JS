import { useEffect, useRef, useState } from "react";
import "./App.css";
import Video from "./Video/Video";
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos([snapshot.docs.map((doc) => doc.data())])
    );
  }, [videos]);

  return (
    <div className="App">
      <div className="app__videos">
        {videos.map((video) =>
          video.map((posts) => (
            <Video
              url={posts.url}
              channel={posts.channel}
              description={posts.description}
              song={posts.song}
              likes={posts.likes}
              messages={posts.messages}
              shares={posts.shares}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
