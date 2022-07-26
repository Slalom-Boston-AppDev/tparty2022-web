import React from 'react';
// import { makeStyles } from '@mui/core/styles';
import AppBar from '@mui/material/AppBar';
import { ThemeProvider } from '@mui/styles';
import { makeStyles } from '@material-ui/core';
import Toolbar from '@mui/material/Toolbar';
// import { Box, Button, Container } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { createTheme } from '@mui/material';


const theme = createTheme({
    typography: {
      tab: {
        fontSize: 20,
      },
    },
    palette: {
      common: {
        purple: 'purple',
      },
    },
})

const useStyles = (theme) => ({
    navlinks: {
        marginLeft: theme.spacing(10),
        display:"flex",
    },
    title: {
      flexGrow: 1,
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
});

const ScreenAppBar = () => {
    const styles = useStyles();
    // const pages = ["Home", "Privacy Policy"];
    return (
        <ThemeProvider theme={theme}>
        <AppBar color={"primary"} position={'static'} className={styles.appbar}>
            <CssBaseline />
            <Container maxWidth='xl'>
            <Toolbar disableGutters>
                {/* <Box sx={{ flexGrow:1, display: {xs:'none', md:'flex'}, alignItems:'center', justifyContent:'center'}}>
                {pages.map((page) => (
                    <Button
                    key={page}
                    sx={{ my:2, color:'white', display:"block" }}
                    >
                    {page}
                    </Button>
                ))}
                </Box> */}
                <div className={styles.navlinks}>
                    <Link to="/" className={styles.link}>
                        "Home"
                    </Link>
                    <Link to="/info" className={styles.link}>
                        "Privacy Policy"
                    </Link>
                </div>
            </Toolbar>
            </Container>
        </AppBar>
        <Toolbar />
        </ThemeProvider>
    );
}

export default ScreenAppBar;