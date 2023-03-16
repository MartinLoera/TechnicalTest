import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { GitHub } from "@mui/icons-material";

export const CustomAppBar = () => {
    return (
        <AppBar position="static" sx={{ width: "100%" }}>
            <Toolbar sx={{ width: "100%" , m: 0}}>
                
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Postlyfy
                </Typography>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                >
                    <GitHub />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};
