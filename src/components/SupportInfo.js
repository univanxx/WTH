import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Divider from '@material-ui/core/Divider';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function SupportInfo() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Программы обучения для действующих предпринимателей Свердловского 
          областного Фонда поддержки предпринимательства
        </Title>     
      <Divider variant="middle" />
      <Divider variant="middle" />     
        <h3>Требования к заявителю</h3>
      <Divider variant="middle" />
      <Divider variant="middle" />
      <h4>Требования к заявителю:</h4>
       <p>Субъект малого и среднего предпринимательства зарегистрированный и <br/>
          осуществляющий деятельность на территории Свердловской области
        </p>
        <Divider variant="middle" />
    <h4>Размер предприятия :</h4>
    <p>Малый (1 - 100 чел.), средний (100 - 250 чел.)</p>
    <Divider variant="middle" />
    <h4>Этапы развития промышленного проекта/предприятия :</h4>
    <p>Поддержание рентабельности предприятия</p>
    <Divider variant="middle" />
    <Divider variant="middle" />
    <h3>Необходимые документы для предоставления меры поддержки</h3>
    <Divider variant="middle" />
      <Divider variant="middle" />
     <h4> Документы:</h4>
     <p>Документ, удостоверяющий личность</p>
     <p>Заявление на получение поддержки</p>
     </React.Fragment>
  );
}