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

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>АКЦИОНЕРНОЕ ОБЩЕСТВО "АНГСТРЕМ"</Title>
     <Divider variant="middle" />
          <p>СВЕДЕНИЯ О ПРЕДПРИЯТИИ ИЗ ЕСИА/ЕГРЮЛ</p>
      <Divider variant="middle" />
        <p>Полное наименование предприятия: АКЦИОНЕРНОЕ ОБЩЕСТВО "АНГСТРЕМ"</p>
        <p>Сокращенное наименование предприятия: АО "АНГСТРЕМ"</p> 
       <p>Тип предприятия:</p> 
        <p>ОГРН: 1027700140930</p>
        <p>ИНН: 7735010706</p>
        <p>КПП: 773501001</p>     
      <Divider variant="middle" />
        <p>ОТРАСЛЬ</p>
      <Divider variant="middle" />
        <p>ОКВЭД 2:  26.11 Производство элементов электронной аппаратуры</p>
        <p>Отрасль из справочника отраслей ГИСП: Радиоэлектронная промышленность</p>
      <Divider variant="middle" />
        <p>КОНТАКТНЫЕ ДАННЫЕ</p>
      <Divider variant="middle" />
        <p>Страна: Россия</p>
        <p>Регион: Москва</p>
        <p>Город: Зеленоград</p>
        <p>Адрес: 124460, ГОРОД МОСКВА, ГОРОД ЗЕЛЕНОГРАД, ПЛОЩАДЬ ШОКИНА, ДОМ 2, СТРОЕНИЕ 3</p>
      <Divider variant="middle" />       
        <p>Генеральный директор: </p>
        <p>ФИО ответственного лица: </p>
        <p>Телефон:+7 (499) 720-84-44 </p>
        <p>E-mail:malinovskiy@angstrem.ru</p>
        <p>www:www.angstrem.ru</p>
        
      <div>
      </div>
    </React.Fragment>
  );
}