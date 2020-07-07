import React, { Component } from 'react';
import { Row,Col, Divider,Card } from 'antd';
import './App.css';
import Table from './Table.js'
import Form from './Form';

class App extends Component {
    state = {
        characters: []
    };
    constructor(props){
        super(props);
        const storage=window.localStorage;
        for(let i=0;i<storage.length;i++){
            const item={
                name:JSON.parse(storage.getItem(storage.key(i))).name,
                job:JSON.parse(storage.getItem(storage.key(i))).job
            }
            this.state.characters.push(item);

        }
    }
    removeCharacter = (index,name) => {
        const { characters } = this.state;
        const storage=window.localStorage;
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
        storage.removeItem(name);
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
		<Row justify="center" align="middle">
			<Col>
				<Card style={{width:600}} className="Content">
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