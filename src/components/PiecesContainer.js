import React from "react";

const PiecesContainer = props => (
    <div className={`container${props.fluid ? "-fluid" : ""}`}>
        <div id="first" className="row" key="1">
            {props.pieces.slice(0,4).map(element => {
                return (
                    <div className="col-sm">
                        <img id={element.id} key={element.id} src={element.image} className="piece-button" onClick={(e) =>props.handleClick(e)}/>
                    </div>
                )
            })}
        </div>
        <div id="second" className="row" key="2">
            {props.pieces.slice(4,8).map(element => {
                return (
                    <div className="col-sm">
                        <img id={element.id} key={element.id} src={element.image} className="piece-button" onClick={(e) =>props.handleClick(e)}/>
                    </div>
                )
            })}
        </div>
        <div id="third" className="row" key="3">
            {props.pieces.slice(8,12).map(element => {
                return (
                    <div className="col-sm">
                        <img id={element.id} key={element.id} src={element.image} className="piece-button" onClick={(e) =>props.handleClick(e)}/>
                    </div>
                )
            })}
        </div>
    </div>
);

export default PiecesContainer;