import { useState, Fragment } from 'react';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from '../components/listItems';

import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Generate Order Data
function createData(id, numero, asunto, prioridad, departamento, solicitante, fecha) {
    return { id, numero, asunto, prioridad, departamento, solicitante, fecha };
}

const rows = [
    //Primera tupla de datos o primer ticket
    createData(
        0,
        '#4321',
        'Asistencia con pagina web',
        'Baja •',
        'Soporte Tec',
        'Jose Bryan',
        '01/05/2023',
        312.44,
    ),
    createData(
        1,
        '#4952',
        'Mantenimiento Servidor',
        'Media ••',
        'Soporte Tec',
        'Cristian Castor',
        '04/05/2023',
        866.99,
    ),
    createData(2,
        '#6942',
        'Creacion de API',
        'Alta •••',
        'TecNM Departamento Sistemas',
        'Carlos Castorena',
        '07/05/2023',
        100.81
    ),
    createData(
        3,
        '#7284',
        'Mal funcionamiento Pagina Web',
        'Media ••',
        'TecNM Departamento Sistemas',
        'Alonso Chav',
        '12/05/2023',
        654.39,
    ),
    createData(
        4,
        '#7771',
        'Servicio de compras caido',
        'Alta •••',
        'Departamento de Compras',
        'Silvana Flores',
        '14/05/2023',
        212.79,
    ),
];

const drawerWidth = 240;

const CustomAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const CustomDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
    },
});

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <div>
            <ThemeProvider theme={mdTheme}>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <CustomAppBar position="absolute" open={open}>
                        <Toolbar
                            sx={{
                                pr: '24px', // keep right padding when drawer closed
                            }}
                        >
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={toggleDrawer}
                                sx={{
                                    marginRight: '36px',
                                    ...(open && { display: 'none' }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1 }}
                            >
                                Dashboard
                            </Typography>
                            <IconButton color="inherit">
                                <Badge badgeContent={0} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Toolbar>
                    </CustomAppBar>

                    <CustomDrawer variant="permanent" open={open}>
                        <Toolbar
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                px: [1],
                            }}
                        >
                            <IconButton onClick={toggleDrawer}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </Toolbar>
                        <Divider />
                        <List component="nav">
                            {mainListItems}
                            <Divider sx={{ my: 1 }} />
                            {secondaryListItems}
                        </List>
                    </CustomDrawer>
                    <Toolbar />
                </Box>
            </ThemeProvider>
            <Fragment>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Numero</TableCell>
                            <TableCell>Asunto</TableCell>
                            <TableCell>Prioridad</TableCell>
                            <TableCell>Departamento</TableCell>
                            <TableCell>Solicitante</TableCell>
                            <TableCell align="right">Fecha</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.numero}</TableCell>
                                <TableCell>{row.asunto}</TableCell>
                                <TableCell>{row.prioridad}</TableCell>
                                <TableCell>{row.departamento}</TableCell>
                                <TableCell>{row.solicitante}</TableCell>
                                <TableCell align="right">{`${row.fecha}`}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Link color="primary" href="#" sx={{ mt: 3 }}>
                    See more orders
                </Link>
            </Fragment>
        </div>
    );
}

export default Dashboard;