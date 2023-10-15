import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Alert from '@mui/material/Alert';
import './footer.css';
import axios from "axios";
import StickyHeadTable from './stickyheader';
// import '../App.js';
// import './main.py';

// Function to create a data row for detailed table
function createData(key, value) {
  return { key, value };
}

// Define the main function of the component named DetailedDetailsTable
function DetailedDetailsTable({ details }) {
  console.log('Details Table:', details);

  if (!Array.isArray(details)) {
    return <div>No details available.</div>;
  }

  return (
    <TableContainer>
      Data being displayed are from the searched Wallet Address:
      <Table aria-label="Detailed Details Table">
        <TableBody>
          {details.map((row) => (
            <TableRow key={row.key}>
              <TableCell><strong>{row.key}</strong></TableCell>
              <TableCell>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


// Create a default theme
const defaultTheme = createTheme({
  palette: {
    background: {
      default: 'white',
    },
    primary: {
      main: '#29335c',
    },
    secondary: {
      main: '#db2b39',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

// Define the main function component named App
function App() {
  // Define state variables for the searched address, address details, and alert visibility
  const [searchedAddress, setSearchedAddress] = React.useState('');
  const [addressDetails, setAddressDetails] = React.useState([]);
  const [showAlert, setShowAlert] = React.useState(false);


  // const [data, setData] = useState([]);


  // const handleButtonClick = () => {
  //   axios.get('http://127.0.0.1:8000/results', {
  //     params: { address: searchedAddress },
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       if (response.data && response.data.nodes) {
  //         console.log(response.data.nodes);

  //         const fetchedDetails = response.data.nodes;

  //         // You can map over fetchedDetails and create data for each node here
  //         const addressDetails = fetchedDetails.map((node) => {
  //           return createData('Address ID', node.address_id);
  //         });

  //         setAddressDetails(addressDetails);
  //         setSearchedAddress(searchedAddress);
  //         setShowAlert(true);
  //       } else {
  //         console.error('Data is not in the expected format.');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error while fetching data:', error);
  //     });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      axios.get('http://127.0.0.1:8000/results', {
        params: { address: searchedAddress },
      })
        .then((response) => {
          console.log(response);
          if (response.data && Array.isArray(response.data.nodes)) {
            console.log(response.data.nodes);

            // Assuming that response.data.nodes is an array
            if (response.data.nodes.length > 0) {
              const fetchedDetails = response.data.nodes[0].address_id;

              const details = [
                createData('Hash', fetchedDetails.hash),
                createData('Value', fetchedDetails.value),
                createData('Input', fetchedDetails.input),
                createData('Transaction Index', fetchedDetails.transaction_index),
                createData('Gas', fetchedDetails.gas),
                createData('Gas Used', fetchedDetails.gas_used),
                createData('Gas Price', fetchedDetails.gas_price),
                createData('Transaction Fee', fetchedDetails.transaction_fee),
                createData('Block Number', fetchedDetails.block_number),
                createData('Block Hash', fetchedDetails.block_hash),
                createData('Block Timestamp', fetchedDetails.block_timestamp),
              ];

              setAddressDetails(details);
              setSearchedAddress(searchedAddress);
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
  };













  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     axios.get('http://127.0.0.1:8000/results', {
  //       params: { address: searchedAddress },
  //     })
  //       .then((response) => {
  //         console.log(response)
  //         if (response.data && Array.isArray(response.data.nodes)) {
  //           console.log(response.data.nodes);


  //             // const fetchedDetails = response.data.nodes;
  //             // Get the values from the JSON file
  //             const fetchedDetails = response.data.nodes; // Assuming you want the first item in the array

  //             console.log(fetchedDetails);

  //             setAddressDetails([
  //             // createData('Address', fetchedDetails.address),
  //               createData('Hash', fetchedDetails.hash),
  //               createData('Value', fetchedDetails.value),
  //               createData('Input', fetchedDetails.input),
  //               createData('Transaction Index', fetchedDetails.transaction_index),
  //               createData('Gas', fetchedDetails.gas),
  //               createData('Gas Used', fetchedDetails.gas_used),
  //               createData('Gas Price', fetchedDetails.gas_price),
  //               createData('Transaction Fee', fetchedDetails.transaction_fee),
  //               createData('Block Number', fetchedDetails.block_number),
  //               createData('Block Hash', fetchedDetails.block_hash),
  //               createData('Block Timestamp', fetchedDetails.block_timestamp),
  //             ]);
  //           setSearchedAddress(searchedAddress);
  //           setShowAlert(true);
  //         } else {
  //           console.error('Data is not in the expected format.');
  //         }
  //       })
  //       .catch((error) => {
  //         console.error('Error while fetching data:', error);
  //       });
  //   } catch (error) {
  //     console.error('An error occurred:', error);
  //   }
  // };













  // // simulated function to fetch address details (replace with actual API eventually)
  // async function fetchAddressDetails(address) {
  //   try {
  //     // Return sample address details (will be replaced API logic)
  //     return {
  //       address: address,
  //       hash: '0xf3a14bfddc65725b4a345e0bafa84afd328de1b9487339157a0f24c9085b66f2',
  //       value: '31404516258391700000',
  //       input: '0x',
  //       transaction_index: '78',
  //       gas: '2100',
  //       gas_used: '2100',
  //       gas_price: '11119629262',
  //       transaction_fee: '233512214502000',
  //       block_number: '15881178',
  //       block_hash: '0x1fa4a14c221824759e748d37a91988d6a50bdce5d47bc729b6b3de3dbc6d8fa0',
  //       block_timestamp: '1667378123',
  //     };
  //   } catch (error) {
  //     console.error('Error fetching address details:', error);
  //     return null;
  //   }
  // };


  // Render the main application content
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container component="main" maxWidth="lg">
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <CurrencyBitcoinIcon
              sx={{
                color: 'white',
                backgroundColor: '#29335c',
                fontSize: '48px',
                padding: '10px',
                borderColor: '#29335c',
              }}
            />
          </Avatar>
          <Typography component="h1" variant="h5">
            Blockchain Data Analysis
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="wallet"
                  label="Wallet Address..."
                  name="wallet"
                  autoComplete="wallet"
                  value={searchedAddress}
                  onChange={(e) => setSearchedAddress(e.target.value)}
                />
                {showAlert && (
                  <Alert variant="filled" severity="success" sx={{ mt: 1 }}>
                    Wallet address found!
                  </Alert>
                )}
                {addressDetails.length > 0 && (
                  <DetailedDetailsTable details={addressDetails} />
                )}

              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Search
            </Button>

            {addressDetails.length > 0 && (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Show more transactions!!!
              </Button>)}

          </Box>
        </Box>
      </Container>
      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Team 1. All Rights Reserved. Property of Myer, Yasindu and Rajashi.</p>
          </div>
        </div>
      </footer>

    </ThemeProvider>

  );
}

export default App; // Export the App component
