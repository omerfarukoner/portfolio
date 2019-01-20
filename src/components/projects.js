import React, {Component} from 'react';
import {Tabs, Tab} from 'react-mdl';

class Projects extends Component{
    constructor(probs){
        super(probs);
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if(this.state.activeTab ===0){
            return(
                <div><h1>Starks</h1></div>
            )
        } else if(this.state.activeTab ===1){
            return(
                <div><h1>Lannisters</h1></div>
            )
        } else if(this.state.activeTab ===2){
            return(
                <div><h1>Targaryens</h1></div>
            )
        }
    }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({ activeTab: tabID})} ripple>
                    <Tab>Starks</Tab>
                    <Tab>Lannisters</Tab>
                    <Tab>Targaryens</Tab>
                </Tabs>
                <section className="projects-grid">
                    {this.toggleCategories()}
                </section>
            </div>    
        );
    }
}

export default Projects;