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
import { Chip } from '@mui/material';
import StoragePieChart from '../../components/Chart/StoragePieChart';
import CpuWidget from '../../components/Widget/CpuWidget';
import MemoryWidget from '../../components/Widget/MemoryWidget';

type NodeStatus = 'RUNNING' | 'STOP';

function createData(
  name: string,
  status: NodeStatus,
  hostName: string,
  ip: string,
  port: number,
  type: string
) {
  return {
    name,
    status,
    hostName,
    ip,
    port,
    type,
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
        <TableCell align="left">
          {row.status === 'RUNNING' ? (
            <Chip
              size="small"
              label="Running"
              sx={{ backgroundColor: '#b8e994' }}
            />
          ) : (
            <Chip
              size="small"
              label="Stop"
              sx={{ backgroundColor: '#ff7979', color: 'white' }}
            />
          )}
        </TableCell>
        <TableCell align="left">{row.hostName}</TableCell>
        <TableCell align="left">{row.ip}</TableCell>
        <TableCell align="left">{row.port}</TableCell>
        <TableCell align="left">{row.type}</TableCell>
        <TableCell align="left">...</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              sx={{
                marginLeft: 0,
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <StoragePieChart />
              <CpuWidget />
              <MemoryWidget />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const rows = [
  createData(
    'Node 1',
    'RUNNING',
    'BPI-BC1',
    '10.20.29.21',
    30310,
    'geth 1.10.26-stable'
  ),
  createData(
    'Node 2',
    'STOP',
    'BPI-BC2',
    '10.22.27.20',
    30310,
    'geth 1.10.26-stable'
  ),
  createData(
    'Node 3',
    'RUNNING',
    'BPI-BC3',
    '109.10.102.112',
    30310,
    'geth 1.10.26-stable'
  ),
  createData(
    'Node 4',
    'RUNNING',
    'BPI-BC4',
    '110.11.19.11',
    30310,
    'geth 1.10.26-stable'
  ),
  createData(
    'Node 5',
    'RUNNING',
    'BPI-BC5',
    '129/107.67.101',
    30310,
    'geth 1.10.26-stable'
  ),
];

export default function CollapsibleTable() {
  const networkId = '2000';
  return (
    <div>
      <Typography variant="h5">Network ID: {networkId}</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>
                <Typography
                  sx={{
                    fontFamily: 'Oswald',
                    fontSize: 14,
                    color: 'grey',
                  }}
                >
                  Node
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  sx={{
                    fontFamily: 'Oswald',
                    fontSize: 14,
                    color: 'grey',
                  }}
                >
                  Status
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography
                  sx={{
                    fontFamily: 'Oswald',
                    fontSize: 14,
                    color: 'grey',
                  }}
                >
                  Hostname
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography
                  sx={{
                    fontFamily: 'Oswald',
                    fontSize: 14,
                    color: 'grey',
                  }}
                >
                  IP
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography
                  sx={{
                    fontFamily: 'Oswald',
                    fontSize: 14,
                    color: 'grey',
                  }}
                >
                  Port
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography
                  sx={{
                    fontFamily: 'Oswald',
                    fontSize: 14,
                    color: 'grey',
                  }}
                >
                  Type
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography
                  sx={{
                    fontFamily: 'Oswald',
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
    </div>
  );
}
