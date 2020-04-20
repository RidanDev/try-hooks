import React from 'react'

class GreetingClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Mary',
            surname: 'Poppins',
            width: window.innerWidth
        }
    }

    componentDidMount() {
        document.title = this.state.name + ' ' + this.state.surname
        window.addEventListener('resize', this.handleResize)
    }

    componentDidUpdate() {
        document.title = this.state.name + ' ' + this.state.surname
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        this.setState({
            width: window.innerWidth
        })
    }

    handleNameChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    handleSurnameChange = e => {
        this.setState({
            surname: e.target.value
        })
    }

    render() {
        return (
            <section>
                <div>Name</div>
                <input type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <div>Surname</div>
                <input type="text"
                    value={this.state.surname}
                    onChange={this.handleSurnameChange}
                />
                <div>Width</div>
                <div>{this.state.width}</div>
            </section>
        )
    }
}

export default GreetingClass