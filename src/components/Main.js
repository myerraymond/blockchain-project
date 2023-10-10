import React from 'react';
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
import NodeGraph from './NodeGraph.js';
import './footer.css';

// Function to create a data row for detailed table
function createData(key, value) {
  return { key, value };
}

// Define the main function of the component named DetailedDetailsTable
function DetailedDetailsTable({ details }) {
  return (
    <TableContainer>
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

  // Fucntion to handle form submission when searching for an address
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const address = data.get('wallet');

    // Simulate fetching address details (will be replaced with actual API)
    const fetchedDetails = await fetchAddressDetails(address);

    if (fetchedDetails) {
      // Create an array of details using the createData function
      const details = [
        createData('Address', fetchedDetails.address),
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

      // Set state variables to display address details and show success alert
      setSearchedAddress(address);
      setAddressDetails(details);
      setShowAlert(true);
    } else {
      // Clear state variables and hide the alert in case of an error or no data found
      setSearchedAddress('');
      setAddressDetails([]);
      setShowAlert(false);
    }
  };

  // simulated function to fetch address details (replace with actual API eventually)
  async function fetchAddressDetails(address) {
    try {
      // Return sample address details (will be replaced API logic)
      return {
        address: address,
        hash: '0xf3a14bfddc65725b4a345e0bafa84afd328de1b9487339157a0f24c9085b66f2',
        value: '31404516258391700000',
        input: '0x',
        transaction_index: '78',
        gas: '2100',
        gas_used: '2100',
        gas_price: '11119629262',
        transaction_fee: '233512214502000',
        block_number: '15881178',
        block_hash: '0x1fa4a14c221824759e748d37a91988d6a50bdce5d47bc729b6b3de3dbc6d8fa0',
        block_timestamp: '1667378123',
      };
    } catch (error) {
      console.error('Error fetching address details:', error);
      return null;
    }
  };

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
                />
                {showAlert && ( // Show the alert when showAlert is true
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
          </Box>

          {addressDetails.length > 0 && (
            <NodeGraph details={addressDetails} />
          )}

          
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
