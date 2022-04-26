import { Fab, Button, ButtonGroup, Tooltip, Modal, Box, styled, Typography, Avatar, TextField, Stack } from '@mui/material'
import { Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import React, { useState } from 'react'

const CustomModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})

const AddPost = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
    <>
        <Tooltip 
            title="Add Post" 
            onClick={() => setOpenModal(true)}
            sx={{ position: "fixed", bottom: 20, left: {xs: "calc(50% - 25px)", md: 30} }}>
            <Fab color="primary" aria-label="add">
                <Add />
            </Fab>
        </Tooltip> 
        <CustomModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
            <Typography variant="h6" color="grey" textAlign="center">Create a post</Typography>
            <UserBox>
                <Avatar sx={{ width: 30, height: 30 }} />
                <Typography fontWeight={500} variant="span">Jon Doe</Typography>
            </UserBox>
            <TextField
            id="filled-multiline-static"
            sx={{ width: "100%" }}
            multiline
            rows={4}
            placeholder="Add a post..."
            variant="standard"
            />
            <Stack direction="row" gap={1} mt={2} mb={3}>
                <EmojiEmotions color="primary"/>
                <Image color="secondary"/>
                <VideoCameraBack color="success"/>
                <PersonAdd color="error"/>
            </Stack>            
            <ButtonGroup variant="contained" fullWidth aria-label="outlined primary button group">
                <Button>Post</Button>
                <Button sx={{ width: "100px" }}>
                    <DateRange />
                </Button>
            </ButtonGroup>
        </Box>
        </CustomModal>
    </>
  )
}

export default AddPost
