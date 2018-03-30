import React from 'react';
import { fetching,fetchSuccess,fetchError } from './../actions/userInfoActions';
import axios from 'axios';
class Form extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(ev){
        console.log(this.urlTextBox.value);
        const { dispatch } = this.props;

        dispatch(fetching());

       // Make a request for a user with a given ID
        axios.get(this.urlTextBox.value)
            .then(function (response) {
                dispatch(fetchSuccess(response.data));
                console.log(response);
            })
            .catch(function (error) {
                dispatch(fetchError(error.message));                
                console.log(error);
            });
    }

    render() {
        console.log('form.js',this.props);
        return (
            <div>
                <form>
                    <input type="text" size="75" ref={node => {this.urlTextBox = node;}} />
                    &nbsp;&nbsp;&nbsp;
                    <input type="button" value="Get user info..."
                     onClick={this.handleClick} />
                </form>
            </div>
        );
    }
}
export default Form;