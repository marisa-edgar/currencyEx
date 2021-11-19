import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from "./currency.js";

$(document).ready(function(){
  $('currencyConvert').click(function() {
    const number = $('number:' + number);
    $('#currencyConvert').val("");

    let promise = CurrencyService.getCurrency();
    promise.then(function(response) {
      const body =JSON.parse(response);
      const currencyConverter = new CurrencyService.converter(body, number);

      let Currency =[];
      for (let i = 0; i < body.length; i++) {
        $('.showCurrency').html(Currency);
        $('.showConverter').html(currencyCovert);
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});