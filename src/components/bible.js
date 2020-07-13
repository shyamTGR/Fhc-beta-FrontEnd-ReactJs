import React from 'react';
import './bible.css'
import $ from 'jquery'
//import jQuery from 'jquery'
//import './js/turn.js'
import biblebag from './images/bibleBag.jpg'
import { Helmet } from 'react-helmet';
//import data from ''

export class Bible extends React.Component {
    render() {
        return (<div className="bibleBag">
            <div className="bgOverlay"></div>
            <div className="bibleBg"><img src={biblebag} alt="Bible Background Family Harvest Church" /></div>
            <BibleCom />
        </div>
        )
    }
}

export class BibleCom extends React.Component {
    constructor(props) {
        super();
        this.state = {
            book: '',
            chap: '',
            chapKeys: ['Select Chapter'],
            chapData: [],
            verse: '',
            verseKeys: ['Select Verse'],
            dispData: ['Select The Book You Want To Read']
        };
    }

    getData = (book, chap, verse) => {
        //const XMLHttpRequest = require('XMLHttpRequest')

    }

    handleChange(e) {
        //this.renderBible();
        this.setState({
            book: e.target.value,
            chapKeys: ["Select Chapter"],
            verseKeys: ["Select Verse"]
        })
        //this.getData(this.state.book, 1, 2);
        var json = {}
        if (e.target.value === "Select") {
            this.setState({ chapKeys: ['Select Chapter'], verseKeys: ["Select Verse"] });
            this.setState({ dispData: ["Select The Chapter You Want to Read"] });

        }
        else {
            json = require("./data/bible/" + e.target.value + ".json");
            this.setState({ json: json })
            var ckeys = (Object.keys(json[e.target.value]));
            ckeys.unshift("Select Chapter")
            this.setState({ chapKeys: ckeys });
            this.setState({ dispData: ["Select The Chapter You Want To Read"] });

            if (this.state.book && this.state.book !== "Select") {
                console.log(this.state.book)
                console.log(this.state.chapKeys)
            }
        }
    }

    chapterChange = (e) => {
        //this.renderBible();
        console.log(e.target.value)
        if (e.target.value !== "Select Chapter") {
            var disp = " ", dispData = [] /*this.state.json[this.state.book][e.target.value]((user, index) => (
            <option value={user}>{user}</option>
        ));*/

            var nV = (Object.keys(this.state.json[this.state.book][e.target.value]).length)
            for (var i = 1; i <= nV; i++) {
                disp = e.target.value.toString() + ":" + i.toString() + ". " + this.state.json[this.state.book][e.target.value][i] + "\n"
                dispData[i] = disp
            }
            var vkeys = [];
            vkeys = Object.keys(this.state.json[this.state.book][e.target.value]);
            vkeys.unshift("Select Verse")
            this.setState({
                chap: e.target.value,
                dispData: dispData,
                verseKeys: vkeys,
                chapData: dispData
            });
        }
        else {
            this.setState({
                verseKeys: ["Select Verse"],
                dispData: ["Select the Chapter You want to read"],

            })
        }

    }

    verseChange = (e) => {
        const chapdata = this.state.chapData;
        if (e.target.value !== "Select Verse") {
            var disp = this.state.chap.toString() + ":" + e.target.value.toString() + ". " + this.state.json[this.state.book][this.state.chap][e.target.value]
            this.setState({ dispData: [disp] })
        }
        else {
            this.setState({ dispData: chapdata })

        }
        //this.renderBible();
    }

    copyText = (e) => {
        alert("Copied to Clipboard!")
        var copyText = "hello";

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }

    componentDidMount() {


    }


