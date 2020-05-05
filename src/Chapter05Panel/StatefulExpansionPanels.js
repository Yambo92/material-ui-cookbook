import React, { useState, Fragment } from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import DevicesIcon from '@material-ui/icons/Devices'
import NetworkWifiIcon from '@material-ui/icons/NetworkWifi'
import StorageIcon from '@material-ui/icons/Storage'

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(1),
        color: '#ff5168'
    }
}))

export default function StatefulExpansionPanels() {
    const classes = useStyles();
    const [ expanded, setExpanded ] = useState(0);
    const [panels] = useState([
        {   
            icon: DevicesIcon,
            title: 'First Panel Title',
            content: 'First panel content...'
            },
            {
            icon: NetworkWifiIcon,
            title: 'Second Panel Title',
            content: 'Second panel content...'
            },
            {
            icon: StorageIcon,
            title: 'Third Panel Title',
            content: 'Third panel content...'
            },
            {
            icon: NetworkWifiIcon,
            title: 'Fourth Panel Title',
            content: 'Fourth panel content...',
            disabled: true
            }
    ]);
    const onChange = expanded => () => {
        setExpanded(expanded)
    };
    return (
        <Fragment>
            {panels
            .filter(panel => !panel.hidden)
            .map((panel, index) => (
                <ExpansionPanel
                    key={index}
                    disabled={panel.disabled}
                    expanded={index === expanded}
                    onChange={onChange(index)}
                >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <panel.icon className={classes.icon} />
                        <Typography variant="h5">{panel.title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>{panel.content}</Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))}
        </Fragment>
    )
}