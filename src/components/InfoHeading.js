import React from 'react'
import { InfoContainer, InfoTitle, InfoContent, InfoHeadContent,InfoHead } from "./InfoHeading.style";
function InfoHeading(props) {
    return (
        <InfoContainer>
            <InfoTitle>
                <InfoHead>{props.title}</InfoHead>
                <InfoHeadContent>{ props.subtitle}</InfoHeadContent>
            </InfoTitle>
            <InfoContent>
                { props.content}
            </InfoContent>
        </InfoContainer>
    )
}

export default InfoHeading
