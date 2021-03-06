import {connect} from 'react-redux';
import {removeToDo,inputData} from '../action/index';
import Tables from '../Tables';
const mapsStateToProps=state=>{
	const storage=window.localStorage;
	if(state.data) storage.setItem("list",JSON.stringify(state.data));
	return{	
		data:state.data,
		input_data:state.input_data
	}
}
const mapDispatchToProps=dispatch=>{
	return{
		onRemove:id=>{
			dispatch(removeToDo(id))
		},
		onEditClick:(id,text,time)=>{
			dispatch(inputData(id,text,time))
		}
	}
}
const ToDoList=connect(mapsStateToProps,mapDispatchToProps)(Tables);
export default ToDoList;
