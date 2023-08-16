import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import InboxIcon from '@mui/icons-material/Inbox';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import PropTypes from "prop-types";


const NavListDrawer = ({ navLinks }) => {
  return (
    <Box sx={{ width: 250, bgcolor: "lightcyan" }}>
      <nav>
        <List>
          <ListItem>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AddToHomeScreenIcon />
            </ListItemIcon>
            <ListItemText primary="Celular" />
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav>
        <List>
          {navLinks.map(item => (
            <ListItem disablePadding key={item.id}>
              <ListItemButton component="a" href={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}

NavListDrawer.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NavListDrawer