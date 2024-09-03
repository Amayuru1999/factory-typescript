import {PaymentFactory, PaymentMethod} from "./PaymentFactory";

const factory=new PaymentFactory();

const payment = factory.create(PaymentMethod.CreditCard);
payment.pay(100);