import React from 'react';
class Display extends React.Component {
    render() {
        console.log("display.js",this.props);
        const {fetching,userData,error}=this.props;
        return (
            <div>
                <h3>Name:{this.props.userData.name}</h3>
                <h3>Bio:{this.props.userData.bio}</h3>
                <h3>Location:{this.props.userData.location}</h3>
                <h3>Company:{this.props.userData.company}</h3>                
                <h3>GitHub Login:{this.props.userData.login}</h3>
            </div>
        );
    }
}
export default Display;