import { Avatar, Typography } from '@mui/material'
import Stack from '@mui/material/Stack';
import React from 'react'
import profile from './images/profile1.png'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import bg from './images/bg2.webp';

const Profile = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})`,maxHeight:'50vh', }}>
      <br /><br /><br />
    
       <Container maxWidth="sm">
        
      <Box sx={{ bgcolor: 'rgba(30, 28, 28, 0.5)', height: '90vh', backdropFilter: 'blur(10px)', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
     

     <Stack direction="column" alignItems="center" spacing={2}>
     <Typography variant="h4">Profile</Typography>
     <Avatar alt="profile" src={profile}    sx={{ width: 100, height: 100 }} />
     </Stack>
     </Box>
     </Container>
  
    </div>
  )
}

export default Profile
