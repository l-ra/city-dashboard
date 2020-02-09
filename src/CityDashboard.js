import React from 'react';
import './CityDashboard.css';

// svozovy plan: https://www.mestopacov.cz/assets/File.ashx?id_org=11721&id_dokumenty=2643


function CityDashboard(props) {

  const width = Number(props.width)
  const height = Number(props.height)
  const smlouvy = props.smlouvy

  let colCount;
  if (width < 751) colCount = 1
  else if (width < 1201) colCount = 2
  else colCount = 4

  const colWidthCss = `${0.9 * 100 / colCount}vw`

  const content = [
    {
      gridLbl: 'element',
      title: 'Vodné/stočné',
      subtitle: <span>cena za m<sup>3</sup></span>,
      text: [
        <p>Pacov, Roučkovice: <span className='castka'>78,70 Kč</span></p>,
        <p>Velká Rovná, Zhoř, Bedřichov, Jetřichovec: <span className='castka'>46,70 Kč</span></p>,
        <p>Hrádek, Malá Rovná: <span className='castka'>34,70 Kč</span></p>,
        <p>Salačova Lhota, Důl, Velká Chyška, Zhořec, Nová Ves, Bratřice: <span className='castka'>24,98 Kč</span></p>,
        <p>Zdroj: <a href="https://www.mestopacov.cz/assets/File.ashx?id_org=11721&id_dokumenty=5262">Usnesení rady č. 202 ze 4.12.2019</a></p>
      ]
    },
    {
      gridLbl: 'element',
      title: 'Poplatek za odpad',
      subtitle: 'výše za rok',
      text: [
        <p>Trvale hlášená osoba: <span className='castka'>700 Kč</span></p>,
        <p>Neobývaná nemovitost: <span className='castka'>700 Kč</span></p>,
        <p>Splatnost: <span className='splatnost'>30.6.</span></p>,
        <p>Zdroj: <a href="https://www.mestopacov.cz/assets/File.ashx?id_org=11721&id_dokumenty=5297">vyhláška č. 6/2019</a></p>
      ]
    },
    {
      gridLbl: 'element',
      title: 'Poplatek ze psa',
      subtitle: 'výše za rok',
      text: [
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
      title: 'Daň z nemovitosti',
      subtitle: 'koeficient',
      text: [
        <p>Pacov: <span className='castka'>1,6</span></p>,
        <p>Bedřichov, Jetřichovec, Roučkovice, Velká Rovná, Zhoř: <span className='castka'>1,0</span></p>,

        <p>Zdroj: <a href="https://www.mestopacov.cz/assets/File.ashx?id_org=11721&id_dokumenty=2595">vyhláška č. 1/2008</a></p>
      ]
    },
    {
      gridLbl: 'element',
      title: 'Poplatek za užívání veřejného prostranství',
      subtitle: <span>cena za m<sup>2</sup> za den</span>,
      text: [
        <p>výkopy, stavby a skládky: <span className="castka">1 Kč</span></p>,
        <p>zařízení pro poskytování služeb: <span className="castka">2 Kč</span></p>,
        <p>zařízení pro prodej: <span className="castka">20 Kč</span></p>,
        <p>zařízení pro prodej o pouti: <span className="castka">100 Kč</span></p>,
        <p>zařízení pro prodej řemeslných výrobků o pouti: <span className="castka">30 Kč</span></p>,
        <p>umístění atrakcí o pouti: <span className="castka"></span></p>,
        <p>Zdroj: <a href="https://www.mestopacov.cz/assets/File.ashx?id_org=11721&id_dokumenty=4143">vyhláška č. 1/2019</a></p>
      ]
    },

    {
      gridLbl: 'element',
      title: 'Výjímky z nočního klidu',
      subtitle: 'pro rok 2019',
      text: [
        <p><b>Probíhá příjem požadavků pro vyhlášku pro rok 2020</b></p>,
        'úplné zrušení nočního klidu:',
        'na Silvestra 31.12.2019-1.1.2020',
        'o pouti 27.9.-29.9.2019',
        'noční klid od 1:00 - 6:00',
        '27.-28.7. - Noční hasičská soutěž o pohár starosty',
        '31.8-1.9. - Loučení s létem',
        '6.-7.7, 12.-13.7., 3.-4.8., 17.-18.8., 23.-24.8., 7.-8.9 - koncerty Na Maštálkách',
        <p>Zdroj: <a href="https://www.mestopacov.cz/assets/File.ashx?id_org=11721&id_dokumenty=4948">vyhláška č. 3/2019</a></p>
      ]
    },

    {
      gridLbl: 'element',
      title: 'Úřední hodiny',
      subtitle: 'městský úřad Pacov',
      text: [
        <img src={process.env.PUBLIC_URL + '/uredni-hodiny.png'} style={{ maxWidth: colWidthCss }} alt="schéma úředních hodin úřadu" />,
        <p>Zdroj: <a href="https://www.mestopacov.cz/">webové stránky města</a></p>
      ]
    },
    {
      gridLbl: 'element',
      title: 'Počet obyvatel města',
      subtitle: 'k 1.1.2019',
      text: [
        <p style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignContent: 'center', textAlign: "center" }}>
          <span>celkem obyvatel</span>
          <span style={{ fontSize: '300%' }}>4758</span>
          <span>průměrný věk</span>
          <span style={{ fontSize: '150%' }}>44 let</span>
          <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: "1ex" }}>
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              <span>muži</span>
              <span style={{ fontSize: '150%' }}>2333</span>
              <span>průměrný věk</span>
              <span style={{ fontSize: '120%' }}>43 let</span>
            </span>
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              <span>ženy</span>
              <span style={{ fontSize: '150%' }}>2425</span>
              <span>průměrný věk</span>
              <span style={{ fontSize: '120%' }}>46 let</span>
            </span>
          </span>
        </p>,
        <p>Zdroj: <a href="https://www.czso.cz/csu/czso/pocet-obyvatel-v-obcich-za0wri436p">ČSÚ</a></p>
      ]
    },
    {
      gridLbl: 'element',
      title: 'Školství',
      subtitle: 'přehled organizací',
      text: [
        'Mateřská škola Za Branou',
        'Mateřská škola Jatecká',
        'Církevní mateřská škola Jonáš',
        'Základní škola',
        'Základní umělecká škola',
        'Gymnázium',
        <p>Zdroj: <a href="https://www.mestopacov.cz/skolstvi/ms-1109/p1=1109">web města</a></p>
      ]
    },

    {
      gridLbl: 'element',
      title: 'Sociální služby',
      subtitle: 'přehled organizací',
      text: [
        'Dům sociálních služeb',
        'Centrum pro seniory',
        'Farní charita',
        'Občanská poradna',
        <p>Zdroj: <a href="https://www.mestopacov.cz/katalog%2Dsocialnich%2Dsluzeb/ms-2640/p1=2640">web města</a></p>
      ]
    },

    {
      gridLbl: 'element',
      title: 'Souhrnné zadlužení',
      subtitle: 'cizí zdroje města',
      text: [
        <img src={process.env.PUBLIC_URL + '/cizi-zdroje-celkem.png'} style={{ maxWidth: colWidthCss }} alt="graf míry zadlužení" />,
        <p>Zdroj: <a href="https://monitor.statnipokladna.cz/analyza/##query=uq_41a67636-0eed-40dd-88a7-556f3c767af3">monitor státní pokladnny</a></p>
      ]
    },

    {
      gridLbl: 'element',
      title: 'Poslední usnesení rady',
      subtitle: 'přehled',
      text: [
        'rada města jedná pravidleně každých 14 dnů'
      ]
    },

    {
      gridLbl: 'element',
      title: 'Poslední usnesení zastupitelstva',
      subtitle: 'přehled',
      text: [
        'připravujeme',
      ]
    },

    {
      gridLbl: 'element',
      title: 'Příští zasedání zastupitelstva',
      subtitle: 'odhad',
      text: [
        'příští zasedání zastupitelstva by mělo proběhnout nejpozději 16.3.2020'
      ]
    },

    {
      gridLbl: 'element',
      title: 'Novinky v projektech města',
      subtitle: 'poslední události v připravovaných a běžících projektech',
      text: [
        'připravujeme'
      ]
    },
    {
      gridLbl: 'element',
      title: 'Základní kontaktní údaje',
      subtitle: 'kontaktní údaje města',
      text: [
        'Městský úřad Pacov, nám. Svobody 1, 395 01 Pacov',
        <p>tel: <a href="tel:+420565455111">565 455 111</a>, <a href="tel:+420565455133">565 455 133 (zámek)</a>, <a href="tel:+420565455155">565 455 155 (radnice)</a></p>,
        <p>email: <a href="mailto:posta@mestopacov.cz">posta@mestopacov.cz</a></p>,
        'datová schránka: xbtbhcm',
        'IČO: 00248789 , DIČ: CZ00248789',
        <p><a href="https://www.mestopacov.cz">https://www.mestopacov.cz</a></p>,
        <p>Zdroj: <a href="https://www.mestopacov.cz/vismo/o_utvar.asp?id_org=11721&id_u=10">web města</a></p>
      ]
    },

  ]

  if (smlouvy) {
    const radky = smlouvy.map((sml, idx)=>{
      const datumUzavreni = sml.datumUzavreni.substring(0,10)
      let hodnota = "N/A" 
      if (sml.hodnotaVcetneDph) {
        hodnota = `${sml.hodnotaVcetneDph}` 
      } else if (sml.hodnotaBezDph) {
        hodnota = `${sml.hodnotaBezDph}` 
      } else {
        hodnota = "Hodnota neznámá"
      }




      return (
        <span className='smlouva' key={idx}>
        <a className="sml-ikona" href={`https://www.hlidacstatu.cz/Detail/${sml.identifikator.idVerze}`}><i className="material-icons" style={{ color: "gray", cursor: "pointer" }} title="detial">search</i> </a>
        <span className="sml-column1">
          <span className="sml-emp">{datumUzavreni}</span>
          <span>{hodnota}</span>
        </span>
        <span className='sml-column2'>
          <span className="sml-emp">{sml.Prijemce[0].nazev}</span>
          <span>{sml.predmet}</span>
        </span>
      </span>
    )})
    const smlouvyElement= {
      gridLbl: 'element',
      title: 'Poslední uzavřené smlouvy',
      subtitle: 'přehled',
      text: [
        ...radky,
        <p>Zdroj: <a href="https://www.hlidacstatu.cz/hledat?Q=ico%3A00248789">Hlídač státu</a></p>
      ]
    }
    content.push(smlouvyElement)
  }


  const cols = []
  for (var colIdx = 0; colIdx < colCount; colIdx++) {
    cols[colIdx] = []
  }

  const items = content.forEach((v, idx) => {
    let colIdx = idx % colCount;
    const text = v.text.map((t, txtIdx) => (typeof (t) === "string" ? <p key={txtIdx}>{t}</p> : t))
    cols[colIdx].push(
      <div className={v.gridLbl} key={idx} >
        <div className="element-heading">
          <div className="element-titles">
            <h1>{v.title}</h1>
            <h2>{v.subtitle}</h2>
          </div>
          <div className="element-icons">
            <span><i className="material-icons" style={{ color: "gray", cursor: "pointer" }} title="oblibené">star_border</i></span>
            <span><i className="material-icons" style={{ color: "gray", cursor: "pointer" }} title="líbí se mi">favorite_border</i></span>
            <span><i className="material-icons" style={{ color: "gray", cursor: "pointer" }} title="sledovat">visibility</i></span>
          </div>
        </div>
        {text}
      </div>
    )
  })

  const colsElms = []
  for (var colIdx = 0; colIdx < colCount; colIdx++) {
    colsElms.push(<div className="contentColumn" style={{ "grid-column-start": colIdx, "grid-column-end": colIdx + 1 }}>{cols[colIdx]}</div>)
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="title" style={{ "display": "flex", "alignItems": "center" }}>
          <div style={{ 'flexGrow': '1' }}>
            <h1>Smart.Pacov.City</h1>
            <h2>přehled praktických informací o městě Pacově</h2>
            <p>Údaje jsou platné pro aktuální rok 2020. </p>
          </div>
          <div style={{ 'flexGrow': 'none' }}>
            <img src="https://pacov.city/img/social-logo.png" style={{ 'maxHeight': '8ex' }} alt="logo" />
          </div>
        </div>

        {colsElms}
      </div>


    </div>
  );
}

export default CityDashboard;
