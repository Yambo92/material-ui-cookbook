import React, { useState } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Typography from '@material-ui/core/Typography'

import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import ShowChartIcon from '@material-ui/icons/ShowChart'
import { Collapse } from '@material-ui/core'

const styles = theme => ({
    alignContent: {
        alignSelf: "center"
    },
    listSubheader: {
        padding: 0,
        minWidth: 0,
        color: 'inherit',
        '&:hover': {
            background: 'inhert'
        }
    }
});

const ListItems = ({ items, onClick, visible }) => (
    <Collapse in={visible}>
        {
            items.filter(({ hidden }) => !hidden)
            .map(({ label, disabled, Icon }, i) => (
                <ListItem
                    button
                    key={i}
                    disabled={disabled}
                    onClick={onClick(label)}
                >
                    <ListItemIcon>
                        <Icon/>
                    </ListItemIcon>
            <ListItemText>{ label }</ListItemText>
                </ListItem>
            ))
        }
    </Collapse>
);

const DrawerSections = withStyles(styles)(({ classes }) => {
    const [ open, setOpen ] = useState(false);
    const [ content, setContent ] = useState('Home');
    const [ sections, setSections ] = useState({
        cpu: true,
        memory: false,
        storage: false,
        network: false
    })
    const [ items ] = useState({
        cpu: [
            { label: 'Add CPU', Icon: AddIcon },
            { label: 'Remove CPU', Icon: RemoveIcon },
            { label: 'Usage', Icon: ShowChartIcon }
            ],
            memory: [
            { label: 'Add Memory', Icon: AddIcon },
            { label: 'Usage', Icon: ShowChartIcon }
            ],
            storage: [
            { label: 'Add Storage', Icon: AddIcon },
            { label: 'Usage', Icon: ShowChartIcon }
            ],
            network: [
            { label: 'Add Network', Icon: AddIcon, disabled: true },
            { label: 'Usage', Icon: ShowChartIcon }
            ]
    });
    const onClick = content => () => {
        setOpen(false);
        setContent(content);
    };
    const toggleSection = name => () => {
        setSections({ ...sections, [name]: !sections[name]})
    }
    return (
        <Grid container justify="space-between">
            <Grid item className={classes.alignContent}>
                <Typography>{content}</Typography>
            </Grid>
            <Grid item>
                <Drawer open={open} >
                    <List>
                        <ListSubheader>
                            <Button 
                                disableRipple //禁止在点击的时候出现水波的效果
                                classes={{ root: classes.listSubheader }}
                                onClick={ toggleSection('cpu')}
                            >
                                CPU
                            </Button>
                        </ListSubheader>
                        <ListItems items={items.cpu} onClick={onClick} visible={sections.cpu} />
                        <ListSubheader>
                            <Button 
                                disableRipple
                                classes={{ root: classes.listSubheader }}
                                onClick={ toggleSection('memory')}
                            >
                                Memory
                            </Button>
                        </ListSubheader>
                        <ListItems items={items.memory} onClick={onClick} visible={sections.memory} />
                        <ListSubheader>
                            <Button 
                                disableRipple
                                classes={{ root: classes.listSubheader }}
                                onClick={ toggleSection('storage')}
                            >
                                Storage
                            </Button>
                        </ListSubheader>
                        <ListItems items={items.storage} onClick={onClick} visible={sections.storage} />
                        <ListSubheader>
                            <Button 
                                disableRipple
                                classes={{ root: classes.listSubheader }}
                                onClick={ toggleSection('network')}
                            >
                                NetWork
                            </Button>
                        </ListSubheader>
                        <ListItems items={items.network} onClick={onClick} visible={sections.network} />
                    </List>
                </Drawer>
            </Grid>
            <Grid item>
                <Button onClick={() => setOpen(!open)}>
                    { open ? "Hide" : 'Show' } Drawer
                </Button>
            </Grid>
        </Grid>
    )
})

export default DrawerSections;