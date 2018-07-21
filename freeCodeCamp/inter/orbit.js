function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
  
    for (let i = 0; i < arr.length; i++){
      let alt = arr[i].avgAlt;
      let op = Math.round(2 * Math.PI * Math.sqrt(Math.pow(alt+earthRadius,3)/GM));
   
      delete arr[i].avgAlt;
      arr[i].orbitalPeriod = op;
    }
    return arr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); // Will return [{name: "sputnik", orbitalPeriod: 86400}] 