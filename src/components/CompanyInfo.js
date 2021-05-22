import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Divider from '@material-ui/core/Divider';
import CheckboxLabels from './CheckboxLabels'

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>АКЦИОНЕРНОЕ ОБЩЕСТВО "АНГСТРЕМ"</Title>
     <Divider variant="middle" />
     <div>       
        <span>Сокращенное наименование предприятия: АО "АНГСТРЕМ"</span> 
        <br/>
        <span>ОГРН: 1027700140930</span>
        <br/>
        <span>ИНН: 7735010706</span>
        <br/>
        <span>КПП: 773501001</span>     
      </div>
      <Divider variant="middle" />
      <h3>Требования к заявителю:</h3>
      <Divider variant="middle" />
      <CheckboxLabels/>
    </React.Fragment>
  );
}