import React from 'react';
import axios from 'axios';
import { TableContainer, Table, TableHead, TableBody, TableCell, TableRow, Paper } from '@mui/material';

// Function to create a data row for detailed table
function createData(
  from_address, to_address, hash, value, input, transaction_index, gas, gas_used,
  gas_price, transaction_fee, block_number, block_hash, block_timestamp
) {
  return {
    from_address, to_address, hash, value, input, transaction_index, gas, gas_used,
    gas_price, transaction_fee, block_number, block_hash, block_timestamp
  };
}

function DetailedDetailsTable({ rows }) {
  if (!Array.isArray(rows)) {
    return <div>No details available.</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>from_address</TableCell>
            <TableCell>to_address</TableCell>
            <TableCell>hash</TableCell>
            <TableCell>value</TableCell>
            <TableCell>input</TableCell>
            <TableCell>transaction_index</TableCell>
            <TableCell>gas</TableCell>
            <TableCell>gas_used</TableCell>
            <TableCell>gas_price</TableCell>
            <TableCell>transaction_fee</TableCell>
            <TableCell>block_number</TableCell>
            <TableCell>block_hash</TableCell>
            <TableCell>block_timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.from_address}</TableCell>
              <TableCell>{row.to_address}</TableCell>
              <TableCell>{row.hash}</TableCell>
              <TableCell>{row.value}</TableCell>
              <TableCell>{row.input}</TableCell>
              <TableCell>{row.transaction_index}</TableCell>
              <TableCell>{row.gas}</TableCell>
              <TableCell>{row.gas_used}</TableCell>
              <TableCell>{row.gas_price}</TableCell>
              <TableCell>{row.transaction_fee}</TableCell>
              <TableCell>{row.block_number}</TableCell>
              <TableCell>{row.block_hash}</TableCell>
              <TableCell>{row.block_timestamp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// Define the main function component named App
function App() {
  const [searchedAddress, setSearchedAddress] = React.useState('');
  const [addressDetails, setAddressDetails] = React.useState([]);
  const [showAlert, setShowAlert] = React.useState(false);
  const [rows, setRows] = React.useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      axios.get('http://127.0.0.1:8000/results', {
        params: { address: searchedAddress },
      })
        .then((response) => {
          if (response.data && Array.isArray(response.data.nodes)) {
            const nodes = response.data.address_id;
  
            if (nodes.length > 0) {
              const details = nodes.map((node) => {
                return createData(
                  nodes.from_address,
                  nodes.to_address,
                  nodes.hash,
                  nodes.value,
                  nodes.input,
                  nodes.transaction_index,
                  nodes.gas,
                  nodes.gas_used,
                  nodes.gas_price,
                  nodes.transaction_fee,
                  nodes.block_number,
                  nodes.block_hash,
                  nodes.block_timestamp
                );
              });
  
              setRows(details); // Set 'rows' state with all the data
              setShowAlert(true);
            } else {
              console.error('No data available for this address.');
            }
          } else {
            console.error('Data is not in the expected format.');
          }
        })
        .catch((error) => {
          console.error('Error while fetching data:', error);
        });
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchedAddress}
          onChange={(e) => setSearchedAddress(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <DetailedDetailsTable rows={rows} />
    </div>
  );
}

export default App;
