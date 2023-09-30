import { alpha, AppBar, Avatar, Badge, Box, Menu, MenuItem, styled, TextField, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { InputBase } from '@mui/material';
import i from '../../src/image/img.png'
import SearchIcon from '@mui/icons-material/Search';
import { HighlightOff } from '@mui/icons-material';

const Search = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-between',
    gap: '10px',
    backgroundColor: alpha(theme.palette.common.white, 1),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.85),
    },
    width: '40%',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius


}))
const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up('sm')]: {
        display: 'flex'
    }
}))
const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    [theme.breakpoints.up('sm')]: {
        display: 'none'
    }
}))

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [searchOpen, setSearchOpen] = useState(false)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar position='sticky'>
            <Toolbar sx={{ display: 'flex', justifyContent: "space-between" }}>
                <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>Nur Noby</Typography>
                <AccountBalanceIcon sx={{ display: { xs: 'block', sm: 'none' } }}></AccountBalanceIcon>
                {searchOpen ? <Search sx={{ display: { xs: 'flex', sm: 'flex' } }}>
                    
                    <InputBase placeholder='Search....' sx={{ color: 'black' }}></InputBase>
                    <SearchIcon onClick={() => setSearchOpen(false)} sx={{ color: 'gray', ml: 1 }} />
                   
                </Search> :
                    <Search sx={{ display: { xs: 'none', sm: 'flex' } }}>
                       
                        <InputBase placeholder='Search....' sx={{ color: 'black' }}></InputBase>
                        <SearchIcon sx={{ color: 'gray', ml: 1 }} />
                    </Search>}

                <Icons>

                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon />
                    </Badge>
                    <Avatar onClick={handleClick} sx={{ width: 30, height: 30 }} alt="Nurnoby" src={i} />
                </Icons>
                {
                    searchOpen ? null : <UserBox>
                        <SearchIcon onClick={() => setSearchOpen(true)} sx={{ display: { sm: 'none' }, mr: 1 }}></SearchIcon>
                        <Avatar onClick={handleClick} sx={{ width: 30, height: 30 }} alt="Nurnoby " src={i} />
                        <Typography>Nurnoby</Typography>
                    </UserBox>
                }

            </Toolbar>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>

        </AppBar>
    );
};

export default Navbar;