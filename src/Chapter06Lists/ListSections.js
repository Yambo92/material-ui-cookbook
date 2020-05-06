import React, {Fragment} from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
const ListSections = () => (
    <Fragment>
        <Typography variant="subtitle1">First Section</Typography>
        <List>
            <ListItem>
                <ListItemText primary="First" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Second" />
            </ListItem>
        </List>
        <Typography variant="subtitle1">Second Section</Typography>

        <List>
            <ListItem>
                <ListItemText primary="First" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Second" />
            </ListItem>
        </List>
        <Typography variant="subtitle1">Third Section</Typography>

        <List>
            <ListItem>
                <ListItemText primary="First" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Second" />
            </ListItem>
        </List>
    </Fragment>
);

export default ListSections;