import {ADD_TODO,REMOVE_TODO,DEFAULT,EDIT_TODO} from'../action/index.js';
var initState=[];
function init(){
	if (window.localStorage){
        const storage=window.localStorage;
        let list=storage.getItem("list");
        initState=JSON.parse(list)?JSON.parse(list):[];
	}
}
init();
export default function(state=initState,action){
	switch(action.type){
		case ADD_TODO:return[
			...state,
			{
				id:action.data.id,
				name:action.data.text,
				job:action.data.time
			}
		]
		case REMOVE_TODO:
		let list=[];
			return list=state.filter((li)=>{
			return li.id!==action.id;
		})
		case EDIT_TODO:
		let edit=[];
			return edit=state.map((li)=>{
				if(li.id===action.data.id){
					li.name=action.data.text;
					li.job=action.data.time;
				}
			return li;
		})
		case DEFAULT:
		default:return state;
	}
}