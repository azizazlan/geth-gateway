import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Grid } from '@mui/material';
import CPU from './CPU';
import DiskUsages from './DiskUsages';
import Memory from './Memory';

function createData(name: string, hostName: string, ip: string, port: number) {
  return {
    name,
    hostName,
    ip,
    port,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.hostName}</TableCell>
        <TableCell align="center">{row.ip}</TableCell>
        <TableCell align="center">{row.port}</TableCell>
        <TableCell align="right">...</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid
                container
                spacing={{ xs: 1, md: 1 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={2} sm={4} md={4} key="CPU">
                  <CPU />
                </Grid>
                <Grid item xs={2} sm={4} md={4} key="Memory">
                  <Memory />
                </Grid>
                <Grid item xs={2} sm={4} md={4} key="Disk">
                  <DiskUsages />
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const rows = [
  createData('Node 1', 'BPI-BC1', '10.20.29.21', 30310),
  createData('Node 2', 'BPI-BC2', '10.22.27.20', 30310),
  createData('Node 3', 'BPI-BC3', '109.10.102.112', 30310),
  createData('Node 4', 'BPI-BC4', '110.11.19.11', 30310),
  createData('Node 5', 'BPI-BC5', '129/107.67.101', 30310),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  color: 'grey',
                }}
              >
                Node
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  color: 'grey',
                }}
              >
                Hostname
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  color: 'grey',
                }}
              >
                IP
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  color: 'grey',
                }}
              >
                Port
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  color: 'grey',
                }}
              >
                Enode
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
