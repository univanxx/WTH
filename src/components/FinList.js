import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function FinList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
      <ListItemLink href="#simple-list1">
          <ListItemText primary="до 2 400 млн. руб.
          Субсидии российским организациям на финансовое обеспечение части затрат
           на создание НТЗ по разработке базовых технологий производства приоритетных
           электронных компонентов и радиоэлектронной аппаратуры"/>
        </ListItemLink>
        <Divider />
        <ListItemLink href="#simple-list">
          <ListItemText primary="Программа льготного кредитования субъектов малого и среднего 
          предпринимательства в 2019 – 2024 годах" />
        </ListItemLink>
      </List>
    </div>
  );
}
