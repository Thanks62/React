import React, { Component } from 'react';
import { Row,Col, Divider,Card } from 'antd';
import './App.css';
import Table from './Table.js'
import Form from './Form';

class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
		<Row justify="center" align="middle">
			<Col>
				<Card style={{width:600}}>
					<div className="container">
						<h1>List</h1>
						<p>A Todo List</p>
						<Table
							characterData={characters}
							removeCharacter={this.removeCharacter}
						/>
						<Divider orientation="center">Add New</Divider>
						<Form handleSubmit={this.handleSubmit} />
					</div>
				</Card>
			</Col>
		</Row>
        );
    }
}

export default App;