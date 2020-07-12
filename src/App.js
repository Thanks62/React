import React, { Component } from 'react';
import { Row,Col, Divider,Card } from 'antd';
import './App.css'
import Forms from './Forms'
import Tables from './Tables'
import { List } from 'antd/lib/form/Form';
import store from './store/index';
import {removeToDo,addToDo,init,editToDo} from './action/index';
class App extends Component{
	state={
		
	}
    constructor(props){
        super(props);
		store.dispatch(init());
		this.state.characters=store.getState();
    }
    removeCharacter = (id) => {
		let unsubscribe = store.subscribe(() =>{
			const storage=window.localStorage;
			console.log(JSON.stringify(store.getState()));
			storage.setItem("list",JSON.stringify(store.getState()));
			this.setState({
				characters:store.getState()
			})
		}
		);
		store.dispatch(removeToDo(id))
		unsubscribe();
    }
    editList = (index)=>{
        var list=this.state.characters.filter((character) => { 
            return character.id === index;
        })
		//console.log(list);
        this.form.edit(list[0].name,list[0].id,list[0].job);
    }
    onRef=(ref)=>{
        this.form=ref;
    }

    handleSubmit = (character,operation) => {
	   let unsubscribe = store.subscribe(() =>{
	   			const storage=window.localStorage;
	   			storage.setItem("list",JSON.stringify(store.getState()));
	   			this.setState({
	   				characters:store.getState()
	   			})
	   }
	   );
	   if(operation=='Edit'){
			store.dispatch(editToDo(character.id,character.name,character.job))
	   }
	   else if(operation=='Add'){
			store.dispatch(addToDo(character.name,character.id,character.job))
	   }
	   unsubscribe();
    }
    render(){
        const { characters,edit } = this.state;
        return(<Row justify="center" align="middle">
        <Col>
            <Card style={{width:600}} className="Content">
                <div className="container">
                    <h1>List</h1>
                    <p>A Todo List</p>
                    <Tables characterData={characters}
                            removeCharacter={this.removeCharacter}
                            editList={this.editList}></Tables>
                    <Divider orientation="center">Add New</Divider>
                    <Forms  handleSubmit={this.handleSubmit} onRef={this.onRef}/>
                </div>
            </Card>
        </Col>
    </Row>)
    }
}
export default App;