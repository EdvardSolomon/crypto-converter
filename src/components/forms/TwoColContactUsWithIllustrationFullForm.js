import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import CurrencyInput from "./CurrencySelect";
import {useState} from 'react';

import './styles.css';

const Container = tw.div`relative`;
const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`


export default ({
  submitButtonText = "Создать заявку",
  formAction = "#",
  formMethod = "get",
  
}) => {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('UAH');
  const rates =  {
        "EUR": 1,
        "PLN": 4.741905,
        "RUB": 59.369406,
        "UAH": 37.38135,
        "USD": 1.021408,
    };
  const exchangeRate = `КУРС ОБМЕНА 1 ${currency1} = ${format(1  * rates[currency2] / rates[currency1])} ${currency2}`;
  
  function format(number){
    return number.toFixed(2);
 }

 function handleAmount1Change(amount1){
   setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
   setAmount1(amount1);
 }

 function handleCurrency1Change(currency1){
   setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
   setCurrency1(currency1);
 }

 function handleAmount2Change(amount2){
   setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
   setAmount2(amount2);
 }

 function handleCurrency2Change(currency2){
   setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
   setCurrency2(currency2);
 }



  return (
    <Container className="form-container">
            <Form action={formAction} method={formMethod} className="form">
              <div className="input-column">
                <div className="from-input">
                <span className="send">Отправляете:</span>
                <div className="input">
                <CurrencyInput onAmountChange={handleAmount1Change} onCurrencyChange={handleCurrency1Change} currencies={Object.keys(rates)} amount={amount1} currency={currency1}/>
                  </div>
                </div>
              </div>
              <span className="exchange-rate">{exchangeRate}</span>
              <div className="input-column">
                <div className="to-input">
                <span className="get">Получаете:</span>
                <div className="input">
                <CurrencyInput onAmountChange={handleAmount2Change} onCurrencyChange={handleCurrency2Change} currencies={Object.keys(rates)} amount={amount2} currency={currency2}/>
                  </div>
                </div>
              </div>
              <div className="input-column">
              <div className="input">
                <Input type="text" name="subject" placeholder="ФИО получателя" />
                </div>
              </div>
              <div className="input-column">
              <div className="input">
                <Input type="text" name="wallet" placeholder="Номер кошелька" />
                </div>
              </div>
              <div className="error-text">Минимальная сумма для конвертации 0.00219701 BTC</div>
              <div className="converter-content">
                <Input type="checkbox" name="policy" />
                <label>Я согласен на обработку персональных данных и принимаю правила обмена</label>
              </div>
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
    </Container>
  );
};
