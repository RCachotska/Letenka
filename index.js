const flight = {
    id: '145c01af48dd00002715248e_0',
    dTimeUTC: '01/26/2025 @ 1:25pm (UTC)',
    aTimeUTC: '01/26/2025 @ 3:45pm (UTC)',
    duration: {
      departure: 8400,
      return: 0,
      total: 8400,
    },
    fly_duration: '2h 20m',
    flyFrom: 'PRG',
    cityFrom: 'Prague',
    cityCodeFrom: 'PRG',
    countryFrom: {
      code: 'CZ',
      name: 'Czechia',
    },
    flyTo: 'BCN',
    cityTo: 'Barcelona',
    cityCodeTo: 'BCN',
    countryTo: {
      code: 'ES',
      name: 'Spain',
    },
    distance: 1359.54,
    airline: 'FR',
    pnr_count: 1,
    technical_stops: 0,
    price: 36,
    bags_price: {
      1: 34.95,
      2: 69.91,
    },
    baglimit: {
      hand_width: 20,
      hand_height: 40,
      hand_length: 55,
      hand_weight: 10,
      hold_width: 81,
      hold_height: 119,
      hold_length: 119,
      hold_dimensions_sum: 319,
      hold_weight: 20,
    },
    availability: {
      seats: 2,
    },
    conversion: {
      EUR: 36,
    },
    quality: 66.66659,
  };

  // 1. Vypište do stránky název startovní a cílové země.

  document.body.innerHTML += "<p>Startovní země: " + flight.countryFrom.name + "</p>";
  document.body.innerHTML += "<p>Cílová země: " + flight.countryTo.name + "</p>";

  // 2. Uložte do separátní proměnné objekt udávající maximální rozměry zavazadel.
  const maximalniRozmeryZavazadel = flight.baglimit;

  // 3. Z objektu s rozměry zavazadel vytáhněte maximální povolené rozměry příručního zavazadla a vypište tyto rozměry opět jeden po druhém vypište do stránky.

  document.body.innerHTML += "<p>Maximální rozměry příručního zavazadla:" + "</p>";
  
  document.body.innerHTML += "<li>Šířka: " + flight.baglimit.hand_width + "</li>";
  document.body.innerHTML += "<li>Výška:  " + flight.baglimit.hand_height + "</li>";
  document.body.innerHTML += "<li>Délka:  " + flight.baglimit.hand_length + "</li>";
 

  //4. Vypište do stránky, kolik cestující zaplatí za druhé zavazadlo v českých korunách zaokrouhleno nahoru na celé koruny.

  const price2 = 69.91 ; 
  document.body.innerHTML += "<p>Cena za druhé zavazadlo: " + Math.round(price2) + " Kč" + '</p>';



