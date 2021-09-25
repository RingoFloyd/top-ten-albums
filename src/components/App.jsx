import React from "react";
import ChartCard from "./ChartCard";
import albums from "../albums";
import Header from "./Header";

function App() {
    return (
        <div>
            <Header />
            <ChartCard
                position={albums[0].chartPosition}
                artist={albums[0].artist}
                albumName={albums[0].albumName}
                albumCover={albums[0].albumCover}
             />
             <ChartCard
                position={albums[1].chartPosition}
                artist={albums[1].artist}
                albumName={albums[1].albumName}
                albumCover={albums[1].albumCover}
             />
        </div>
    );
}

export default App;