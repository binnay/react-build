import React, { Component } from "react";

export default class App extends Component {
    state = {
        count: 0,
    };

    handleAdd = () => {
        this.setState(
            {
                count: this.state.count + 1,
            },
            () => {
                console.log(123);
            }
        );
    };

    render() {
        return (
            <div className="app-box">
                <p>test-p</p>
                <span title={`内容：${this.state.count}`}>
                    {this.state.count}
                </span>
                <button onClick={this.handleAdd}>add</button>
            </div>
        );
    }
}
