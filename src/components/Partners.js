import React from 'react'
import { PartnerWrapper,PartnerImage,PartnerTitle } from './Partners.style'
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
function Partners() {
    return (
        <PartnerWrapper>
            <PartnerTitle>Our Clients</PartnerTitle>
            <PartnerImage src={p1} />
            <PartnerImage src={p3}/>
            <PartnerImage src={p5}/>
            <PartnerImage src={p4} />
            <PartnerImage src={p2}/>
        </PartnerWrapper>
    )
}

export default Partners;
