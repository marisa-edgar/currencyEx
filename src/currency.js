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
    const 
  }
}