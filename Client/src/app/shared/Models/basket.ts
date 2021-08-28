import { v4 as uuidv4 } from 'uuid';

export interface IBasket {
    id: string;
    items: IBasksetItem[];
    clientSecret?: string;
    paymentIntentId?: string;
    deliveryMethodId?: number;
    shippingPrice?: number;
}
export interface IBasksetItem {
    id: number;
    productName: string;
    price: number;
    quantity: number;
    pictureUrl: string;
    brand: string;
    type: string;
}

export class Basket implements IBasket {
    id = uuidv4();
    items: IBasksetItem[] = [];
}

export interface IBasketTotals {
    shipping:   number;
    subtotal:   number;
    total:  number;
}
