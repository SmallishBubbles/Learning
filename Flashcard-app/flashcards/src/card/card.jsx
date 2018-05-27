import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
`

const FlashCard = styled.div`
`

const Front = styled.div`
`

const Back = styled.div`
`

const Word = styled.div`
`

const Definition = styled.div`
`



const Card = (props) => (
    <CardContainer> 
        <FlashCard>
            <Front>
                <Word>
                    {props.word}
                </Word>
            </Front>

            <Back>
                <Definition>
                    {props.definition}
                </Definition>
            </Back>
        </FlashCard>
    </CardContainer>

)













export default Card;