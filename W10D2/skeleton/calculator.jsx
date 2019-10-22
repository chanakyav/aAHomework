import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: "",
            num1: "",
            num2: "",
            value: ""
        }
        this.setNum1 = this.setNum1.bind(this);
        this.setNum2 = this.setNum2.bind(this);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.multiply = this.multiply.bind(this);
        this.divide = this.divide.bind(this);
        this.clearContents = this.clearContents.bind(this);
    }

    setNum1(event) {
        let inp = event.currentTarget.value;   // inp = isNaN(+inp) ? 0 : +inp;
        if (isNaN(+inp)) inp = '0';            // inp = (inp > '0' && inp < '9') ? +inp : 0;
        this.setState({num1: +inp});
    }

    setNum2(event) {
        let inp = event.currentTarget.value;  
        if (isNaN(+inp)) inp = '0';
        this.setState({num2: +inp});
    }

    add(event) {
        this.setState({
            result: this.state.num1 + this.state.num2,
            value: event.currentTarget.value
        })
    }
    subtract(event) {
        this.setState({
            result: this.state.num1 - this.state.num2,
            value: event.currentTarget.value
        })
    }
    multiply(event) {
        this.setState({
            result: this.state.num1 * this.state.num2,
            value: event.currentTarget.value
        })
    }
    divide(event) {
        this.setState({
            result: this.state.num1 / this.state.num2,
            value: event.currentTarget.value
        })
    }

    clearContents() {
        this.setState({num1: "", num2: "", value: "", result: ""})
    }

    render() {
        return (
            <div>
                <h1 > {this.state.num1} {this.state.value} {this.state.num2} = {this.state.result}</h1>
                <label> <strong>Num1</strong></label> <br/>
                <input type="text" onChange={this.setNum1} value={this.state.num1} /> <br/>
                <label> <strong>Num2</strong></label> <br/>
                <input type="text" onChange={this.setNum2} value={this.state.num2} />
                <br/>
                <button onClick={this.add} value="+">+</button>
                <button onClick={this.subtract} value="-">-</button>
                <button onClick={this.multiply} value="*">*</button>
                <button onClick={this.divide} value="/">/</button>
                <button onClick={this.clearContents}>Clear</button> 
            </div>
        );
    }
}

export default Calculator;