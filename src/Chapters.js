import React, { Fragment } from "react"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { UnderstandingBreakpoints, FillingSpace, AbstractingContainersAndItems, FixedColumnLayout,ColumnDirection } from './Chapter01Grid'
import { FixedPosition, AppBarWithButtons, ToolbarAbstraction, WithNavigation} from './Chaper02AppBars'
import { DrawerTypes  } from './Chaper03Drawers'

export const Chapter1 = () => {
    return (
        <Fragment>
            <UnderstandingBreakpoints/>
            <FillingSpace justify="space-around" />
            <AbstractingContainersAndItems />
            <FixedColumnLayout width={4} />
            <ColumnDirection />
        </Fragment>
    )
};

export const Chapter2 = (props) => {
    const {match} = props
    return (
        <Router>
            <Switch>
                <Route path={`${match.path}/fixed`} component={FixedPosition} />
                <Route path={`${match.path}/scrolledappbar`} component={AppBarWithButtons} />
                <Route path={`${match.path}/withnavigation`} component={WithNavigation} />
                <Route path={`${match.path}/toolbarabstraction`}
                     render={props => <ToolbarAbstraction {...props} title="My Toolbar" />} />
                <Route  component={FixedPosition} />

            </Switch>
        </Router>
    )
}

export const Chapter3 = () => {
    return (
        <Fragment>
            <DrawerTypes variant={'persistent'} />
        </Fragment>
    )
}