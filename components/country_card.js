import React from 'react'

import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles({
  root: {
    minWidth: 300,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export default function CountryCard(props) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h1">
          <Link href={`/country/${encodeURIComponent(props.slug)}`}>{props.name}</Link>
        </Typography>
        <Typography variant="body2" component="span">
          <Paper elevation={0}>
            <List>
              <ListItemText>confirmados: {props.total_confirmed.toLocaleString(undefined)}</ListItemText>
              <ListItemText>muertes: {props.total_deaths.toLocaleString(undefined)}</ListItemText>
              <ListItemText>recuperaciones: {props.total_recovered.toLocaleString(undefined)}</ListItemText>
            </List>
          </Paper>
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  )
}
