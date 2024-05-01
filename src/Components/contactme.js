import React, { Component } from 'react';
import {Cell, Grid} from "react-mdl";


class Contactme extends Component{
    render() {
        return(
            <div>
                <div style={{width: '100%', margin: 'auto'}}>
                    <Grid className="contact-grid">
                        <Cell col={6}>
                            <div className="banner-text-contact">
                                

                            </div>
                        </Cell>
                        <Cell col={6}>
                            <div className="banner-text-contact">
                                <h1> About Me</h1>
                                <hr>
                                </hr>
                                <p> A passionate engineering student pursuing Bachelor's degree in the stream of Electrical and Electronics Engineering
                                </p>
                                <div className="social-links">

                                    {/* LinkedIn */}
                                    <a href="https://www.linkedin.com/in/mohanalakshmij?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                                    </a>

                                    {/* Github */}
                                    <a href="https://github.com/mohanajaganathan" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square" aria-hidden="true" />
                                    </a>

                                    
                                    

                                </div>

                            </div>
                        </Cell>
                    </Grid>
                </div>
            </div>

        )
    }

}

export default Contactme;