import React from "react";
// import Radium from "radium";
import './Car.css'


class Car extends React.Component {

    componentWillReceiveProps(nextProps) {
        console.log('Car componentWillReceiveProps', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Car shouldComponentUpdate', nextProps)
        return nextProps.name.trim() !== this.props.name.trim()
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Car componentWillUpdate', nextState)
    }

    componentDidUpdate() {
        console.log('Car componentDidUpdate')
    }


    render() {
        console.log('Car render')
        const inputClasses = ['input']

        if (this.props.name !== '') {
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }

        if (this.props.name.length > 4) {
            inputClasses.push('bold')
        }

        const style = {
            border: '1px solid #ccc',
            boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
            ':hover': {
                border: '1px solid #aaa',
                boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
                cursor: 'pointer',
            },
        }

        return (
            <div className="Car" style={style}>
                <h3>Car name: {this.props.name}</h3>
                <p>YEAR: <strong>{this.props.year}</strong></p>
                <input
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

export default Car