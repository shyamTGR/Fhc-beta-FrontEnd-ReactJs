import React from 'react';
import "./qnav.css"


export class QNav extends React.Component {

    render() {
        return (<div className="qnavPage">
            <div>
                <h1>Quick Navigation</h1>
            </div>
            <div className="buttons">
                <div className="button">
                    <a href='/live'>Sunday Service Live</a>
                </div>
                <div className="button">
                    <a href='/lyrics'>Song Lyrics</a>
                </div>
                <div className="button">
                    <a href='/chords'>Chords</a>
                </div>
                <div className="button">
                    <a href='/bible'>Live Telugu Bible</a>
                </div>
                <div className="button">
                    <a href='/blog'>Blog</a>
                </div>
                <div className="button">
                    <a href='#contact'>Contact</a>
                </div>
                <div className="button">
                    <a href='#more_stuff_coming_soon'>More Coming Soon...</a>
                </div>
            </div>

        </div>)
    }
}

export default QNav;