import React from 'react';
import './scroll.css'
import $ from 'jquery'
import arrow from "./images/arrow.svg"
export class Scroll extends React.Component {

    scrolltop() {
        $(window).scrollTop(0)
    }

    componentDidMount() {

        $(".scrollTop").hide()
        $(window).scroll(() => {
            var scroll = $(window).scrollTop();
            if (scroll > 500) {
                $(".scrollTop").fadeIn()
            }
            else {
                $(".scrollTop").fadeOut()
            }
        })
    }
    render() {
        return (
            <div className="scrollTop" onClick={this.scrolltop}>
                <button >
                    <img src={arrow} alt="arrow top family Harvest Church" style={{ width: "35px" }} />
                </button>
            </div>
        )
    }
}

export default Scroll;