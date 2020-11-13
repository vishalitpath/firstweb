import React from 'react';
import "./style.css";

const TableHeader = () => {
    return (
        <thead style={{border:2}}>
            <tr>
                <th>title</th>
                <th>content</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const { tableDetails } = props;
    
    const rows = tableDetails.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.title}</td>
                <td>{row.content}</td>
            </tr>
        );
    })
    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    
    const { tableDetails } = props;
    return (

        <table>
            <TableHeader />
            <TableBody tableDetails={tableDetails} />
        </table>

    )
}

export default Table;
