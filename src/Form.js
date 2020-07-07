import React, {Component} from 'react';
import './Form.css'
import { Form, Input, Button,Layout} from 'antd';

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

    onFormSubmit = (event) => {
		event.preventDefault();
		this.props.handleSubmit(this.state);
		this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state; 
		const {Content}=Layout;
        return (
			<center>
				<form
				onSubmit={this.onFormSubmit}>
					<Form.Item
						label="Todo"
						name="name"
						rules={[{ required: true}]}
					>
						<Input name="name" required id="name" value={name} onChange={this.handleChange} />
					</Form.Item>
					<Form.Item
						label="Time"
					>
						<Input name="job" id="job" value={job} onChange={this.handleChange}/>
					</Form.Item>
				    <Button type="primary" htmlType="submit">
				        Add
				    </Button>
				</form>
			</center>
            
        );
    }
}

export default Forms;