import React from 'react';
import './drawbutton.css'

class DrawButton extends React.Component{
    constructor(props){
        super (props);

        this.drawCard = this.drawCard.bind(this);
    }

    drawCard(){
        this.props.drawCard();
    }


    render (props){
        return (
            <div>
                <button className="btn" onClick={this.drawCard}> Draw Card </button>
            </div>
        )
    }
}


export default DrawButton;