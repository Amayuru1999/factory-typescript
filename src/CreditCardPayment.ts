import {Payment} from "./Payment";

export class CreditCardPayment implements Payment{
    pay(amount: number): void{
        console.log(`Paying ${amount} using Credit Card`);
    }
}