    render() {
        //var ckeys = this.state.chapKeys
        return (
            <div>
                <div className="biblepage">

                    <div className="biblebody">
                        <h1>Telugu Bible</h1>
                        <select id="Book" onChange={this.handleChange.bind(this)} name="Book" >
                            <option value="Select">Select Book</option>
                            <option value="ఆదికాండము">ఆదికాండము</option>
                            <option value="నిర్గమకాండము">నిర్గమకాండము</option>
                            <option value="లేవీయకాండము">లేవీయకాండము</option>
                            <option value="సంఖ్యాకాండము">సంఖ్యాకాండము</option>
                            <option value="ద్వితియోపదేశకాండము">ద్వితియోపదేశకాండము</option>
                            <option value="యెహోషువ">యెహోషువ</option>
                            <option value="న్యాయాధిపతులు">న్యాయాధిపతులు</option>
                            <option value="రూతు">రూతు</option>
                            <option value="1సమూయేలు">1సమూయేలు</option>
                            <option value="2సమూయేలు">2సమూయేలు</option>
                            <option value="1రాజులు">1రాజులు</option>
                            <option value="2రాజులు">2రాజులు</option>
                            <option value="1దినవృత్తాంతములు">1దినవృత్తాంతములు</option>
                            <option value="2దినవృత్తాంతములు">2దినవృత్తాంతములు</option>
                            <option value="ఎజ్రా">ఎజ్రా</option>
                            <option value="నెహెమ్యా">నెహెమ్యా</option>
                            <option value="ఎస్తేరు">ఎస్తేరు</option>
                            <option value="యోబు">యోబు</option>
                            <option value="కీర్తనలు">కీర్తనలు</option>
                            <option value="సామెతలు">సామెతలు</option>
                            <option value="ప్రసంగి">ప్రసంగి</option>
                            <option value="పరమగీతము">పరమగీతము</option>
                            <option value="యెషయా">యెషయా</option>
                            <option value="యిర్మియా">యిర్మియా</option>
                            <option value="విలాపవాక్యములు">విలాపవాక్యములు</option>
                            <option value="యెహేజ్కేలు">యెహేజ్కేలు</option>
                            <option value="దానియేలు">దానియేలు</option>
                            <option value="హోషేయా">హోషేయా</option>
                            <option value="యోవేలు">యోవేలు</option>
                            <option value="ఆమోసు">ఆమోసు</option>
                            <option value="ఓబద్యా">ఓబద్యా</option>
                            <option value="యోనా">యోనా</option>
                            <option value="మీకా">మీకా</option>
                            <option value="నహూము">నహూము</option>
                            <option value="హబక్కూకు">హబక్కూకు</option>
                            <option value="జెఫన్యా">జెఫన్యా</option>
                            <option value="హగ్గయి">హగ్గయి</option>
                            <option value="జెకర్యా">జెకర్యా</option>
                            <option value="మలాకీ">మలాకీ</option>
                            <option value="మత్తయి">మత్తయి</option>
                            <option value="మార్కు">మార్కు</option>
                            <option value="లూకా">లూకా</option>
                            <option value="యోహాను">యోహాను</option>
                            <option value="అపో.కార్యములు">అపో.కార్యములు</option>
                            <option value="రోమీయులకు">రోమీయులకు</option>
                            <option value="1కోరింథీయులకు">1కోరింథీయులకు</option>
                            <option value="2కోరింథీయులకు">2కోరింథీయులకు</option>
                            <option value="గలతియులకు">గలతియులకు</option>
                            <option value="ఎఫెసీయులకు">ఎఫెసీయులకు</option>
                            <option value="ఫిలిప్పీయులకు">ఫిలిప్పీయులకు</option>
                            <option value="కొలస్సీయులకు">కొలస్సీయులకు</option>
                            <option value="1థెస్సలొనికయులకు">1థెస్సలొనికయులకు</option>
                            <option value="2థెస్సలొనికయులకు">2థెస్సలొనికయులకు</option>
                            <option value="1తిమోతికి ">1తిమోతికి </option>
                            <option value="2తిమోతికి ">2తిమోతికి </option>
                            <option value="తీతుకు">తీతుకు</option>
                            <option value="ఫిలేమోనుకు">ఫిలేమోనుకు</option>
                            <option value="హెబ్రీయులకు">హెబ్రీయులకు</option>
                            <option value="యాకోబు">యాకోబు</option>
                            <option value="1పేతురు">1పేతురు</option>
                            <option value="2పేతురు">2పేతురు</option>
                            <option value="1యోహాను">1యోహాను</option>
                            <option value="2యోహాను">2యోహాను</option>
                            <option value="3యోహాను">3యోహాను</option>
                            <option value="యూదా">యూదా</option>
                            <option value="ప్రకటన గ్రంథం">ప్రకటన గ్రంథం</option>
                        </select>
                        <br />
                        <select id="Chapter" onChange={this.chapterChange.bind(this)} name="Chapter" >
                            {this.state.chapKeys.map((user, index) => (
                                <option value={user} key={index}>{user}</option>
                            ))}

                        </select><br />
                        <select id="Verse" onChange={this.verseChange.bind(this)} name="Verse" >

                            {this.state.verseKeys.map((user, index) => (
                                <option value={user} key={index}>{user}</option>
                            ))}
                        </select>

                        <div className="display">
                            <div style={{ textAlign: "center" }}><h2>{this.state.book}</h2></div>
                            {this.state.dispData.map((verse, index) => (
                                <div key={verse} className="verses">{verse}<br /></div>
                            ))}
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}


/*export class BibleBook extends React.Component {

    renderBible = () => {
        var j = 3;
        for (var i = 0; i < 10; i++) {

            var element = $("<div />").html(i);
            $("#flipbook").turn("addPage", element, j);
            j++;
        }
    }

    componentDidMount() {

        $("#flipbook").turn({
            // Magazine width
            //width: "80%",
            // Magazine height
            height: "45vw",
            // Duration in millisecond
            duration: 1000,
            // Hardware acceleration
            // Enables gradients
            gradients: true,
            // Auto center this flipbook
            autoCenter: true,
            // Elevation from the edge of the flipbook when turning a page
            elevation: 50
            // The number of pages
            //pages: 12,
        });

         $(document).keydown(function (e) {

            var previous = 37, next = 39;

            switch (e.keyCode) {
                case previous:

                    $('#flipbook').turn('previous');

                    break;
                case next:

                    $('#flipbook').turn('stop').turn('next');

                    break;
            }

        });

        this.renderBible();


    }
    render() {
        return (
            <div>
                <div id="biblebook">
                    <div id="flipbook">
                        <div className="hard"><div className="hardo"><img src={biblebag} alt="Bible Cover by Shyam Sunder"></img></div></div>
                        <div ><div className="hardi"></div></div>
                        <div>hello</div>
                        <div>hello</div>

                        <div className="hard"></div>
                        <div className="hard"></div>
                    </div>

                </div>
            </div>
        )
    }
}*/
export default Bible;