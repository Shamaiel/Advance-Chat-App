import { useTheme } from "@emotion/react";
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Columns, Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";

const DashboardLayout = () => {
  const theme = useTheme();
  console.log(theme);
  const [selected, setSelected] = useState(0);

  return (
    <>
      <Box
        padding={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.25)",
          height: "100vh",
          width: 100,
        }}
      >
        <Stack
          direction="column"
          alignItems={"center"}
          sx={{ width: "100%" }}
          spacing={2}
          justifyContent="space-between"
          height="100%"
        
        >
          <Stack alignItems={"center"} spacing={4}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}
            >
              <img src={Logo} alt={"chat-logo"} />
            </Box>

            <Stack
              spacing={2}
              sx={{ width: "max-content" }}
              direction="column"
              alignItems="center"
          
            >
              {Nav_Buttons.map((el) =>
                el.index === selected ? (
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                    p={1}
                  >
                    <IconButton
                      key={el.index}
                      sx={{ width: "max-content", color: "#fff" }}
                    >
                      {el.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => {
                      setSelected(el.index);
                    }}
                    key={el.index}
                    sx={{ width: "max-content", color: "#000" }}
                  >
                    {el.icon}
                  </IconButton>
                )
              )}
              <Divider width="30px" />

              {selected === 3 ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                  p={1}
                >
                  <IconButton>
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(3);
                  }}
                >
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>
         
          <Stack spacing={4}>
          <Switch  defaultChecked />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>

      <Outlet />
    </>
  );
};

export default DashboardLayout;
