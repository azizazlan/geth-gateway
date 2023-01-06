import { Typography } from '@mui/material';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './styles';

function createData(
  nodes: string,
  column1: number,
  column2: number,
  column3: number
) {
  return { nodes, column1, column2, column3 };
}

const rows = [
  createData('node 1', 0, 0, 0),
  createData('node 2', 0, 0, 0),
  createData('node 3', 0, 0, 0),
  createData('node 4', 0, 0, 0),
  createData('node 5', 0, 0, 0),
];

export default function Nodes() {
  return (
    <>
      <div>
        <Typography variant="h6" style={styles.tableHeader}>
          Table of Nodes
        </Typography>
      </div>
      <div style={styles.tableDiv}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nodes</TableCell>
                <TableCell align="right">Column 1</TableCell>
                <TableCell align="right">Column 2</TableCell>
                <TableCell align="right">Column 3</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.nodes}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.nodes}
                  </TableCell>
                  <TableCell align="right">{row.column1}</TableCell>
                  <TableCell align="right">{row.column2}</TableCell>
                  <TableCell align="right">{row.column3}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
