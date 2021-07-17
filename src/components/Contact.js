import React from 'react'
import { ContactContainer ,ContactTitle,ContactSubtitle, ContactWrapGrid, ContactGrid, ContactWrapper,ContactHeading,ContactPara } from './Contact.style';
function Contact() {
    return (
        <ContactContainer>
            <ContactTitle>How Can We Help?</ContactTitle>
            <ContactSubtitle>Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.</ContactSubtitle>
            <ContactGrid>
                <ContactWrapGrid>
                    <ContactWrapper>
                        <i className="fa fa-map-marker" aria-hidden="true" style={{
                            fontSize: "40px",
                            color: "#aca790",
                            marginBottom: "10px",
                        }}></i>
                        <ContactHeading>Our Main Office</ContactHeading>
                        <ContactPara>SoHo 94 Broadway St New York, NY 1001</ContactPara>
                </ContactWrapper>
                    <ContactWrapper>
                        <i className="fa fa-phone" aria-hidden="true" style={{
                            fontSize: "40px",
                            color: "#aca790",
                            marginBottom: "10px",
                        }}></i>
                        <ContactHeading>Phone number</ContactHeading>
                        <ContactPara>234-9876-5400</ContactPara>
                        <ContactPara>888-0123-4567 (Toll Free)</ContactPara>
                </ContactWrapper>
                </ContactWrapGrid>
                
                <ContactWrapGrid>
                    <ContactWrapper>
                        <i className="fa fa-fax" aria-hidden="true" style={{
                            fontSize: "40px",
                            color: "#aca790",
                            marginBottom: "10px",
                        }}></i>
                    <ContactHeading>Fax</ContactHeading>
                        <ContactPara>1-234-567-8900</ContactPara>
                </ContactWrapper>
                    <ContactWrapper>
                        <i className="fa fa-envelope" aria-hidden="true" style={{
                            fontSize: "40px",
                            color: "#aca790",
                            marginBottom: "10px",
                        }}></i>
                        <ContactHeading>Email</ContactHeading>
                        <ContactPara>comfort@mail.com</ContactPara>
                </ContactWrapper>
                </ContactWrapGrid>
                 
            </ContactGrid>

            
        </ContactContainer>
    )
}

export default Contact
