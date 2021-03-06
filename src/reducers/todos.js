import {ADD_TODO,REMOVE_TODO,DEFAULT,EDIT_TODO,INPUT_DATA} from'../action/index.js';
var initState={};
function init(){
	if (window.localStorage){
        const storage=window.localStorage;
        let list=storage.getItem("list");
        initState=JSON.parse(list)?{
			data:JSON.parse(list),
			input_data:{
				id:new Date().toString(),
				name:'',
				job:''
			}
			}:{
				data:[],
				input_data:{}
			};
	}
}
init();
export default function(state=initState,action){
	switch(action.type){
		case ADD_TODO:return{
			data:[
				...state.data,
				{
					id:action.data.id,
					name:action.data.text,
					job:action.data.time
				}
			]
		} 
		case REMOVE_TODO:
		let list=[];
		return{
			data:list=state.data.filter((li)=>{
				return li.id!==action.id;
			} 
		)}
		case EDIT_TODO:
		let edit=[];
			return edit=state.data.map((li)=>{
				if(li.id===action.data.id){
					li.name=action.data.text;
					li.job=action.data.time;
				}
			return li;
		})
		case INPUT_DATA:
		return {
			data:state.data,
			input_data:{
			id:action.data.id,
			name:action.data.text,
			job:action.data.time
		}}
		case DEFAULT:
		default:return state;
	}
}