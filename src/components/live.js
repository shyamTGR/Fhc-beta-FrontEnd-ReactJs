import React from 'react';
import "./live.css"
// import $ from 'jquery'
import { BibleCom } from "./bible"
import { Helmet } from "react-helmet"
//import ClipLoader from "react-spinners/ClipLoader";
//console.log(order_id.results[0].content)
/*this.setState({ blog: data })
this.setState({ content: data.results[0].content })
this.setState({ slug: data.results[0].slug })*/


export class Live extends React.Component {
    constructor(props) {
        super();
        this.state = {
            todayLive: "",
            liveData: [""],
            loading: true
        };
    }
    getData = () => {
        var data = {}, st = []; //slugblog = {}
        const axios = require('axios')
        axios.get('https://backend.familyharvestchurch.in/api/live.json').then((response) => {
            data = response.data;
            this.setState({ todayLive: data.results[0].video_id })
            for (var i = 1; i < data.count; i++) {
                st[i] = {
                    videoId: ("" + data.results[i].video_id),
                    title: data.results[i].title, captionOrDesc: data.results[i].caption_or_description
                }
                //slugblog[data.results[i].slug] = { videoId: data.results[i].video_id, title: data.results[i].title, captionOrDesc: data.results[i].caption_or_description }

            }
            console.log(data.results[0].video_id);
            this.setState({ liveData: st })
        }).then(() => {
            this.setState({ loading: false })
        })

    }

    componentDidMount() {
        this.getData();
    }

    render() {
        const todayLive = "" + (this.state.todayLive)
        //var width = $(window).width
        //var height = $(window).height

        return (
            <div>

                <div className="liveBody">
                    <div className="liveWrap">
                        <div className="welcomeDiv">
                            <h1>Welcome to <br /><span className="fhclive">FHCLive!</span></h1>
                        </div>
                        <div>
                            <div className="video-responsive">

                                <iframe
                                    title="live"
                                    src={"https://www.youtube.com/embed/" + todayLive}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                                </iframe>
                            </div>
                        </div>
                        <div className="bible">
                            <BibleCom />
                        </div>
                        <div className="previousMessages">
                            <div className="welcomeDiv">
                                <h1>Previous Church Services</h1>
                            </div>
                            {this.state.liveData.map((video, index) => (<div>
                                <div>
                                    <h1 className="videoTitle">{video.title}</h1>
                                    <div className="video-responsive">
                                        <iframe
                                            title="live"
                                            src={"https://www.youtube.com/embed/" + video.videoId}
                                            frameborder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                                        </iframe>
                                    </div>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export class PreviousLives extends React.Component {
    render() {
        return (<div>


        </div>);
    }
}
export default Live;