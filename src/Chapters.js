import React, { Fragment } from "react"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { UnderstandingBreakpoints, FillingSpace, AbstractingContainersAndItems, FixedColumnLayout,ColumnDirection } from './Chapter01Grid'
import { FixedPosition, AppBarWithButtons, ToolbarAbstraction, WithNavigation} from './Chaper02AppBars'
import { DrawerTypes, DrawerItemState, DrawerItemNavigation, DrawerSections, AppBarInteraction  } from './Chaper03Drawers'
import { AppBarIntegration, TabAlignment, 
    RenderingTabsBasedOnState, AbstractingTabContent,TabNavigationWithRoutes } from './Chapter04Tabs' 

import { StatefulExpansionPanels,
    ScrollablePanelContent,
    LazyLoadingPanelContent
} from './Chapter05Panel'

import { UsingStatetoRenderListItems,
    ListIcons, ListAvatarsAndText,ListSections,
     NestedLists,ListControls,ScrollingLists
} from './Chapter06Lists'

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
            {/* <DrawerTypes variant={'persistent'} />
            <DrawerItemState />  */}
            {/* <DrawerItemNavigation />  */}
            {/* <DrawerSections />   */}
            <AppBarInteraction />  
        </Fragment>
    )
}

export const Chapter4 = () => {
    return (
        <Fragment>
            {/* <AppBarIntegration /> */}
            {/* <TabAlignment /> */}
            {/* <RenderingTabsBasedOnState />AbstractingTabContent */}
            {/* <AbstractingTabContent /> */}
            <TabNavigationWithRoutes />
        </Fragment>
    )
}

export const Chapter5 = () => {
    return (
        <Fragment>
            <StatefulExpansionPanels />
            <ScrollablePanelContent />
            <LazyLoadingPanelContent />

        </Fragment>
    )
}

export const Chapter6 = () => {
    return (
        <Fragment>
            <UsingStatetoRenderListItems/>
            <ListIcons/>
            <ListAvatarsAndText/>
            <ListSections/>
            <NestedLists/>
            <ListControls/>
            <ScrollingLists/>
        </Fragment>
    )
}