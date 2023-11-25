import { Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import {CircleDashed, MagnifyingGlass, ArchiveBox} from "phosphor-react"
import { styled, alpha } from "@mui/material/styles";
import { InputBase } from "@mui/material";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.paper, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));



const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));


  
  
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: "inherit",
      "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: "100%",
      },
    }));
  
  


const Chats = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: 320,
        backgroundColor: "#eef1f8",
        boxShadow: "0px 0px 2px rgba(0 0 0 0.25)"
        
      }}
    >
        <Stack p={3} spacing={2}>
        <Stack direction="row" alignItems={"center"} justifyContent="space-between" >
            <Typography color="black" variant="h5">Chats</Typography>
            <IconButton>
             <CircleDashed/>
            </IconButton>

        </Stack>
          <Stack sx={{width:"100%"}} >
           <Search>
            <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6"/>
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
               
              />
           </Search>
           <Stack spacing={1}>
           <Stack direction="row" alignItems={"center"} spacing={1.5}>
             <ArchiveBox size={24}/>
             <Button>Archive</Button>
           
             </Stack>
             <Divider/>

           </Stack>
            
            


          </Stack>
        </Stack>
       
     
    </Box>
  )
}

export default Chats
