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
                <span>{this.state.count}</span>
                <div onClick={this.handleAdd}>add</div>
                <ul>
                    <li>
                        <div>1</div>
                        <div>
                            1.1 <span>1.2</span>
                        </div>
                    </li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        );
    }
}
