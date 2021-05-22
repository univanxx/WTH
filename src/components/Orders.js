import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name) {
  return { id, date, name};
}

const rows = [
  createData(0, '16 Mar, 2019', 'Нефинансовы меры поддержки'),
 ];

function preventDefault(event) {
  event.preventDefault();
}


export default function Orders() {
  
  return (
    <React.Fragment>
      <Title>Ранее предоставленные меры поддержки</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Дата</TableCell>
            <TableCell>Название</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
