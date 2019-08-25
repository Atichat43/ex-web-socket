import React from 'react'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    height: '650px',
    padding: theme.spacing(3, 2),
  },
  header: {
    marginBottom: '30px',
  },
  flex: {
    alignItems: 'center',
    display: 'flex',
  },
  topicWindow: {
    borderRight: '1px solid rgba(0, 0, 0, 0.25)',
    height: '500px',
    minWidth: '200px',
    padding: '10px',
    width: '20%',
  },
  warpperChatWindow: {
    height: '500px',
    width: '80%',
    padding: '10px',
  },
  contentChatWindow: {
    height: '450px',
    paddingBottom: '5px',
    paddingLeft: '16px',
    paddingTop: '5px',
  },
  chip: {
    marginLeft: '6px',
  },
  chatBoxWrapper: {
    paddingLeft: '10px',
  },
  chatBox: {
    marginRight: '15px',
    width: '85%',
  },
  button: {
    width: '15%',
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}))

const Dashboard = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h5" component="h3">
          Atichat Chat App: Socket.io
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </div>
      <div className={classes.flex}>
        <div className={classes.topicWindow}>
          <ListSubheader component="div"> Topics </ListSubheader>
          <List component="nav">
            {
              ['Atichat', 'Boss'].map(topic => (
                <ListItem button>
                  <ListItemText primary={topic} />
                </ListItem>
              ))
            }
          </List>
        </div>
        <div className={classes.warpperChatWindow}>
          <ListSubheader component="div"> ChatWindow </ListSubheader>
          <div className={classes.contentChatWindow}>
            {[{ from: 'User', msg: 'hello' }].map(chat => (
              < div className={classes.flex}>
                <Typography component="p"> {`${chat.from}:`} </Typography>
                <Chip label={chat.msg} className={classes.chip} />
              </div>
            ))}
          </div>
          <div className={classes.chatBoxWrapper}>
            <div className={classes.flex}>
              <TextField
                label="Send a chat"
                placeholder="texting something here"
                className={classes.chatBox}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Send
                </Button>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  )
}

export default Dashboard