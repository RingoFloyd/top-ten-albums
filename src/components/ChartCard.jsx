import React from "react";

function ChartCard(props) {
    return (
        <div className="card">
            <div className="info">
                <h1 className="position">{props.position}</h1>
                <h2 className="artistName">{props.artist}</h2>
                <h2 className="title">{props.albumName}</h2>
                
            </div>
            <div className="cover-img">
            <img src={props.albumCover} alt="album_cover" />
            </div>

        </div>
    );
}

export default ChartCard;