//import Live from './components/live'
//import Chords from './components/chords'
//import Lyrics from './components/lyrics'
//import Bible from './components/bible'
import logo from './images/logo.png'
import bg1 from './images/bg_1.jpg'
import blogback from './images/bloglist.jpg'
import $ from 'jquery'
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
//import { ReactComponent } from '*.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import BibleCom from "./components/bible.js"
// import Live from "./components/live.js"
import QNav from "./components/qnav.js"
import construction from './images/construction.jpg'
//import cursor from "./images/cursor.png"
var /*uniblog = [],*/ slugblog = {};



export class App extends React.Component {
  state = {
    users: {},
    content: "",
    data: []
  }

  fetchUsers = () => {
    const axios = require('axios')

    var data = {}, st = []

    axios.get('https://backend.familyharvestchurch.ml/api/blog/?format=json').then((response) => {
      data = response.data;

      //console.log(order_id.results[0].content)
      this.setState({ blog: data })
      this.setState({ content: data.results[0].content })
      this.setState({ slug: data.results[0].slug })
      for (var i = 0; i < data.count; i++) {
        st[i] = { title: data.results[i].title, english_title: data.results[i].english_title, content: data.results[i].content, slug: data.results[i].slug, created: data.results[i].created_date }
        slugblog[data.results[i].slug] = { title: data.results[i].title, content: data.results[i].content, slug: data.results[i].slug, created: data.results[i].created_date }

      }
      //this.setState({ slug: data.results[0].slug })
      this.setState({ count: data.count })
      this.setState({ data: st })
      //uniblog = st
      console.log(data)
    });
  }

  // post = () => {
  // }

  showComponent() {
    var path = window.location.pathname; // Returns path only (/path/example.html)

    if (path === "/blog" || path === "/Blog") {
      $(".blog-universal").show()
    }
    else {
      $(".blog-universal").hide()
    }
    //console.log("sent")
  }

  componentDidMount() {

    this.fetchUsers();
    this.showComponent();
    setInterval(this.showComponent, 500)
    // this.post();
  }
  render() {
    const data = this.state.data;
    /*let content = "";
    for (var d in data) {
      content += "<h1>" + data[d].title + "</h1>" + data[d].content
    }*/
    return (<div>
      <div className="underConstruction"><img src={construction} alt="Blog Under Construction Family Harvest Church" />
        <div style={{ marginBottom: "70px", textAlign: "center", fontSize: "25px", fontFamily: "Girassol" }}>Under Construction will be available soon<span role="img" aria-label="Family Harvest Church Smile">😊</span> <br /> Scroll to View Quick Navigation</div>
        <QNav />
      </div>

      <div className="blog-universal"><div ><img className="blogback" src={blogback} alt="background blog by shyam" /></div>
        <div className="bgoverlay"></div>
        <div className="blog-h1">
          <h1>Welcome to FHC Blog</h1>
          <a href="#Blog"><div className="scroll">Scroll</div></a>

        </div>
        <section className="blogl-container"><div id="Blog">
          <div className="list-title"></div>
          <div className="bloglist" style={{ marginTop: "60px" }}>
            <div className="searchBar"></div>
            {data.map((user, index) => (

              < div key={index} >
                <div class="blog-list-uni">
                  <Link to={`/blog/${user.slug}`} target="_blank"
                    className="BlogLink"
                    style={{ textDecoration: "none" }}>
                    <div className="bloglist-h1">
                      <Link to={`/blog/${user.slug}`}
                        style={{
                          fontWeight: "1000", lineHeight: "0.1"
                        }}
                        className="bloglist-item">
                        {user.title} <br />
                        <span className="englishtitle">&#40;{user.english_title}&#41;</span></Link>
                    </div>
                    <div style={{ margin: "2px", height: "0.1px", opacity: "0.5", backgroundColor: "#000" }}></div>
                    <div style={{ color: "#000" }}><div className="bloglist-content" dangerouslySetInnerHTML={{ __html: user.content }} />

                      <span style={{ width: "100%", color: "#000", textAlign: "center", textDecoration: "none" }}>
                      </span>

                    </div></Link>
                </div>
                <div >
                </div>

              </div>

            ))}

          </div>
        </div ></section>

      </div >
    </div>
    )
  }
}


