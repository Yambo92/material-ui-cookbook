import React from 'react'

import {withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper:{
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
});
/* 
If you want a fixed number of columns, you should only specify the  xs
breakpoint property. In this example,  3 is 25% of the screen width – or 4
columns. This will never change because  xs is the smallest breakpoint there
is. Anything larger is applied to  xs as well, unless you specify a larger
breakpoint(如果需要设置固定列数则只需要给item设置xs属性即可， 后面任何breakpoint都使用同xs相同的值)
*/

const FixedColumnLayout = withStyles(styles)(({ classes, width }) => (
    <div className={classes.root}>
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Paper className={classes.paper} >
                    xs={12}
                </Paper>
            </Grid>
            <Grid item xs={width}>
                <Paper className={classes.paper} >
                    xs={width}
                </Paper>
            </Grid>  <Grid item xs={width}>
                <Paper className={classes.paper} >
                    xs={width}
                </Paper>
            </Grid>  <Grid item xs={width}>
                <Paper className={classes.paper} >
                    xs={width}
                </Paper>
            </Grid>  <Grid item xs={width}>
                <Paper className={classes.paper} >
                    xs={width}
                </Paper>
            </Grid>  <Grid item xs={12}>
                <Paper className={classes.paper} >
                    xs={12}
                </Paper>
            </Grid>
        </Grid>
    </div>
));

export default FixedColumnLayout;