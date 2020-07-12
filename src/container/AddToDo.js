import {connect} from 'react-redux';
import Forms from '../Forms.js';
import {addToDo,editToDo} from '../action/index'
const mapStateToProps=state=>{
	console.log(state);
	const storage=window.localStorage;
	storage.setItem("list",JSON.stringify(state.data));
	return {	
		state:state.data
	}
}
const mapDispatchToProps=dispatch=>{
	return {
		onAdd:(text,id,time)=>{
			dispatch(addToDo(text,id,time));
		}
	}
}
const AddToDo =connect(mapStateToProps,mapDispatchToProps)(Forms)
export default AddToDo;