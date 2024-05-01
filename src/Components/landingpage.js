import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landingpage extends Component{
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
            

                        <div className="banner-text">
                            <h1>Mohanalakshmi</h1>

                            <hr>
                            </hr>

                            <p>Skills: HTML/CSS  |  C/C++  |  JavaScript  |  React  |  Python  |  SQL  |  Snowflake  |  Java</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/mohanalakshmij?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" rel="noopener noreferrer" target="_blank">
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

        )
    }

}

export default Landingpage;