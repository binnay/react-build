import React, { Component } from "react";

export default class App extends Component {
    state = {
        count: 0,
    };

    handleAdd = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    render() {
        return (
            <div className="app-box">
                <p>
                    test-p
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </p>
                <span>{this.state.count}</span>
                <div onClick={this.handleAdd}>add</div>
            </div>
        );
    }
}
