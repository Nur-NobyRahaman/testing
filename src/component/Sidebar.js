import { AccountBox, Article, Diversity3, Group, Home, ModeNight, Person, Settings, Storefront } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Typography } from '@mui/material';
import React from 'react';

const Sidebar = ({ setMode, mode }) => {
    return (
        <Box
            sx={{ flex: {  sm: 1 } }}

            p={2}
        >
            <Box position={"fixed"}>
                <List >
                    <ListItem disablePadding>
                        <ListItemButton components={"a"} href="/">
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText sx={{ display: { xs: 'none', sm: 'block' }, }} primary="HomePage" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton components={"a"} href="/">
                            <ListItemIcon>
                                <Article />
                            </ListItemIcon>
                            <ListItemText sx={{ display: { xs: 'none', sm: 'block' }, }} primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton components={"a"} href="/">
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText sx={{ display: { xs: 'none', sm: 'block' }, }} primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton components={"a"} href="/">
                            <ListItemIcon>
                                <Storefront />
                            </ListItemIcon>
                            <ListItemText sx={{ display: { xs: 'none', sm: 'block' }, }} primary="MarketPlace" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton components={"a"} href="/">
                            <ListItemIcon>
                                <Diversity3 />
                            </ListItemIcon>
                            <ListItemText sx={{ display: { xs: 'none', sm: 'block' }, }} primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton components={"a"} href="/">
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText sx={{ display: { xs: 'none', sm: 'block' }, }} primary="Setting" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton components={"a"} href="/">
                            <ListItemIcon>
                                <AccountBox />
                            </ListItemIcon>
                            <ListItemText sx={{ display: { xs: 'none', sm: 'block' }, }} primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton components={"a"} href="/">
                            <ListItemIcon >
                                <ModeNight />
                            </ListItemIcon>
                            <Box sx={{ display: { xs: 'none', sm: 'block' }, }}>
                                <Switch onChange={(e) => setMode(mode === "light" ? "dark" : "light")} />
                            </Box>

                        </ListItemButton>
                    </ListItem>

                </List>
            </Box>

        </Box>
    );
};

export default Sidebar;