export const addToDo=(text,id,time)=>{
	type:'ADD_TODO',
	id,
	text,
	time
}
export const removeToDo=id=>{
	type:'REMOVE_TODO',
	id
}