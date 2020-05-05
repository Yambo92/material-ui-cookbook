import React, { Fragment } from 'react'

import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const styles = theme => ({
    panelDetails: {
        flexDirection: 'column',
        height: 150,
        overflow: 'auto'
    }
});
const IpsumContent = () => (
    <Fragment>
    <Typography paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
    ultricies nibh ut ipsum placerat, eget egestas leo imperdiet.
    Etiam consectetur mollis ultrices. Fusce eu eros a dui maximus
    rutrum. Aenean at dolor eu nunc ultricies placerat. Sed finibus
    porta sapien eget euismod. Donec eget tortor non turpis
    hendrerit euismod. Phasellus at commodo augue. Maecenas
    sceleris?ue augue at mattis pharetra. Aenean fermentum sed ne?ue
    id feugiat.
    </Typography>
    <Typography paragraph>
    Ali?uam erat volutpat. Donec sit amet venenatis leo. Nullam
    tincidunt diam in nisi pretium, sit amet tincidunt nisi ali?uet.
    Proin ?uis justo consectetur, congue nisi nec, pharetra erat. Ut
    volutpat pulvinar ne?ue vitae vestibulum. Phasellus nisl risus,
    dapibus at sapien in, ali?uam tempus tellus. Integer accumsan
    tortor id dolor lacinia, et pulvinar est porttitor. Mauris a est
    vitae arcu iaculis dictum. Sed posuere suscipit ultricies.
    Vivamus a lacus in dui vehicula tincidunt.
    </Typography>
    <Typography paragraph>
    In ut velit laoreet, blandit nisi id, tempus mi. Mauris interdum
    in turpis vel tempor. Vivamus tincidunt turpis vitae porta
    dignissim. Quis?ue condimentum augue arcu, ?uis tincidunt erat
    luctus sit amet. Sed ?uis ligula malesuada, sollicitudin nisl
    nec, molestie tellus. Donec commodo conse?uat gravida. Mauris in
    rhoncus tellus, eget posuere risus. Pellentes?ue eget lectus
    lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Integer condimentum, sapien varius vulputate lobortis, urna elit
    vestibulum ligula, sit amet interdum lectus augue ac eros.
    Vestibulum lorem ante, tincidunt eget faucibus id, placerat non
    est. Vivamus pretium consectetur nunc at imperdiet. Nullam eu
    elit dui. In imperdiet magna ac dui ali?uam gravida. Aenean
    ipsum ex, fermentum eu pretium ?uis, posuere et velit.
    </Typography>
    </Fragment>
    );

const ScrollablePanelContent = withStyles(styles)(({classes}) => (
    <Fragment>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>First</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.panelDetails}>
                <IpsumContent />
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Second</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.panelDetails}>
                <IpsumContent />
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Third</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.panelDetails}>
                <IpsumContent />
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </Fragment>
))

export default ScrollablePanelContent;