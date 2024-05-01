import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Resume extends Component{
    render() {
        return(
            <div>
                <Grid >
                    <Cell col={12}>

                        <h1 style={{paddingTop: '2em', textAlign: "center"}  }>Mohanalakshmi</h1>
                        <h4 style={{color: 'grey', textAlign: "center"}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid '}}/>
                        <h3 style={{textAlign: "left"}  }>EDUCATION</h3>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>
                            1. Done my schooling in Wisdom matric higher secondary school <br />
                        </p>
                        <p>
                            2. B.E-Electrical and Electronics Engineering <br />
                        </p>
                        <p>

                            
                            Current USC GPA: 8.24 <br />
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h3 style={{textAlign: "left"}  }>SKILLS & EXPERIENCE</h3>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>
                            ● Proficient in  Python, Java and SQL . <br/>
                            ● Learnt Selenium  testing and DevOps. <br/>
                        </p>
                        
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                        <h5>Email</h5>
                        <p>mohanalakshmij7@gmail.com</p>
                        
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                </Grid>
            </div>

        )
    }

}

export default Resume;