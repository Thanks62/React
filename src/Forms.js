import React, {Component} from 'react';
import './Form.css'
import { Form, Input, Button} from 'antd';

/*class Forms extends Component {
	state={
		loading:false,
		btnText:'',
		btnDisable:false,
		danger:false,
		err:true
	}
    constructor(props) {
        super(props);
        this.initialState = {
			id:new Date(),
			name: '',
			job: '',
			btnText:'Add',
			err:false
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
			[name] : value
		});
		
    }
	componentDidMount(){
		this.props.onRef(this);
	}
    edit=(name,id,job)=>{
		this.setState({
			id:id,
			name:name,
			job:job,
			btnText:'Edit'
		})
	}

    render() {
		const {btnText}=this.state;
		const onFinish = () => {
			setTimeout(() => {
				this.setState({
					loading:false,
					btnDisable:false,
				})
				if(this.state.err){
					this.setState({
						loading:false,
						btnDisable:false,
						danger:true,
						btnText:'Failed',
						id:new Date(),
						name: '',
						job: '',
					})
					setTimeout(()=>{
						this.setState({
							btnText:'Add',
							danger:false
						})
					},1000)
				}
				else{
					this.props.handleSubmit(this.state,this.state.btnText);
					setTimeout(()=>{
						this.setState(this.initialState);
						this.setState({
							id:new Date()
						});
					},1000)
				}
				
			}, 2000);
            this.setState({
				loading:true,
				btnDisable:true,
				danger:false
			})
		  };
		  
        return (
			<center>
				<Form onFinish={onFinish}>
					<Input name="id" id="ID" value={this.state.id} type="hidden"/>
					<Form.Item
						label="Todo"
						rules={[{ required: true}]}
					>
						<Input name="name" required value={this.state.name} onChange={this.handleChange} />
					</Form.Item>
					<Form.Item
						label="Time"
					>
						<Input name="job" value={this.state.job} onChange={this.handleChange}/>
					</Form.Item>
				    <Button type="primary" htmlType="submit" loading={this.state.loading} disabled={this.state.btnDisable} danger={this.state.danger}>
				        {this.state.btnText}
				    </Button>
				</Form>
			</center>
            
        );
    }
}*/
class Forms extends Component{
	state={}
	constructor(props) {
	    super(props);
	    this.initialState = {
			btnText:'Add',
			err:true,
			loading:false,
			danger:false
	    };
	    this.state = this.initialState;
	}
	onFinish = () => {	
		this.setState({
			loading:true
		})
		setTimeout(()=>{
			if(this.state.err){
				this.setState({
					loading:false,
					btnText:'Failed',
					danger:true
				})
			}
			else{
				this.props.onAdd(this.todo.state.value,this.id.state.value,this.time.state.value);
				this.id.state.value=new Date();
				this.setState({
					loading:false,
					btnText:'Successfully'
				})
			}		
			setTimeout(()=>{
				this.setState({
					btnText:'Add',
					danger:false
				})
			},1000)
		},2000)
	}
	render(){
		return(
		<center>
			<Form onFinish={this.onFinish}>
				<Input name="id" id="ID" ref={(id)=>this.id=id} defaultValue={new Date().toString()} type="hidden"/>
				<Form.Item
					label="Todo"
					rules={[{ required: true}]}
				>
					<Input name="name" required ref={(todo)=>this.todo=todo}/>
				</Form.Item>
				<Form.Item
					label="Time"
				>
					<Input name="job" ref={(time)=>this.time=time}/>
				</Form.Item>
			    <Button type="primary" htmlType="submit" loading={this.state.loading} disabled={this.state.loading} danger={this.state.danger}>
			        {this.state.btnText}
			    </Button>
			</Form>
		</center>)
	}
}
export default Forms;