import React, { useState, Fragment } from 'react'
import { Route, Link } from 'react-router-dom'

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
        padding: theme.spacing(2)
    }
});

const TabContainer = ({ value }) => (
    <AppBar position="static">
        <Tabs value={value}>
            <Tab label="Item One" component={Link} to="/tabs" />
            <Tab label="Item Two" component={Link} to="/tabs/page2" />
            <Tab label="Item Three" component={Link} to="/tabs/page3" />
        </Tabs>
    </AppBar>
)

function TabNavigationWithRoutes({classes}) {
    const [value, setValue] = useState(0)
    const onChange = (e, value) => {
        setValue(value)
    };
    return (
        <div className={classes.root}>
            {/* <AppBar position="static">
                <Tabs value={value} onChange={onChange}>
                    <Tab label="Item One" component={Link} to="/tabs" />
                    <Tab label="Item Two" component={Link} to="/tabs/page2" />
                    <Tab label="Item Three" component={Link} to="/tabs/page3" />
                </Tabs>
            </AppBar> */}
            <Route exact path="/tabs" render={() => (
                <Fragment>
                    <TabContainer value={0} />
                    <Typography component="div" className={classes.tabContent}>Item One</Typography>
                </Fragment>
            )} />
              <Route exact path="/tabs/page2" render={() => (
                  <Fragment>
                      <TabContainer value={1} />
                      <Typography component="div" className={classes.tabContent}>Item Two</Typography>
                  </Fragment>
            )} />
              <Route exact path="/tabs/page3" render={() => (
                  <Fragment>
                        <TabContainer value={2} />
                        <Typography component="div" className={classes.tabContent}>Item Three</Typography>
                  </Fragment>
            )} />
        </div>
    )
}
export default withStyles(styles)(TabNavigationWithRoutes);