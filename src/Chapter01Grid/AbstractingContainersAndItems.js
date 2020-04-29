import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(3)
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    }
});

const Container = props => <Grid container {...props} />;
/* in the  Item component,  {...props} is passed after the default values, meaning
that they override any properties with the same name.
 */
const Item = props => <Grid item xs={12} sm={6} md={3} {...props} />;

const AbstractingContainersAndItems = withStyles(styles)(({ classes }) => (
    <div className={classes.root}>
        <Container spacing={4}>
            <Item>
                <Paper className={classes.paper}>
                    xs=12 sm=6 md=3
                </Paper>
            </Item>
            <Item >
                <Paper className={classes.paper}>
                    xs=12 sm=6 md=3
                </Paper>
            </Item>
            <Item >
                <Paper className={classes.paper}>
                    xs=12 sm=6 md=3
                </Paper>
            </Item>
            <Item >
                <Paper className={classes.paper}>
                    xs=12 sm=6 md=3
                </Paper>
            </Item>
        </Container>
    </div>
));

export default AbstractingContainersAndItems;