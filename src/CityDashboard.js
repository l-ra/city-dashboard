import React from 'react';
import './CityDashboard.css';

// svozovy plan: https://www.mestopacov.cz/assets/File.ashx?id_org=11721&id_dokumenty=2643


function CityDashboard() {

  const content=[
    {
      gridLbl: 'title',
      title:'Smart.Pacov.City',
      subtitle:'praktické informace o městě Pacově přehledně',
      text:['Údaje jsou platné pro aktuální rok 2020.']
    },
 
    {
      gridLbl: 'element',
      title:'Vodné/stočné',
      subtitle:<span>cena za m<sup>3</sup></span>,
      text:[
        'Pacov, Roučkovice: 78,70 Kč',
        'Velká Rovná, Zhoř, Bedřichov, Jetřichovec: 46,70 Kč',
        'Hrádek, Malá Rovná: 34,70 Kč', 
        'Salačova Lhota, Důl, Velká Chyška, Zhořec, Nová Ves, Bratřice: 24,98 Kč'
      ]
    },
    {
      gridLbl: 'element',
      title:'Poplatek za odpad',
      subtitle:'výše za rok',
      text:[
        'Trvale hlášená osoba: 700 Kč',
        'Neobývaná nemovitost: 700 Kč',
        'Splatnost: 30.6.'
      ]
    },
    {
      gridLbl: 'element',
      title:'Poplatek ze psa',
      subtitle:'výše za rok',
      text:[
        'první pes: 300 Kč (důch. 100Kč.)',
        'druhý a další pes: 450 Kč (důch. 150 Kč)',
        'první pes v bytovém domě: 700 Kč (důch. 200 Kč)',
        'druhý a další pes v bytovém domě: 1050 Kč (důch. 300 Kč.)',
        'první pes mimo Pacov: 60 Kč',
        'druhý a další pes mimo Pacov: 90 Kč',
        'Splatnost: 30.6.'
      ]
    },
    {
      gridLbl: 'element',
      title:'Poslední uzavřené smlouvy',
      subtitle:'přehled',
      text:[
        '21.2.2020, Pacovská lesní, 40 000 Kč',
        '21.2.2020, Pacovská lesní, 40 000 Kč',
        '21.2.2020, Pacovská lesní, 40 000 Kč',
        '21.2.2020, Pacovská lesní, 40 000 Kč'
      ]
    }
  ]

  const items = content.map((v,idx)=>{
    const text = v.text.map((t, txtIdx)=>(<p key={txtIdx}>{t}</p>))
    return <div className={v.gridLbl} key={idx}>
      <h1>{v.title}</h1>
      <h2>{v.subtitle}</h2>
      {text}
    </div>
  })



  return (
    <div className="container">
      {items}
    </div>
  );
}

export default CityDashboard;
