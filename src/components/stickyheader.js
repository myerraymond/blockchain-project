import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import './styles.css';


const columns = [
    { id: 'from_address', label: 'From Address', minWidth: 170 },
    { id: 'to_address', label: 'To Address', minWidth: 170 },
    { id: 'hash', label: 'Hash', minWidth: 170 },
    { id: 'value', label: 'Value', minWidth: 170 },
    { id: 'input', label: 'Input', minWidth: 170 },
    { id: 'transaction_index', label: 'Transaction Index', minWidth: 170 },
    { id: 'gas', label: 'Gas', minWidth: 170 },
    { id: 'gas_used', label: 'Gas Used', minWidth: 170 },
    { id: 'gas_price', label: 'Gas Price', minWidth: 170 },
    { id: 'transaction_fee', label: 'Transaction Fee', minWidth: 170 },
    { id: 'block_number', label: 'Block Number', minWidth: 170 },
    { id: 'block_hash', label: 'Block Hash', minWidth: 170 },
    { id: 'block_timestamp', label: 'Block Timestamp', minWidth: 170 },
];


const rows = [
    {
        from_address: '0x8d08aad4b2bac2bb761ac4781cf62468c9ec47b4',
        to_address: '0xb0606f433496bf66338b8ad6b6d51fc4d84a44cd',
        hash: '0xf3a14bfddc65725b4a345e0bafa84afd328de1b9487339157a0f24c9085b66f2',
        value: '31404516258391761125',
        input: '0x',
        transaction_index: '78',
        gas: '21000',
        gas_used: '21000',
        gas_price: '11119629262',
        transaction_fee: '233512214502000',
        block_number: '15881178',
        block_hash: '0x1fa4a14c221824759e748d37a91988d6a50bdce5d47bc729b6b3de3dbc6d8fa0',
        block_timestamp: '1667378123',
      },

      {
        from_address: '0xaBcDef1234567890aBcDef1234567890aBcDef12',
        to_address: '0x1234567890aBcDef1234567890aBcDef12345678',
        hash: '0x2a1b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3',
        value: '1000000000000000000',
        input: '0x1234567890',
        transaction_index: '100',
        gas: '30000',
        gas_used: '30000',
        gas_price: '10000000000',
        transaction_fee: '300000000000000000000',
        block_number: '15881179',
        block_hash: '0x1fa4a14c221824759e748d37a91988d6a50bdce5d47bc729b6b3de3dbc6d8fa1',
        block_timestamp: '1667378124',
        },        
];

function StickyHeadTable({details}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className="tableContainer">
      <TableContainer >
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className="tableHeadCell"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default StickyHeadTable;