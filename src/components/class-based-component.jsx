import { Component } from "react";

class ClassBasedComponent extends Component {
    state = {
        showText: false,
        changeColor: true,
        count: 0,
        changeCountStyle: false
    }

    handleCount = () => {
        this.setState({
            ...this.state,
            count: this.state.count + 1
        })
    }

    handleClick = () => {
        console.log("Button Clicked");

        const { showText, changeColor } = this.state

        this.setState({
            showText: !showText,
            changeColor: !changeColor
        })

    }

    componentDidMount() {
        console.log("this will load for the first time.");

        this.setState({
            showText: !this.state.showText,
            changeColor: !this.state.changeColor
        })
    }

    componentDidUpdate(previousProps, previousState) {
        console.log(previousState, this.state);

        if (previousState && previousState.count !== this.state.count && this.state.count === 10) {
            this.setState({
                ...this.state,
                changeCountStyle: !this.state.changeCountStyle
            })
        }
    }

    componentWillUnmount() { }

    render() {
        const { showText, changeColor, count, changeCountStyle } = this.state

        console.log(changeCountStyle);


        // console.log(this.state);

        return (
            <div>
                {
                    showText ? (<h3 style={{ color: changeColor ? "red" : "black" }}>Class based component</h3>) : null
                }

                <button onClick={this.handleClick}>Toggle Text</button>
                <button onClick={this.handleCount}>Increase Count Value</button>
                <h3 style={{ color: changeCountStyle ? "blue" : "black", fontSize: changeCountStyle ? "30px" : "50px" }}>Count is {count}</h3>
            </div>
        );
    }
}

export default ClassBasedComponent