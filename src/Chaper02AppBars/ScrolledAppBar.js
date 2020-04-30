
import React, { Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Fade from '@material-ui/core/Fade'
import Grow from '@material-ui/core/Grow'
import Slide from '@material-ui/core/Slide'

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    toolbarMargin: theme.mixins.toolbar
});

const ScrolledAppBar = withStyles(styles)(
    class extends Component {
        state = {
            scrolling: false, //true=>向下滚动
            scrollTop: 0
        };
        onScroll = e => {
            this.setState(state => ({
                /* 
                一个元素的 scrollTop 值是这个元素的内容顶部（卷起来的）到它的视口可见内容（的顶部）的距离的度量。
                当一个元素的内容没有产生垂直方向的滚动条，那么它的 scrollTop 值为0。
                Document.documentElement returns the Element that is the root element of the document
                 (for example, the <html> element for HTML documents).
                */
                scrollTop: e.target.documentElement.scrollTop,
                scrolling: e.target.documentElement.scrollTop > state.scrollTop
            }))
        }
        shouldComponentUpdate(nextProps, nextState) {
            //只有用户反向滚动页面的时候才会更新组件
            return this.state.scrolling !== nextState.scrolling;
        }
        componentDidMount(){
            window.addEventListener('scroll', this.onScroll)
        }
        componentWillUnmount(){
            window.removeEventListener('scroll', this.onScroll)
        }
        render () {
            const { classes } =  this.props;
            return (
                /* 
                The  "in" property tells the  Fade component to fade its children,  in , when the
                    value is true
                */
                <Fade in={!this.state.scrolling}>
                    <AppBar>
                        <Toolbar>
                            <IconButton
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="Menu"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography
                                variant="h6"
                                color="inherit"
                                className={classes.flex}
                            >
                                My Title
                            </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </Fade>
               /*  <Grow in={!this.state.scrolling}>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={classes.flex}
                        >
                            My Title
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Grow> */
        //     <Slide in={!this.state.scrolling} direction="down">
        //     <AppBar>
        //         <Toolbar>
        //             <IconButton
        //                 className={classes.menuButton}
        //                 color="inherit"
        //                 aria-label="Menu"
        //             >
        //                 <MenuIcon/>
        //             </IconButton>
        //             <Typography
        //                 variant="h6"
        //                 color="inherit"
        //                 className={classes.flex}
        //             >
        //                 My Title
        //             </Typography>
        //             <Button color="inherit">Login</Button>
        //         </Toolbar>
        //     </AppBar>
        // </Slide>
            )
        }
    }
);

const AppBarWithButtons = withStyles(styles)(
    ({ classes, title, buttonText}) => (
        <div className={classes.root}>
           <ScrolledAppBar/>
           <div className={classes.toolbarMargin}/>
           <ul>
           {new Array(50).fill(null).map((v, i) => (
           <li key={i} >{i}</li>
           ))}</ul>
        </div>
    )
);

export default AppBarWithButtons
