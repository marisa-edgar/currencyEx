export default class currencyService {
  static getCurrency() {
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/key=${process.env.API_KEY}latest/USD`;
      request.onload =function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
  converter(body, number) {
    const ALL = parseFloat(body[0].price);
    const AMD = parseFloat(body[1].price);
    const AZN = parseFloat(body[2].price);
    const BYN = parseFloat(body[3].price);
    const BAM = parseFloat(body[4].price);
    const BGN = parseFloat(body[5].price);
    const HRK = parseFloat(body[6].price);
    const CZK = parseFloat(body[7].price);
    const DKK = parseFloat(body[8].price);
    const GEL = parseFloat(body[9].price);
    const HUF = parseFloat(body[10].price);
    const ISK = parseFloat(body[11].price);
    const CHF = parseFloat(body[12].price);
    const MDL = parseFloat(body[13].price);
    const MKD = parseFloat(body[14].price);
    const NOK = parseFloat(body[15].price);
    const PLN = parseFloat(body[16].price);
    const RON = parseFloat(body[17].price);
    const RUB = parseFloat(body[18].price);
    const RSD = parseFloat(body[19].price);
    const SEK = parseFloat(body[20].price);
    const CHF = parseFloat(body[21].price);
    const TRY = parseFloat(body[22].price);
    const UAH = parseFloat(body[23].price);
    const UAH = parseFloat(body[24].price);
    const GBP = parseFloat(body[25].price);
    const EUR = parseFloat(body[26].price);
  }
}