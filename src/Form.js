import React, {Component} from 'react';
import './Form.css'
import { Form, Input, Button } from 'antd';

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
		const layout = {
		  labelCol: {
		    span: 8,
		  },
		  wrapperCol: {
		    span: 16,
		  },
		};
        return (
            <form {...layout} onSubmit={this.onFormSubmit}>
                <label for="name">ToDo</label>
                <Input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} required
                    onChange={this.handleChange} />
                <label for="job">Time</label>
                <Input 
                    type="text" 
                    name="job" 
                    id="job"
                    value={job} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Add
                </button>
            </form>
        );
    }
}

export default Forms;