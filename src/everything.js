import Live from './components/live'
import { Chords, ChordPage } from './components/chords'
import { Lyrics, LyricPage } from './components/lyrics'
import Contact from "./components/contact.js"
import Bible from './components/bible'
import QNav from './components/qnav'
import Scroll from './components/scroll.js'
import { Sugar } from 'react-preloaders';
import { Helmet } from 'react-helmet'
import React from 'react';
import './index.css';
import { App, Home, Navbar, BlogPage } from './App';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import $ from 'jquery'
import * as serviceWorker from './serviceWorker';
import AdSense from 'react-adsense';

//import ReactGA from 'react-ga';
//import cursor from "./images/cursor.png"

export class Appl extends React.Component {
    state = {
        blogclick: false,
        isLoading: true
    }


    navbarupdate = () => {
        var w = $(window).width();
        if (w > 991.98) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                var w = $(window).width()
                console.log(w)
                if (scroll > 10) {
                    // $(".navbar").animate({
                    $(".navbar").addClass("navbar-light")
                    $(".navbar").removeClass("py-3")
                    $(".navbar").css({

                        fontSize: "10px", backgroundColor: "#fff"
                    })
                    //});
                    $(".navbar").find("img").show(400)
                    $(".navbar").find(".nav-item").css({
                        color: "#000"
                    })
                    $(".navbar").find(".ltext").css({
                        color: "#000"
                    })
                }
                else {
                    $(".navbar").addClass("py-3")
                    $(".navbar").css({
                        height: "auto", backgroundColor: "transparent"
                    })
                    $(".navbar").find("img").hide(400)
                    $(".navbar").find(".ltext").css({
                        color: "#fff"
                    })
                    $(".navbar").find(".nav-item").css({
                        color: "#fff",
                        fontWeight: "1000"
                    })
                }
            })
        }
        else {
            $(".navbar").addClass("navbar-light")
            $(".navbar").removeClass('py-3')
            $(".navbar").css({
                backgroundColor: "#000", height: "auto"
            })
            $('.show').on('click', function () {
                $(".navbar").css({
                    backgroundColor: "#000"
                })
                $(".navbar").find(".ltext").css({
                    marginLeft: "0px"
                })
            })
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                //var w = $(window).width()
                if (scroll > 7) {
                    // $(".navbar").animate({
                    $(".navbar").addClass("navbar-light")
                    $(".navbar").removeClass("py-3 navbar-dark")
                    $(".navbar").css({
                        backgroundColor: "#fff"
                    })
                    $(".navbar").find("img").show(400)
                    $(".navbar").find(".nav-item").css({
                        color: "#000"
                    })
                    $(".navbar").find(".ltext").css({
                        fontSize: "20px"
                    })
                    //});
                }
                else {
                    $(".navbar").addClass("navbar-dark")
                    $(".navbar").find(".ltext").css({
                        fontSize: "23px"
                    })
                    $(".navbar").find("img").hide(400)
                    $(".navbar").css({
                        height: "auto", backgroundColor: "#000"
                    })
                    $(".navbar").find(".nav-item").css({
                        color: "#fff"
                    })
                }
            })
        }


    }

    showComponent() {
        var path = window.location.pathname; // Returns path only (/path/example.html)

        if (path === "/" || path === "") {
            $(".basePath").show()
        }
        else {
            $(".basePath").hide()
        }
        console.log(path)
    }


    componentDidMount() {
        //(window.adsbygoogle = window.adsbygoogle || []).push({});

        (window.adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-9850595882156546",
            enable_page_level_ads: true
        });
        $("#bot").hide();
        this.navbarupdate();
    }

    render() {
        return (
            <div className="everytin">
                <Sugar color={'#fff'} background={"#000"} animation={"slide-left"} />
                <Navbar />
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <div className="basePath">

                                <Scroll />
                                <Home />
                                <Helmet>
                                    <meta charSet="utf-8" />
                                    <title>Family Harvest Church</title>
                                    <meta
                                        name="description"
                                        content="Family Harvest Church - Home | ఫ్యామిలీ హార్వెస్ట్ చర్చి"
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
                            </div>
                        </Route>
                        <Route path="/home">

                        </Route>
                        <Route path="/blog/:slug/">
                            <Route path="/blog/:slug/" component={BlogPage} />
                        </Route>
                        <Route path="/blog">
                            <App />

                        </Route>
                        <Route path="/live">
                            <Scroll />
                            <Live />
                            <Helmet>
                                <meta charSet="utf-8" />
                                <title>Family Harvest Church Live Sunday Service | చర్చి లైవ్</title>
                                <meta
                                    name="description"
                                    content="Family Harvest Church Live Sunday Service | ఫ్యామిలీ హార్వెస్ట్ చర్చి లైవ్ సండే సర్వీస్"

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
                        </Route>
                        <Route path="/bible">
                            <Helmet>
                                <meta charSet="utf-8" />
                                <title>Telugu Bible Online Lightning Fast | తెలుగు బైబిల్</title>
                                <meta
                                    name="description"
                                    content="Telugu Bible Online Lightning Fast | తెలుగు బైబిల్ ఆన్‌లైన్ మెరుపు వేగంగా | Christian Bible Language: Telugu"
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

                            <Bible />
                        </Route>
                        <Route path="/chords/:slug/">
                            <Route path="/chords/:slug/" component={ChordPage} />
                        </Route>
                        <Route exact path="/chords">

                            <Chords />
                        </Route>
                        <Route path="/lyrics/:slug/">
                            <Route path="/lyrics/:slug/" component={LyricPage} />
                        </Route>
                        <Route exact path="/lyrics">

                            <Lyrics />
                        </Route>
                        <Route path="/qnav">
                            <QNav />
                        </Route>
                    </Switch>
                </Router>
                <div id="contact">
                    <Contact />
                </div>
            </div >
        );
    }
};


export default Appl;