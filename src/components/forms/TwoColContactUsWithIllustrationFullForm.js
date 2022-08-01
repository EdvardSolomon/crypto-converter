import React, { useCallback } from "react";
import tw from "twin.macro";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import CurrencyInput from "./CurrencySelect";
import {useState, useEffect,} from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from 'axios';

import './styles.css';
import { UseData } from "components/contexts/DataContext";

const Container = tw.div`relative`;
const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`


export default ({
  submitButtonText = "Создать заявку",
  formAction = '/order',
  formMethod = "get",
  
}) => {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('BTC');
  const [currency2, setCurrency2] = useState('USD');
  const [rates, setRates] = useState([]);
  const [exchangeRateCurrency, setExchangeRateCurrency] = useState('');
  const [agree, setAgree] = useState(true);   
  const cryptos = [{
    "name": "BTC",
  },
  {
    "name": "ETH",
  },
  {
    "name": "BNB",
  },
  {
    "name": "XRP",
  },
  {
    "name": "SOL",
  },
  ]
  const assetsList = ['USD', 'EUR'];
  const startCurrency = 'BTC';
  const maxLenghtFormat = 10;

  const run = useCallback(async (newCurrency) => {
    const response = await axios.get(
      `https://rest.coinapi.io/v1/exchangerate/${newCurrency}?invert=false&filter_asset_id=${assetsList.toString()}`,
      {
        headers: { 'X-CoinAPI-Key': '184E6F58-D4F5-465B-B23E-8AE1DF520C83' },  // '184E6F58-D4F5-465B-B23E-8AE1DF520C83' 05FE9068-59C3-4112-91CD-A679AA03AE8E  72DD5E4E-9EAF-4445-A8E6-307F68C39266
      }
    );
  
    const body = response.data;
    const { rates } = body;
  
    const assetRate = rates.map((r) => ({
      name: r.asset_id_quote,
      rate: r.rate,
    }));
   setRates(assetRate);
   
  }, []);
    

    useEffect(() => {

       run(startCurrency);
 
    }, [run]);

    useEffect (() =>{

      if(!rates.length == 0) {
        handleAmount1Change(amount1);
        setExchangeRateCurrency(findRate(currency2));
      }

    }, [rates])

    const exchangeRate  = `КУРС ОБМЕНА 1 ${currency1} = ${exchangeRateCurrency} ${currency2}`;
  

   function findRate(currency){
    const findRate = rates.find(fiat => fiat.name === currency);
    return format(findRate.rate, 2);
  }

  function digitValidation(inputValue){
    const str = inputValue.toString();
     const result = str.replace(/[^\d.]/g, '');
     if (result.length > maxLenghtFormat){
     const Nresult = result.substring(0, maxLenghtFormat);
     return Nresult
     }     return result
  }
  
  function format(number, symbols){
    return number.toFixed(symbols);
 }
 function handleAmount1Change(amount1){
  amount1 = digitValidation(amount1);
   setAmount2(format(amount1 * findRate(currency2), 2));
   setAmount1(amount1);
 }

 function handleCurrency1Change(currency1){
   run(currency1);
   setAmount2(format(amount1 * findRate(currency2), 2));
   setCurrency1(currency1);
   setExchangeRateCurrency(findRate(currency2));
 }

 function handleAmount2Change(amount2){
  amount2 = digitValidation(amount2);
   setAmount1(format(amount2 / findRate(currency2), 6));
   setAmount2(amount2);
 }

 function handleCurrency2Change(currency2){
   setAmount2(format(amount1 * findRate(currency2), 2));
   setCurrency2(currency2);
   setExchangeRateCurrency(findRate(currency2));
 }

const {register, handleSubmit, formState: {errors}} = useForm();
const {data, setValues} = UseData();
const history = useHistory();

 const onSubmit = (data) => {
  data.currency1 = currency1;
  data.currency2 = currency2;
  data.amount1 = amount1;
  data.amount2 = amount2;
  setValues(data);
  history.push("/order");
 }



  return (
    <Container className="form-container">
            <form onSubmit={handleSubmit(onSubmit)} method={formMethod} className="form">
              <div className="input-column">
                <div className="from-input">
                <span className="send">Отправляете:</span>
                <div className="input">
                <CurrencyInput {...register("currency1")} onAmountChange={handleAmount1Change} onCurrencyChange={handleCurrency1Change} currencies={cryptos} amount={amount1} currency={currency1}/>
                  </div>
                </div>
              </div>
              <span className="exchange-rate">{exchangeRate}</span>
              <div className="input-column">
                <div className="to-input">
                <span className="get">Получаете:</span>
                <div className="input">
                <CurrencyInput {...register("currency2")} onAmountChange={handleAmount2Change} onCurrencyChange={handleCurrency2Change} currencies={rates} amount={amount2} currency={currency2}/>
                  </div>
                </div>
              </div>
              <div className="input-column">
              <div className="input">
                <Input type="text" {...register("email")} placeholder="Email" required="required"/>
                </div>
              </div>
              <div className="input-column">
              <div className="input">
                <Input type="text" {...register("wallet")} placeholder="Номер кошелька" required="required"/>
                </div>
              </div>
              <div className="error-text">Минимальная сумма для конвертации 0.00219701 BTC</div>
              <div className="converter-content">
                <Input type="checkbox" {...register("policy")} defaultChecked='false' onClick={(e) => setAgree(e.target.checked)}/>
                <label>Я согласен на обработку персональных данных и принимаю правила обмена</label>
              </div>
              <SubmitButton type="submit" disabled={!agree}>{submitButtonText} </SubmitButton>
            </form>
    </Container>
  );
};
