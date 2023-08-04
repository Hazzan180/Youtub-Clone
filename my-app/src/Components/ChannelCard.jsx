import React from 'react'
import {Link} from 'react-router-dom'
import {Box, Typography, Card, CardContent, CardMedia} from '@mui/material';
import {demoProfilePicture} from '../utils/constants'

const ChannelCard = ({channelDetail, marginTop}) => {
  return (
    <Box 
    sx={{boxShadow: '0', borderRadius: '20px', 
    display: 'flex', width: {xs: '356px', md:'320px'},
    justifyContent: 'center', alignItems: 'center',
    height: '326px',
    margin: 'auto',
    marginTop,
    }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display: 'flex', flexDirection: 'column',
        justifyContent: 'center', textAlign: 'center', color: '#fff'}}
        >
          <CardMedia  
          image={channelDetail?.snippet?.thumbnails?.high?.url
          || demoProfilePicture} 
          alt={channelDetail?.snippet?.title}
          sx={{borderRadius:'50%', width: '180px', height: '180px', mb: 2}}
          />
        </CardContent>
        <Typography variant='h6' color='#fff' textAlign='center'>
          {channelDetail?.snippet?.title}
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography variant='h6' color='#fff' textAlign='center'>
          {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
        </Typography>
        )}
      </Link>
    </Box>
  )
}

export default ChannelCard