import React from 'react';
import './lyric.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import $ from 'jquery'
import ClipLoader from "react-spinners/ClipLoader";
import { Helmet } from "react-helmet";
import Ad from './ad.js'
//slugblog = {}

export class Lyrics extends React.Component {
    constructor(props) {
        super();
        this.state = {
            lyricData: [],
            orderedData: {},
            alpha: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            isLoading: true
        };
    }

    get = () => {
        var data = {}, st = [];
        const axios = require('axios')
        axios.get('https://backend.familyharvestchurch.in/api/lyric.json').then((response) => {
            data = response.data;

            for (var i = 0; i < data.count; i++) {
                st[i] = {
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
            this.setState({ lyricData: st })
            console.log(this.state.lyricData[0].english_name[0] === 'N')
        }).then(() => {
            this.setState({ isLoading: false })
        })
    }

    orderTitles() {
        // var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    }

    scroll() {
        $(window).scrollTop(0)
    }

    componentDidMount() {
        //console.log(this.state.lyricData)

        this.get()


        //const axios = require('axios')

        /*https://firebasestorage.googleapis.com/v0/b/familyharvestchurchlive.appspot.com/o/1%E0%B0%95%E0%B1%8B%E0%B0%B0%E0%B0%BF%E0%B0%82%E0%B0%A5%E0%B1%80%E0%B0%AF%E0%B1%81%E0%B0%B2%E0%B0%95%E0%B1%81.json?alt=media&token=ca966b79-cd30-4ca0-86f8-887f6430abdd
        axios.get('https://firebasestorage.googleapis.com/v0/b/familyharvestchurchlive.appspot.com/o/1%E0%B0%95%E0%B1%8B%E0%B0%B0%E0%B0%BF%E0%B0%82%E0%B0%A5%E0%B1%80%E0%B0%AF%E0%B1%81%E0%B0%B2%E0%B0%95%E0%B1%81.json?alt=media&token=ca966b79-cd30-4ca0-86f8-887f6430abdd').then((response) => {
            const data = response.data;
            console.log(data)
        })
        axios({
            method: 'post',
            url: 'https://firebasestorage.googleapis.com/v0/b/familyharvestchurchlive.appspot.com/o/1%E0%B0%95%E0%B1%8B%E0%B0%B0%E0%B0%BF%E0%B0%82%E0%B0%A5%E0%B1%80%E0%B0%AF%E0%B1%81%E0%B0%B2%E0%B0%95%E0%B1%81.json?alt=media&token=ca966b79-cd30-4ca0-86f8-887f6430abdd',
            data: { "Process": "Success" }
        }).then(console.log("good"));*/
    }
    render() {

        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Telugu Christian Song Lyrics Find Unlimited Number of Songs!</title>
                    <meta
                        name="description"
                        content="Telugu Christian Song Lyrics with Amazing Tools"
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
                <div className="lyricbody" >

                    <div>
                        <div className="welcomeDiv">
                            <h1>Find Lyrics for a Plethora of<br /><span className="fhclive">Christian Songs</span></h1>
                        </div>
                        <div className="titles">

                            {this.state.alpha.map((letter, index) => (
                                <div class="lyricNav">
                                    <a className="titleAlphaM" style={{ color: "#000" }} href={"#" + letter}>{letter}</a>
                                </div>
                            ))}
                            <br /><br /><br />
                            <div style={{ margin: "auto" }}> <ClipLoader

                                size={"100%"}
                                color={"#000"}
                                loading={this.state.isLoading}
                            /></div>
                            {this.state.alpha.map((letter, index) => (
                                <div className="titleWrap" id={letter}>
                                    <div onClick={"#" + letter} className="titleAlpha" style={{ color: "#000" }} >{letter}</div>

                                    {this.state.lyricData.map((lyric, index) => (
                                        <div key={index} onClick={this.scroll}>

                                            <Link className="titleLink#lyricPage" to={`/lyrics/${lyric.slug}`}>
                                                {lyric.english_name[0] === letter ? <div className="title">

                                                    <div className="titleLink">{lyric.english_name} | <span className="teluguTitle" style={{ fontSize: "28px" }}>{lyric.telugu_name}</span></div>

                                                </div> : null}

                                            </Link></div>

                                    ))}</div>))}
                        </div>
                    </div>
                    <Ad />
                </div >

            </div>
        )
    }
}

export const LyricPage = ({ match, location }) => {
    const { params: { slug } } = match;
    const [content, setCon] = useState()
    const [title, setTitle] = useState()
    const [englishTitle, setETitle] = useState()
    const [englishCon, setECon] = useState()
    const [loading, setLoad] = useState(true)
    useEffect(() => {
        // Update the document title using the browser API

        var data = {}, st = {};
        const axios = require('axios')
        axios.get('https://backend.familyharvestchurch.in/api/lyric.json').then((response) => {
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
            st[slug].telugu_lyrics = "<div class='lyricBox'>" + st[slug].telugu_lyrics + "<br />" + '</div>'
            st[slug].english_lyrics = "<div class='lyricBoxE'>" + st[slug].english_lyrics + "<br />" + '</div>'

            setCon(st[slug].telugu_lyrics)
            setTitle(st[slug].telugu_name)
            setETitle(st[slug].english_name)
            setECon(st[slug].english_lyrics)

        }).then(() => {
            setLoad(false)
        })


    });
    return (<div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{englishTitle + " | " + title + " Song Lyrics - FHC"}</title>
            <meta
                name="description"
                content={englishTitle + " | " + title + " Song Lyrics - Telugu Christian Song Lyrics unlimited - Family Harvest Church"}
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

        <div className="lyricpage" id="lyricPage">
            <Link to='/lyrics' > <button className="back" href="/">&lt; Back</button>

            </Link>

            <a href="#english" ><button id="telugu" className="lyriclangButton">Click Here to View English Version</button> </a>
            <div className="lyricDiv">
                <ClipLoader

                    size={50}
                    color={"#000"}
                    loading={loading}
                />
                <div className="l">
                    <h1 className="lyricTitle">{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>
            </div>
            <Ad />
            <a href="#telugu" ><button id="english" className="lyriclangButton">Click Here to View English Version</button> </a>
            <div className="lyricDiv">
                <ClipLoader

                    size={50}
                    color={"#000"}
                    loading={loading}
                />
                <div className="lyricBox">
                    <h1 className="lyricTitle" style={{ fontFamily: "Girassol", fontSize: "35px" }}>{englishTitle}</h1>
                    <div dangerouslySetInnerHTML={{ __html: englishCon }} style={{ fontFamily: "Georgia" }} className="lyricData"></div>
                </div>
            </div>

            <div className="tools">
                More Lyric Tools Coming Soon!
                <Ad />
            </div>
        </div>
    </div>
    )

}

export default Lyrics;