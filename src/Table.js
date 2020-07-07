import React from 'react';
import { Button } from 'antd';
import './App.css';
import './Table.css'

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>To Do</th>
                <th>Time</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><Button onClick={() => props.removeCharacter(index)} type="primary">Delete</Button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { characterData, removeCharacter } = props;
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
}

export default Table;