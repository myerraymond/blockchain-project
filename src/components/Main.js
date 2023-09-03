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
        createData('Balance', fetchedDetails.balance),
        createData('Transactions', fetchedDetails.transactions),
        createData('Last Transaction', fetchedDetails.lastTransactionTime),
        createData('Total Received', fetchedDetails.totalReceived),
        createData('Total Sent', fetchedDetails.totalSent),
        createData('Active Since', fetchedDetails.activeSince),
        createData('Transaction ID', fetchedDetails.transactionID),
        createData('Input', fetchedDetails.input),
        createData('Output', fetchedDetails.output),
        createData('Transaction Feed', fetchedDetails.transactionFee),
        createData('Digital Signature', fetchedDetails.digitalSignature),
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
        balance: '100 BTC',
        transactions: '50',
        lastTransactionTime: '2023-08-23 10:30:00',

        transactionID: '0x4a5b3e8d9c2b1a0f6e7d8c9b2a1f0e6d',
        input: '0x1234567890abcdef',
        output: '0xabcdef1234567890',
        transactionFee: '0.001 BTC',
        digitalSignature: '3045022100...0220049D',

        totalReceived: '200 BTC',
        totalSent: '100 BTC',
        activeSince: '2017-05-15',

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
      <Container component="main" maxWidth="xs">
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
    </ThemeProvider>
  );
}

export default App; // Export the App component
