import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style={{width:'100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img
                        src="http://icons.iconarchive.com/icons/designbolts/free-male-avatars/128/Male-Avatar-Bowler-Hat-icon.png"
                        alt="avatar"
                        className="avatar-img"    
                    />
                    <div className="banner-text">
                        
                        <h1>Software Engineer</h1>
                        <hr/>
                    <p>HTLM/CSS | Bootstrap | JavaScript | React | React Native | MongoDB</p>
                   <div className="social-links">
                        <a href="http://google.com" rel="noopener noreferrer"  target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>
                        <a href="http://google.com" rel="noopener noreferrer"  target="_blank">
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

export default Landing;