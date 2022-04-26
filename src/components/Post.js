import { Checkbox, Avatar, Card, CardHeader, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import { Share, MoreVert, Favorite, FavoriteBorder } from '@mui/icons-material'

import React from 'react'

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
        <CardHeader
        avatar={
            <Avatar aria-label="recipe">
            R
            </Avatar>
        }
        action={
            <IconButton aria-label="settings">
            <MoreVert />
            </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
        />
        <CardMedia
        component="img"
        height="20%"
        image="https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?b=1&k=20&m=1322104312&s=170667a&w=0&h=VQyPkFkMKmo0e4ixjhiOLjiRs_ZiyKR_4SAsagQQdkk=" 
        alt="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <IconButton aria-label="share">
                <Share />
            </IconButton>        
        </CardActions>      
    </Card>
  )
}

export default Post
