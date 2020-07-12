import {connect} from 'react-redux';
import Forms from '../Forms.js';
import {addToDo,editToDo} from '../action/index'
const mapStateToProps=state=>{
	const storage=window.localStorage;
	if(state.data) storage.setItem("list",JSON.stringify(state.data));
	return {	
		data:state.data,
		input_data:state.input_data
	}
}
const mapDispatchToProps=dispatch=>{
	return {
		onAdd:(text,id,time)=>{
			dispatch(addToDo(text,id,time));
		},
		onEdit:(text,id,time)=>{
			dispatch(editToDo(text,id,time));
		}
	}
}
const AddToDo =connect(mapStateToProps,mapDispatchToProps)(Forms)
export default AddToDo;