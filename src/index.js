import React, {useState, useEffect} from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import useLocation from "./useLocation";

const App = () => {
    
    const [lat, errorMessage] = useLocation();

    let content;
    if(lat && !errorMessage)
    {
        content = <SeasonDisplay lat={lat} />;
    }
    else if(!lat && errorMessage)
    {
        content = (<div>Error: {errorMessage}</div>);
    }
    else
    {
        content = (<Spinner spinnerText="Waiting for location permissions..." />);
    }

    return <div>{content}</div>
};

// class App extends React.Component
// {
//     state = {lat: null, errorMessage: ""};

//     componentDidMount()
//     {
//         window.navigator.geolocation.getCurrentPosition(
//             (position) => this.setState({lat: position.coords.latitude}),
//             (err) => this.setState({errorMessage: err.message})  
//         );
//     }

//     renderContent()
//     {
//             if(this.state.lat && !this.state.errorMessage)
//             {
//                 return <SeasonDisplay lat={this.state.lat} />;
//             }
//             if (!this.state.lat && this.state.errorMessage)
//             {
//                 return (<div>Error: {this.state.errorMessage}</div>);
//             }
//             else 
//             {
//                 return (<Spinner spinnerText="Waiting for location permissions..." />);
//             }
            
//     }

//     render()
//     {
//         return (
//             <div>
//                 {this.renderContent()}
//             </div>
//         );
//     }
// }

ReactDom.render(<App />, document.getElementById("root"));