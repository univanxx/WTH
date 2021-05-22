import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';

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
      <br/>
          <p>СВЕДЕНИЯ О ПРЕДПРИЯТИИ ИЗ ЕСИА/ЕГРЮЛ</p>
        <p>Полное наименование предприятия: АКЦИОНЕРНОЕ ОБЩЕСТВО "АНГСТРЕМ"</p>
        <p>Сокращенное наименование предприятия: АО "АНГСТРЕМ"</p> 
       <p>Тип предприятия:</p> 
        <p>ОГРН: 1027700140930</p>
        <p>ИНН: 7735010706</p>
        <p>КПП: 773501001</p>      

      <div>
      </div>
    </React.Fragment>
  );
}