import {CreditCardPayment} from "./CreditCardPayment";
import {PayPalPayment} from "./PayPalPayment";


export enum PaymentMethod{
    CreditCard,
    PayPal
}

export class PaymentFactory{
    create(method: PaymentMethod){
        switch(method){
            case PaymentMethod.CreditCard:
                return new CreditCardPayment();

                case PaymentMethod.PayPal:
                    return new PayPalPayment();


                    default:
                        throw new Error("Invalid Payment Method");
        }
    }
}