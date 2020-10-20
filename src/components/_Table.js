import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

const headTable = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
const dataTable = [
  [1, 2, 3, 4, 5],
  [11, 12, 13, 14, 15],
  [21, 22, 23, 24, 25],
];

export default function TableMaker() {
  const heads = [];
  for (const head of headTable) {
    heads.push(<TableCell key={head}>{head}</TableCell>);
  }

  const rows = [];
  for (const row in dataTable) {
    const cells = [];
    for (const cell of dataTable[row]) {
      cells.push(<TableCell key={cell}>{cell}</TableCell>);
    }

    rows.push(<TableRow key={row}>{cells}</TableRow>);
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>{heads}</TableRow>
        </TableHead>

        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
}
