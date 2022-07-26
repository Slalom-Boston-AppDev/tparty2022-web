import React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Button, Container } from '@mui/material';

const useStyles = makeStyles(() => ({
    title: {
      flexGrow: 1,
    },
}))

const ScreenAppBar = () => {
    const styles = useStyles();
    const pages = ["Home", "Privacy Policy"];
    return (
        <React.Fragment>
        <AppBar color={"primary"} position={'static'} className={styles.appbar}>
            <Container maxWidth='xl'>
            <Toolbar disableGutters>
                <Box sx={{ flexGrow:1, display: {xs:'none', md:'flex'}, alignItems:'center', justifyContent:'center'}}>
                {pages.map((page) => (
                    <Button
                    key={page}
                    sx={{ my:2, color:'white', display:"block" }}
                    >
                    {page}
                    </Button>
                ))}
                </Box>
            </Toolbar>
            </Container>
        </AppBar>
        <Toolbar />
        </React.Fragment>
    );
}

export default ScreenAppBar;