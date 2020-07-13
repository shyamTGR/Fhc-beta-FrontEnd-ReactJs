import React from 'react';
import './chords.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import $ from 'jquery'
import { Helmet } from "react-helmet";
// import { useLocation } from 'react-router-dom'
//slugblog = {}
import Ad from './ad.js'

export class Chords extends React.Component {
    constructor(props) {
        super();
        this.state = {
            chordsData: [],
            orderedData: {},
            alpha: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        };
    }

    get = () => {
        var data = {}, st = [];
        const axios = require('axios')
        axios.get('https://backend.familyharvestchurch.in/api/chords.json').then((response) => {
            data = response.data;

            for (var i = 0; i < data.count; i++) {
                st[i] = {
                    author: data.results[i].author,
                    telugu_name: data.results[i].telugu_name,
                    english_name: data.results[i].english_name,
                    slug: data.results[i].slug,
                    telugu_chordss: data.results[i].telugu_chordss,
                    english_chordss: data.results[i].english_chordss,
                    created: data.results[i].created_date,
                    editing: data.results[i].editing
                }
                //slugblog[data.results[i].slug] = { videoId: data.results[i].video_id, title: data.results[i].title, captionOrDesc: data.results[i].caption_or_description }

            }
            this.setState({ chordsData: st })
        })

    }

    handleClick() {
        $(".chordsbody").hide()
    }

    showComponent() {
        var path = window.location.pathname; // Returns path only (/path/example.html)

        if (path === "/chords") {
            $(".Chordsbody").show()
        }
        else {
            $(".Chordsbody").hide()
        }
        // console.log("sent")
    }

    scroll() {
        $(window).scrollTop(0)
    }

    componentDidMount() {
        //console.log(this.state.chordsData)
        //var url = window.location.href;     // Returns full URL (https://example.com/path/example.html)
        //var origin = window.location.origin;

        //console.log(pathname)
        this.get()
    }

    render() {

        return (<div className="Chordsbody" >
            <Helmet>
                <meta charSet="utf-8" />
                <title>Telugu Christian Song Chords - FHC</title>
                <meta
                    name="description"
                    content="Telugu Christian songs chords - fhc"
                />
                {/* Global site tag (gtag.js) - Google Analytics  */}
                <script async src='https://www.googletagmanager.com/gtag/js?id=UA-135051271-5'></script>
                <script>
                    {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-135051271-5');
        `}
                </script>
            </Helmet>
            <div>
                <div className="scrollTop"></div>
                <div className="welcomeDiv">
                    <h1>Find Chords for a Plethora of<br /><span className="fhclive">Christian Songs</span></h1>
                </div>
                <div className="Ctitles">
                    {this.state.alpha.map((letter, index) => (
                        <div class="lyricNav">
                            <a className="titleAlphaM" style={{ color: "#000" }} href={"#" + letter}>{letter}</a>
                        </div>
                    ))}
                    <br /><br /><br />
                    {this.state.alpha.map((letter, index) => (
                        <div className="titleWrap" id={letter}>
                            <div onClick={"#" + letter} className="titleAlpha" style={{ color: "#000" }} >{letter}</div>

                            {this.state.chordsData.map((lyric, index) => (
                                <div key={index} onClick={this.scroll}>
                                    <Link className="titleLink" to={`/chords/${lyric.slug}/#english`}>
                                        {lyric.english_name[0] === letter ? <div className="Ctitle" style={{}}>
                                            <div >{lyric.english_name}  <span className="teluguTitle" style={{}}>{lyric.telugu_name}</span></div>

                                        </div> : null}

                                    </Link></div>

                            ))}</div>))}
                </div>
            </div>
            <Ad />
        </div >
        )
    }
}

export const ChordPage = ({ match, location }) => {
    const { params: { slug } } = match;
    const [content, setCon] = useState()
    const [title, setTitle] = useState()
    const [englishTitle, setETitle] = useState()
    const [englishCon, setECon] = useState()

    useEffect(() => {
        // Update the document title using the browser API

        var data = {}, st = {};
        const axios = require('axios')
        axios.get('https://backend.familyharvestchurch.in/api/chords.json').then((response) => {
            data = response.data;

            for (var i = 0; i < data.count; i++) {
                st[data.results[i].slug] = {
                    author: data.results[i].author,
                    telugu_name: data.results[i].telugu_name,
                    english_name: data.results[i].english_name,
                    slug: data.results[i].slug,
                    telugu_lyrics: data.results[i].telugu_lyrics,
                    english_lyrics: data.results[i].english_lyrics,
                    created: data.results[i].created_date,
                    editing: data.results[i].editing
                }
                //slugblog[data.results[i].slug] = { videoId: data.results[i].video_id, title: data.results[i].title, captionOrDesc: data.results[i].caption_or_description }

            }
            st[slug].telugu_lyrics = "<div class='chordBox'>" + st[slug].telugu_lyrics + "<br />" + '</div>'
            st[slug].english_lyrics = "<div class='chordBoxE'>" + st[slug].english_lyrics + "<br />" + '</div>'

            setCon(st[slug].telugu_lyrics)
            setTitle(st[slug].telugu_name)
            setETitle(st[slug].english_name)
            setECon(st[slug].english_lyrics)
            console.log(st)

        })

    });
    return (<div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{englishTitle + " | " + title + " Song Chords - FHC"}</title>
            <meta
                name="description"
                content={englishTitle + " | " + title + " Song Chords - Telugu Christian song chords unlimited - Family Harvest Church"}
            />
            {/* Global site tag (gtag.js) - Google Analytics  */}
            <script async src='https://www.googletagmanager.com/gtag/js?id=UA-135051271-5'></script>
            <script>
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-135051271-5');
        `}
            </script>
        </Helmet>
        <div className="chordpage" id="lyricPage" style={{}}>
            <Link to='/chords' > <button className="back" href="/">&lt; Back</button>
            </Link>
            <br />
            <a href="#english" ><button id="telugu" className="langButton">Click Here to View English Version</button> </a>
            <div className="chordDiv" >
                <h1 className="chordTitle">{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: content }} style={{}}></div>
            </div>
            <Ad />
            <a href="#telugu" ><button id="english" className="langButton">Click Here to View Telugu Version</button> </a>
            <div className="chordDiv" >
                <h1 className="chordTitle" style={{ fontFamily: "Girassol" }}>{englishTitle}</h1>
                <div dangerouslySetInnerHTML={{ __html: englishCon }} style={{}}></div>
            </div>

            <div className="tools">
                More Tools like Key Transpose Coming Soon!
                <Ad />
            </div>
        </div>
    </div>
    )

}

export default Chords;