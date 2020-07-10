export const todos=(state[],action){
	switch(action.type){
		case:'ADD_TODO':return[
			...state,
			{
				id:action.id,
				name:action.text,
				job:action.time
			}
		]
		case:'REMOVE_TODO':return list=state.filter((li,id)=>{
			return id!=action.id;
		})
		default:return state;
	}
}