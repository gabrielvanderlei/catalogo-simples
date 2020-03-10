import React, { useState, useEffect, useCallback } from 'react';
import translator from '../i18n/i18n';

import Header from '../components/Header';
import Landing from '../components/Landing';
import Catalog from '../components/Catalog';
import Footer from '../components/Footer';
import { useContext } from 'react';
import Call from '../components/Call';

export default () => {
  let [todayOptions, setTodayOptions] = useState({});
  const [todayOptionsTotalPrice, setTodayOptionsTotalPrice] = useState(0);

  let [adds, setAdds] = useState({});
  const [addsPrice, setAddsPrice] = useState(0);

  let handleTodayOption = ({ name, price, selected}) => {
    let isToAdd = !selected;

    if(isToAdd){
      todayOptions[name] = price;
      setTodayOptionsTotalPrice(todayOptionsTotalPrice + price);
    } else {
      delete todayOptions[name];
      setTodayOptionsTotalPrice(todayOptionsTotalPrice - price);
    }

    setTodayOptions(todayOptions);
  }
  
  let handleAdds = ({ name, price, selected}) => {
    let isToAdd = !selected;

    if(isToAdd){
      adds[name] = price;
      setAddsPrice(addsPrice + price);
    } else {
      delete adds[name];
      setAddsPrice(addsPrice - price);
    }

    setAdds(adds);
  }

  return (
    <div>
      <Header {...translator.app} />
      <Landing  {...translator.landing}  />

      <div class="col">
        <div class="choose">Escolha uma das opções do dia</div>
        {translator.todayOptions.map((item) => <Catalog onSelect={handleTodayOption}  {...item}/> )}
      </div>
      
      <div class="col">
        <div class="choose">Escolha um dos acompanhamentos</div>
        {translator.add.map((item) => <Catalog onSelect={handleAdds} {...item}/> )}
      </div>

      <Call />
      <Footer {...translator.footer} />
    </div>
  )
};
