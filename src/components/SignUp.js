import * as React from 'react';
import * as d3 from 'd3';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
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
import './styles.css';
import ResponsiveAppBar from './SearchBar';


function NodeGraph({ details }) {
    const graphRef = React.useRef(null);

    React.useEffect(() => {
        if (details.length > 0) {
            const width = 800;
            const height = 500;
            
            const svg = d3.select(graphRef.current)
                .attr('width', width)
                .attr('height', height);

            // Create a simulation
            const simulation = d3.forceSimulation(details)
                .force('center', d3.forceCenter(width / 2, height / 2))
                .force('charge', d3.forceManyBody().strength(-30))
                .force('link', d3.forceLink([]).id(d => d.key));

            // Create links between nodes (none in this example)
            const links = [];

            const link = svg.selectAll('.link')
                .data(links)
                .enter()
                .append('line')
                .attr('class', 'link')
                .style('stroke', '#999')
                .style('stroke-width', '2px');

            // Create nodes (circles) for each detail
            const nodes = svg.selectAll('.node')
                .data(details)
                .enter()
                .append('circle')
                .attr('class', 'node')
                .attr('r', 20)
                .style('fill', 'url(#gradient)')
                .style('filter', 'url(#drop-shadow)') // Apply drop shadow for depth
                .call(d3.drag()
                    .on('start', dragStarted)
                    .on('drag', dragged)
                    .on('end', dragEnded));

            function dragStarted(event, d) {
                if (!event.active) simulation.alphaTarget(0.2).restart();
                d.fx = d.x;
                d.fy = d.y;
            }

            function dragged(event, d) {
                d.fx = event.x;
                d.fy = event.y;
            }

            function dragEnded(event, d) {
                if (!event.active) simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            }

            simulation.on('tick', () => {
                nodes
                    .attr('cx', d => d.x)
                    .attr('cy', d => d.y);
            });
        }
    }, [details]);

    return (
        <svg
            ref={graphRef}
            className="node-graph"
        >
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: 'blue', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'purple', stopOpacity: 1 }} />
                </linearGradient>
                <filter id="drop-shadow" x="-20%" y="-20%" width="150%" height="150%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
                    <feOffset in="blur" dx="4" dy="4" result="offsetBlur" />
                    <feMerge>
                        <feMergeNode in="offsetBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
        </svg>
    );
}


function createData(key, value) {
    return { key, value };
}

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                Blockchain Data Analysis
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme({
    palette: {
        background: {
            default: 'white',
        },
        primary: {
            main: '#29335c', // Change the primary color
        },
        secondary: {
            main: '#db2b39', // Change the secondary color
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif', // Change the default font
    },
});

function DetailsTable({ details }) {
    return (
        <TableContainer>
            <Table aria-label="Details Table">
                <TableBody>
                    {details.map((row) => (
                        <TableRow key={row.key}>
                            <TableCell>{row.key}</TableCell>
                            <TableCell>{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default function SignUp() {
    const activeTab = 'ABOUT'; // Change this based on your active tab logic

    const [searchedAddress, setSearchedAddress] = React.useState('');
    const [addressDetails, setAddressDetails] = React.useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const address = data.get('wallet');

        // Simulate fetching address details from an API/database
        const fetchedDetails = await fetchAddressDetails(address);

        if (fetchedDetails) {
            const details = [
                createData('Address', fetchedDetails.address),
                createData('Balance', fetchedDetails.balance),
                createData('Transactions', fetchedDetails.transactions),
                createData('Last Transaction', fetchedDetails.lastTransactionTime),
            ];

            setSearchedAddress(address);
            setAddressDetails(details);
        } else {
            setSearchedAddress('');
            setAddressDetails([]);
        }
    };

    // Simulate fetching address details
    async function fetchAddressDetails(address) {
        // Replace this with your actual API/database call
        // You can use fetch or axios to fetch data from an API
        try {
            // Example response structure
            return {
                address: address,
                balance: '100 BTC',
                transactions: '50',
                lastTransactionTime: '2023-08-23 10:30:00', // Replace with actual timestamp
                // Add more details here
            };
        } catch (error) {
            console.error('Error fetching address details:', error);
            return null;
        }
    }


    // Simulate fetching address details
    async function fetchAddressDetails(address) {
        // Replace this with your actual API/database call
        // You can use fetch or axios to fetch data from an API
        try {
            // Example response structure
            return {
                address: address,
                balance: '100 BTC',
                transactions: '50',
                lastTransactionTime: '2023-08-23 10:30:00', // Replace with actual timestamp
                // Add more details here
            };
        } catch (error) {
            console.error('Error fetching address details:', error);
            return null;
        }
    };


    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <ResponsiveAppBar />
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
                            <Grid item xs={12}> {/* Change s to xs */}
                                <TextField
                                    fullWidth
                                    id="wallet"
                                    label="Wallet Address..."
                                    name="wallet"
                                    autoComplete="wallet"
                                />
                                {addressDetails.length > 0 && (
                                    <DetailsTable details={addressDetails} />
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
                            <NodeGraph details={addressDetails} />
                        )}
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
