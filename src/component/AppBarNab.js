import { makeStyles } from '@material-ui/core';
import { Mail, Notifications } from '@mui/icons-material';
import { alpha, AppBar, Avatar, Badge, Box, IconButton, InputBase, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles((theme) => ({
    toolBar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    logoLg: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    logoSm: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        gap: "5px",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 1),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.85),
        },
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            display: (props) => props.searchOpen ? 'flex' : 'none'
        }
    },
    input: {
        color: 'black'
    },
    icon: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        [theme.breakpoints.down('sm')]: {
            display: (props) => props.searchOpen ? 'none' : 'flex'
        }


    },
    searchButton: {
        color: 'white',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    }
}))
const AppBarNab = () => {
    const [searchOpen, setSearchOpen] = useState(false)
    const classes = useStyles({ searchOpen });

    console.log(searchOpen)
    return (
        <AppBar position="sticky">
            <Toolbar className={classes.toolBar}>
                <Typography className={classes.logoLg}>Nav Bar</Typography>
                <Typography className={classes.logoSm}>Nav</Typography>
                <div className={classes.search}>
                    <SearchIcon sx={{ color: 'gray', ml: 1 }} />
                    <InputBase placeholder='Search...' className={classes.input} />
                </div>
                <div className={classes.icon}>
                    <IconButton onClick={() => setSearchOpen(true)}  >
                        <Typography className={classes.searchButton}><SearchIcon ></SearchIcon></Typography>
                    </IconButton>

                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }} alt="Jhon " src={"https://randomuser.me/api/portraits/women/67.jpg"} />
                </div>
            </Toolbar>

        </AppBar>
    );
};

export default AppBarNab;