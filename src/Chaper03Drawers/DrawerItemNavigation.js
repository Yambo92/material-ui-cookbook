import React, { useState, useEffect } from 'react';
import { Route, Link, Switch, NavLink } from 'react-router-dom'
import  './style.css';
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

import HomeIcon from '@material-ui/icons/Home'
import WebIcon from '@material-ui/icons/Web'

const styles = theme => ({
    alignContent: {
        alignSelf: 'center'
    },
    activeListItem: {
        color: '#ff5168'
    },
});



function DrawerItemNavigation({ classes }) {
    const [ open, setOpen ] = useState(false);
    return (
        <Grid container justify="space-between">
            <Grid item className={ classes.alignContent}>
                <Route exact path="/drawer/home" render={() => <Typography>Home</Typography>} />
                <Route exact path="/drawer/page2" render={() => <Typography>Page 2</Typography>} />
                <Route exact path="/drawer/page3" render={() => <Typography>Page 3</Typography>} />
            </Grid>
            <Grid item>
                <Drawer className={ classes.drawerWidth} open={open} onClose={() => setOpen(false)}>
                    <List>
                        <ListItem component={NavLink} to="/drawer/home" onClick={() => setOpen(false)} activeClassName="activeListItem">
                            <ListItemIcon><HomeIcon/></ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItem>
                        <ListItem component={NavLink} to="/drawer/page2" onClick={() => {setOpen(false)} } activeClassName="activeListItem">
                            <ListItemIcon><WebIcon/></ListItemIcon>
                            <ListItemText>Page 2</ListItemText>
                        </ListItem>
                        <ListItem component={NavLink} to="/drawer/page3" onClick={() => {setOpen(false)} } activeClassName="activeListItem">
                            <ListItemIcon><WebIcon/></ListItemIcon>
                            <ListItemText>Page 3</ListItemText>
                        </ListItem>
                    </List>
                </Drawer>
            </Grid>
            <Grid item>
                <Button onClick={() => setOpen(!open)}>
                    { open ? "Hide" : "Show"} Drawer
                </Button>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(DrawerItemNavigation);