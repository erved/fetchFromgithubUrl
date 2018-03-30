import React from 'react';
import FormContainer from '../containers/FormContainer';
import DisplayContainer from '../containers/DisplayContainer';
//import Display from './Display';

class App extends React.Component{
    render(){
        return(
            <div>
                <FormContainer />
                <DisplayContainer />
            </div>
        )
    }
}
export default App;