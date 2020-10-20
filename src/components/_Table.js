import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, CardMedia } from '@material-ui/core';

const headTable = ['Category Image', 'Category 1', 'Category 2', 'Category 3', 'Category 4'];
const dataTable = [
  [1, 2, 3, 4],
  [11, 12, 13, 14],
  [21, 22, 23, 24],
];

export default function TableMaker() {
  // Head
  const heads = [];
  for (const head of headTable) {
    heads.push(
      <TableCell align="center" key={head}>
        {head}
      </TableCell>
    );
  }

  // Body
  const rows = [];
  for (const row in dataTable) {
    const cells = [];
    // Adding Image
    cells.push(
      <TableCell key={0}>
        <img src="/logo192.png" alt="smth" width="80"></img>
      </TableCell>
    );
    for (const cell of dataTable[row]) {
      cells.push(
        <TableCell align="center" key={cell}>
          {cell}
        </TableCell>
      );
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
