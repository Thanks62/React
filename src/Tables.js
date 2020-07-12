import React from 'react';
import { Button,Table,Space } from 'antd';
import './App.css';
const { Column } = Table;

/*const Tables = (props) => {
    const { characterData, removeCharacter,editList } = props;
        return (
            <Table dataSource={characterData} >
				<Column title="To Do" dataIndex="name" key="id" />
				<Column title="Time" dataIndex="job" key="id" />
				<Column title="Operation" 
					render={(record) => (
					        <Space size="middle">
					          <Button type="text" onClick={() => editList(record.id)}>Edit</Button>
					          <Button type="text"  onClick={() => removeCharacter(record.id)}>Delete</Button>
					        </Space>
					      )}
				/>
			</Table>
        );
}*/
const Tables = ({data,onRemove}) => {
        return (
            <Table dataSource={data} >
				<Column title="To Do" dataIndex="name" key="id" />
				<Column title="Time" dataIndex="job" key="id" />
				<Column title="Operation" 
					render={(record) => (
					        <Space size="middle">
					          <Button type="text"  onClick={() => onRemove(record.id)}>Delete</Button>
					        </Space>
					      )}
				/>
			</Table>
        );
}

export default Tables;