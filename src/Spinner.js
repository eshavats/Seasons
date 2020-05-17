import React from "react";

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.spinnerText}</div>
        </div>
    );
};

Spinner.defaultProps = {
    spinnerText: "Loading..."
};

export default Spinner;