import React, {Component} from 'react';
import './Form.css'
import { Form, Input, Button} from 'antd';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
		});
		
    }

    

    render() {
		const onFinish = () => {
			//event.preventDefault();
			const storage=window.localStorage;
			storage.setItem(this.state.name,JSON.stringify(this.state));
			this.props.handleSubmit(this.state);
			this.setState(this.initialState);		
		  };
        return (
			<center>
				<Form onFinish={onFinish}>
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
				    <Button type="primary" htmlType="submit">
				        Add
				    </Button>
				</Form>
			</center>
            
        );
    }
}

export default Forms;