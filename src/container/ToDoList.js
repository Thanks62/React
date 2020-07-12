import {connect} from 'react-redux';
import {removeToDo} from '../action/index';
import Tables from '../Tables';
const mapsStateToProps=state=>{
	const storage=window.localStorage;
	storage.setItem("list",JSON.stringify(state.data));
	return(
		state:state.data
	)
}
const mapDispatchToProps=dispatch=>{
	return{
		onRemove:id=>{
			dispatch(removeToDo(id))
		}
	}
}
const ToDoList=connect(mapsStateToProps,mapDispatchToProps)(Tables);
export default ToDoList;
