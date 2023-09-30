import { Avatar, AvatarGroup, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, styled, Typography } from '@mui/material';
import React from 'react';
import Badge from '@mui/material/Badge';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));



const Rightbar = () => {
    return (
        <Box

            flex={2}
            p={2}
            sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Box position={"fixed"} sx={{ width: '25%' }}>
                <Typography variant='h6' fontWeight={100} mb={1}>Online Friends</Typography>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    variant="dot"
                >
                    <AvatarGroup max={7}>
                        <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/6.jpg" />
                        <Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/men/62.jpg" />
                        <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/women/63.jpg" />
                        <Avatar alt="Agnes Walker" src="https://randomuser.me/api/portraits/men/64.jpg" />
                        <Avatar alt="Trevor Henderson" src="" />
                        <Avatar alt="Agnes Walker" src="https://randomuser.me/api/portraits/men/64.jpg" />
                        <Avatar alt="Trevor Henderson" src="https://randomuser.me/api/portraits/men/65.jpg" />
                        <Avatar alt="Agnes Walker" src="https://randomuser.me/api/portraits/men/64.jpg" />
                        <Avatar alt="Trevor Henderson" src="https://randomuser.me/api/portraits/men/65.jpg" />
                    </AvatarGroup>
                </StyledBadge>
                <Typography variant='h6' fontWeight={100} mt={3} mb={1}>Latest Photos</Typography>
                <ImageList cols={3} rowHeight={125} gap={5}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Typography variant='h6' fontWeight={100} mt={3} mb={1}>Latest Conversion</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/women/63.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/women/67.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/women/70.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>

        </Box>
    );
};
export default Rightbar;
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },

];



