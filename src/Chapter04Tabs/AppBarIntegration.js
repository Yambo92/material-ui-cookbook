import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    tabContent: {
        padding: theme.spacing.unit * 2
    }
});

function AppBarIntegration({classes}) {
    const [ value, setValue ] = useState(0);

    const onChange = ( e, value) => {
        setValue(value)
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value}
                     onChange={onChange}
                     variant="fullWidth"
                    //  centered
                     //让激活的tab标签的下划线颜色为AppBar的主背景色
                    //  indicatorColor="primary"
                >
                    <Tab label="Item one" />
                    <Tab label="Item two" />
                    <Tab label="Item three" />
                </Tabs>
            </AppBar>
            {
                value === 0 && (
                    <Typography component="div" className={classes.tabContent}>
                        Item One content
                    </Typography>
                )
            }
              {
                value === 1 && (
                    <Typography component="div" className={classes.tabContent}>
                        Item Two content
                    </Typography>
                )
            }
            {
                value === 2 && (
                    <Typography component="div" className={classes.tabContent}>
                        Item Three content
                    </Typography>
                )
            }
        </div>
    )
}

export default withStyles(styles)(AppBarIntegration);