export const BlogPage = ({ match, location }) => {
  const { params: { slug } } = match;
  const [content, setCon] = useState();
  const [title, setTitle] = useState();
  useEffect(() => {
    // Update the document title using the browser API
    $(window).scrollTop(0)
    var data = {}, st = {};
    const axios = require('axios')
    axios.get('https://backend.familyharvestchurch.ml/api/blog/?format=json').then((response) => {
      data = response.data;

      for (var i = 0; i < data.count; i++) {
        st[data.results[i].slug] = {
          author: data.results[i].author,
          title: data.results[i].title,
          english_title: data.results[i].english_title,
          slug: data.results[i].slug,
          content: data.results[i].content,
          english_content: data.results[i].Optional_english_version_content,
          created: data.results[i].created_date,
          editing: data.results[i].editing
        }
        //slugblog[data.results[i].slug] = { videoId: data.results[i].video_id, title: data.results[i].title, captionOrDesc: data.results[i].caption_or_description }

      }

      setCon(st[slug].content)
      setTitle(st[slug].title)
    })
  });

  return (
    <div className="blog">
      <a className="nav-item nav-link" href="/blog" style={{ color: "#000" }}>-Back</a>

      <p>
        <h1>{title}</h1>
      </p>
      <div className="blogcon">
        <p></p>

        <p>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </p>
      </div>
    </div>
  );
};

export class Navbar extends React.Component {
  componentDidMount() {


  }
  render() {
    return (<div>
      <div style={{ height: "0px" }} className="navuni"></div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark py-3" style={{}}>
        <a className="navbar-brand" href="/">
          <span className="ltext" style={{ fontSize: "23px", fontFamily: 'Old Standard TT, serif', marginLeft: "0px", fontWeight: "500" }}>
            <img className="pagelogo" style={{ display: "none", width: "45px", marginTop: "-10px" }} src={logo} alt="Family Harvest Church Logo" />
             Family Harvest Church</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav" >
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/" style={{ color: "#fff" }}><span >Home</span><span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/live" style={{ color: "#fff" }}>Live</a>
            <a className="nav-item nav-link" href="/bible" style={{ color: "#fff" }}>Bible</a>
            <a className="nav-item nav-link" href="/blog" style={{ color: "#fff" }}>Blog</a>
            <a className="nav-item nav-link" href="/lyrics" style={{ color: "#fff" }}>Lyrics</a>
            <a className="nav-item nav-link" href="/chords" style={{ color: "#fff" }}>Chords</a>
            <a className="nav-item nav-link" href="#contact" style={{ color: "#fff" }}>Contact</a>

          </div>
        </div>
      </nav></div >)
  }
}

export class Home extends React.Component {

  scrollToDiv() {
    $(window).scrollTop(500)
  }

  render() {
    return (
      <div>

        <div className="home" >
          <section className="first" style={{ height: "100vh" }}>
            <img className="homebg" src={bg1} alt="BackGround by Shyam Family Harvest Church" />
            <div className="bgoverlay"></div>


            <div className="homecon" style={{ padding: "60px", paddingTop: "30px" }}>
              <div className="wel" style={{ fontFamily: "Georgia" }}>Welcome to <br /><span style={{ color: "white", fontFamily: "Old Standard TT, serif", fontWeight: "" }} className="fhc"><span>Family Harvest </span>Church</span></div>
              <a href="#third" onClick={this.scrollToDiv}>
                <div className="scroll">Scroll</div></a>
            </div>
          </section>
          <div className="second" id="second">
            <div className="secondAbout">
              <h1>About</h1>
              <div className="secondPara">Family Harvest Church Every Sunday Service @10:00AM at Tadepalli navigate to the contact page
              for more information and also Live every week on our official website www.familyharvestchurch.ml/live and check
              out lot more on www.familyharvestchurch.ml like lyrics, guitar chords and an online bible and lot more coming up Stay Tuned!
          </div>
              <br />
              <a href="#third">
                <div className="scroll" style={{}}>Scroll</div></a>

            </div>

          </div>
        </div >
        <div id="third">
          <QNav />
        </div>
        <div id="fourth">
          <BibleCom />
        </div>
        <div id="fb">
        </div>


      </div >
    )
  }
}

export class Appl extends React.Component {
  /*state = {
    blogclick: false
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
      $(".navbar").addClass('navbar-dark')
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
        var w = $(window).width()
        console.log(w)
        if (scroll > 10) {
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



  componentDidMount() {
    this.navbarupdate();

  }
*/
  render() {
    return (<div></div>);
    /*return (
      <div className="everytin">
        <Navbar />

        <Router>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/blog">
            <App />
          </Route>
          <Route path="/live">
            <Live />
          </Route>
          <Route path="/bible">
            <Bible />
          </Route>
          <Route path="/chords">
            <Chords />
          </Route>
          <Route path="/lyrics">
            <Lyrics />
          </Route>

        </Router>
      </div >
    );
  }*/
  }
}

export default Appl;
