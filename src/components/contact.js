import React from 'react';
import "./contact.css"
import fb from './images/fb.png'
import yt from './images/YT.png'
import ln from './images/LN.jpg'
import wa from './images/wa.png'


export class Contact extends React.Component {

    render() {
        return (
            <div className="contactPage">
                <h1>Contact</h1>
                <div className="address">
                    <h1>Address:</h1>
                    <p>Beside manipal hospitals, tadepalli, andhra pradesh, Pincode: 522501</p>
                    <div className="map">
                        <iframe title="FHC Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2274.8652283810097!2d80.6148611785705!3d16.48302846602343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f137537108f3%3A0x683ad514df8ab03e!2sFamily%20Harvest%20Church!5e0!3m2!1sen!2sin!4v1588177629048!5m2!1sen!2sin" width="310" height="250" frameBorder="0" style={{ border: "0" }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                </div>
                <div className="address">
                    <h1>Church Contact:</h1>
                    <a href="https://www.youtube.com/channel/UCXuyuGrKK_5J_q0wwKQdd-A" target='_blank' rel="noopener noreferrer">
                        <img style={{ width: "50px", margin: "5px" }} src={yt} alt="Youtube Family Harvest Church" /></a>
                    <a href="https://www.facebook.com/familyharvestchurchfhc" target='_blank' rel="noopener noreferrer" >
                        <img style={{ width: "40px", margin: "5px" }} src={fb} alt="Facebook Family Harvest Church" /></a>
                    <a href="https://wa.me/919866072167" target='_blank' rel="noopener noreferrer">
                        <img style={{ width: "60px", margin: "0px" }} src={wa} alt="Whatsaap Family Harvest Church" /></a>


                    <p style={{ fontFamily: "georgia", fontSize: "15px" }}>
                        Email:
                        <br /><a href="mailto:help@familyharvestchurch.in">help@familyharvestchurch.in</a>
                    </p>
                    <p>Mobile:
                        <br /><a href="tel:9866072167">9866072167</a>
                        <br /><a href="tel:9866072167">9866072165</a>
                        <br /><a href="tel:9866072167">9949070158</a>
                    </p>
                </div>
                <div className="address">
                    <h1>Website Developer:</h1>
                    <p><span style={{ fontFamily: "helvetica" }}>© </span>by Shyam Sunder</p>
                    <a href="www.linkedin.com/in/shyam-sunder-a52240164" target='_blank'>
                        <img style={{ width: "40px", margin: "5px" }} src={ln} alt="LinkedIn Shyam Sunder" /></a>
                    <a href="https://wa.me/917397238869" target='_blank' rel="noopener noreferrer">
                        <img style={{ width: "55px", margin: "5px" }} src={wa} alt="Whatsaap Shyam Sunder" /></a>
                    <br /><br />

                    <p>Email:<br /><a href="mailto:syamsunderthambabathula@gmail.com">Click Here to Send an Email</a></p>


                </div>
            </div>
        )
    }
}

export default Contact;