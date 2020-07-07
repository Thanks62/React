import React, { Component } from 'react';
import { Row,Col, Divider,Card } from 'antd';
import './App.css';
import Table from './Table.js'
import Form from './Form';

class App extends Component {
    state = {
        characters: [],
        edit:[]
    };
    constructor(props){
        super(props);
        this.init();
    }
    init=()=>{
        const storage=window.localStorage;
        for(let i=0;i<storage.length;i++){
            console.log(storage.key(i));
            const item={
                id:storage.key(i),
                name:JSON.parse(storage.getItem(storage.key(i))).name,
                job:JSON.parse(storage.getItem(storage.key(i))).job
            }
            this.state.characters.push(item);
        }
    }
    removeCharacter = (index,id) => {
        const { characters } = this.state;
        const storage=window.localStorage;
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
        storage.removeItem(id);
    }

    editList = (index)=>{
        var list=this.state.characters.filter((character, i) => { 
            return i === index;
        })
        //console.log(list[0]);
        //this.Form.edit(list.name,list.id,list.job)
        /*this.setState({
            edit:[{
                id:list[0].id,
                name:list[0].name,
                job:list[0].job
            }]
        });*/
        this.state.edit=[{
            id:list[0].id,
            name:list[0].name,
            job:list[0].job
        }];
        console.log(this.state.edit);
        this.form.edit(list[0].name,list[0].id,list[0].job);
    }
    onRef=(ref)=>{
        this.form=ref;
    }

    handleSubmit = (character) => {
       // this.setState({characters: [...this.state.characters, character]});
       this.init();
    }

    render() {
        const { characters,edit } = this.state;
        
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
                            editList={this.editList}
						/>
						<Divider orientation="center">Add New</Divider>
						<Form handleSubmit={this.handleSubmit} onRef={this.onRef}/>
					</div>
				</Card>
			</Col>
		</Row>
        );
    }
}

export default App;