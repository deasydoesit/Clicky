import React from "react";

const PiecesContainer = props => (
    <div className={`container${props.fluid ? "-fluid" : ""}`}>
        <div id="first" className="row">
            {props.pieces.slice(0,4).map(element => {
                return (
                    <div className="col-sm">
                        <img key={element.id} src={element.image} />
                    </div>
                )
            })}
        </div>
        <div id="second" className="row">
            {props.pieces.slice(4,8).map(element => {
                return (
                    <div className="col-sm">
                        <img key={element.id} src={element.image} />
                    </div>
                )
            })}
        </div>
        <div id="third" className="row">
            {props.pieces.slice(8,12).map(element => {
                return (
                    <div className="col-sm">
                        <img key={element.id} src={element.image} />
                    </div>
                )
            })}
        </div>
    </div>
);

export default PiecesContainer;