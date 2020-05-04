import React, { useState } from 'react'
import compose from 'recompose/compose'

import { withStyles } from '@material-ui/core/styles'
/* 
 You can use the  withWidth() utility from Material-UI. It works like
withStyles() in that it returns a new component with new properties assigned
to it. The component returned by  withWidth() will update its  width prop any
time the breakpoint changes
*/
import withWidth from '@material-ui/core/withWidth'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    }
});

function TabAlignment({ classes, width }) {
    const [ value, setValue] = useState(0)
    const onChange = (e, value) => {
        setValue(value)
    };
    return (
        <div className={classes.root}>
            <Tabs
                value={value}
                onChange={onChange}
                variant={['xs', 'sm'].includes(width) ? null : "fullWidth"}
                centered
            >
                <Tab label="Item One"/>
                <Tab label="Item Two"/>
                <Tab label="Item Three"/>
            </Tabs>
        </div>
    )
}
/* To use the  withWidth() component—along with the  withStyles() component—
you can use the  compose() function from  recompose . This function makes your
code more readable when you're applying several higher-order functions
that decorate your component */
export default compose(
    withWidth(),
    withStyles(styles)
)(TabAlignment)