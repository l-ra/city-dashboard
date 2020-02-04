import React from 'react';
import './CityDashboard.css';

// svozovy plan: https://www.mestopacov.cz/assets/File.ashx?id_org=11721&id_dokumenty=2643


function CityDashboard(props) {

  const width = Number(props.width)
  const height = Number(props.height)

  const content=[
    {
      gridLbl: 'element',
      title:'Vodné/stočné',
      subtitle:<span>cena za m<sup>3</sup></span>,
      text:[
        <p>Pacov, Roučkovice: <span className='castka'>78,70 Kč</span></p>,
        <p>Velká Rovná, Zhoř, Bedřichov, Jetřichovec: <span className='castka'>46,70 Kč</span></p>,
        <p>Hrádek, Malá Rovná: <span className='castka'>34,70 Kč</span></p>,
        <p>Salačova Lhota, Důl, Velká Chyška, Zhořec, Nová Ves, Bratřice: <span className='castka'>24,98 Kč</span></p>,
        <p>Zdroj: <a href="https://www.mestopacov.cz/assets/File.ashx?id_org=11721&id_dokumenty=5262">Usnesení rady č. 202 ze 4.12.2019</a></p>
      ]
    },
    {
      gridLbl: 'element',
      title:'Poplatek za odpad',
      subtitle:'výše za rok',
      text:[
        <p>Trvale hlášená osoba: <span className='castka'>700 Kč</span></p>,
        <p>Neobývaná nemovitost: <span className='castka'>700 Kč</span></p>,
        <p>Splatnost: <span className='splatnost'>30.6.</span></p>,
        <p>Zdroj: <a href="https://www.mestopacov.cz/assets/File.ashx?id_org=11721&id_dokumenty=5297">vyhláška č. 6/2019</a></p>
      ]
    },
    {
      gridLbl: 'element',
      title:'Poplatek ze psa',
      subtitle:'výše za rok',
      text:[
        <p>první pes: <span className='castka'>300 Kč (důch. 100Kč.)</span></p>,
        <p>druhý a další pes: <span className='castka'>450 Kč (důch. 150 Kč)</span></p>,
        <p>první pes v bytovém domě: <span className='castka'>700 Kč (důch. 200 Kč)</span></p>,
        <p>druhý a další pes v bytovém domě: <span className='castka'>1050 Kč (důch. 300 Kč.)</span></p>,
        <p>první pes mimo Pacov: <span className='castka'>60 Kč</span></p>,
        <p>druhý a další pes mimo Pacov: <span className='castka'>90 Kč</span></p>,
        <p>Splatnost: <span className='splatnost'>30.6.</span></p>,
        <p>Zdroj: <a href="https://www.mestopacov.cz/assets/File.ashx?id_org=11721&id_dokumenty=5295">vyhláška č. 5/2019</a></p>
      ]
    },
    {
      gridLbl: 'element',
      title:'Daň z nemovitosti',
      subtitle:'',
      text:[
        <p>Pacov <span className='castka'></span></p>,
        <p>Pacov <span className='castka'></span></p>,
        
        <p>Zdroj: <a href="https://www.mestopacov.cz/assets/File.ashx?id_org=11721&id_dokumenty=2595">vyhláška č. 1/2008</a></p>
      ]
    },
  ]

  let colCount;
  if (width<751) colCount = 1
  else if (width<1201) colCount = 2
  else colCount = 4   

  const cols = []
  for (var colIdx = 0; colIdx < colCount; colIdx++ ){
    cols[colIdx]=[]
  }

  const items = content.forEach((v,idx)=>{
    let colIdx = idx % colCount;
    const text = v.text.map((t, txtIdx)=>(typeof(t)==="string"?<p key={txtIdx}>{t}</p>:t))
    cols[colIdx].push(
      <div className={v.gridLbl} key={idx} > 
        <h1>{v.title}</h1>
        <h2>{v.subtitle}</h2>
        {text}
      </div>
    )
  })

  const colsElms = []
  for (var colIdx = 0; colIdx < colCount ; colIdx++ ){
    colsElms.push(<div className="contentColumn" style={ { "grid-column-start": colIdx, "grid-column-end": colIdx+1 } }>{cols[colIdx]}</div>)
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="title" style={ { "display":"flex" , "align-items":"center"} }>
          <div style={{ 'flex-grow':'1'}}>
            <h1>Smart.Pacov.City</h1>
            <h2>přehled praktických informací o městě Pacově</h2>
            <p>Údaje jsou platné pro aktuální rok 2020. [{props.width}x{props.height}]</p>
          </div>
          <div style={{ 'flex-grow':'none'}}>
            <img src="https://pacov.city/img/social-logo.png" style={ { 'max-height': '8ex'} } alt="logo"/>
          </div>
        </div>

        {colsElms}
      </div>


    </div>
  );
}

export default CityDashboard;
