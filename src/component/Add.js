import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { DateRange, EmojiEmotions, Image, PersonAdd, Videocam, VideoCameraBack } from '@mui/icons-material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
    pl: 4,
    pr: 4,
    pt: 2,
    pb: 4
};
const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    [theme.breakpoints.up('sm')]: {
        display: 'none'
    }
}))

const Add = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box>
            <Tooltip title="Add" sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px)', md: 30 } }}>
                <IconButton onClick={handleOpen}>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </IconButton>

            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" fontWeight={'bold'} sx={{ textAlign: 'center' }} color={"text.secondary"}>
                        Create Post
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        mb: 2
                    }}>
                        <Avatar sx={{ width: 30, height: 30 }} alt="Jhon " src={"https://randomuser.me/api/portraits/women/67.jpg"} />
                        <Typography color={"text.primary"} fontSize={18} fontWeight={'bold'}>Jhon</Typography>
                    </Box>
                    <TextField
                        id="standard-multiline-static"
                        placeholder="What's on your mind?"
                        multiline
                        rows={3}
                        fullWidth
                        variant="standard"
                    />
                    <Stack direction={'row'} gap={1} sx={{ mt: 2 }}>
                        <EmojiEmotions color='primary'></EmojiEmotions>
                        <Image color='secondary'></Image>
                        <VideoCameraBack color='success'></VideoCameraBack>
                        <PersonAdd color='error'></PersonAdd>
                    </Stack>
                    <ButtonGroup sx={{mt:3}} fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{width:'100px'}}><DateRange></DateRange></Button>
                        
                    </ButtonGroup>
                </Box>
            </Modal>
        </Box>

    );
};

export default Add;