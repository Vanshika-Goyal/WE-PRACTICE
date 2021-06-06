import React, { Component, } from "react";
import './ErrorPage.css';
import Image from '../../config/imgconfig'

class Errorpage extends Component {
    render() {
        return (
            <div className="full">
                <div className="main">

                    <div className="content">
                        <h1>WHOOPS!</h1>
                        <p>We Couldn't find your page</p>
                        <button className="button">   Go Back   </button>
                    </div>

                </div>


            </div>


        );

    }
}

export default Errorpage;