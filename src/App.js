import React, { Component } from 'react';
import Produto from "./componentes/produtos";
import {Container} from "reactstrap";

class App extends Component {
    state = {
        produtos: []
    }
    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/produtos/')
            .then(res => res.json())
            .then((data) => {
                this.setState({ produtos: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <Container>
            <Produto produtos={this.state.produtos} />
            </Container>
        )
    }
}

export default App
