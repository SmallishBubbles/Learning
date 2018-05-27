import React from 'react';
import styled from 'styled-components';


let ButtonContainer = styled.div`
`

let Btn = styled.button`
`


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
            <ButtonContainer>
                <Btn onClick={this.drawCard}> Draw Card </Btn>
            </ButtonContainer>
        )
    }
}


export default DrawButton;