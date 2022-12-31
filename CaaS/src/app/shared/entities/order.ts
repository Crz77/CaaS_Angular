export class Order {
    constructor(
        public shopID?: string,
        public orderID?: string,
        public customerID?: string,
        public orderDate?: string,
        public creditCardNumber?: string,
        public items?: [],
        public sumOfDiscounts?: number,
        public totalPrice?: number,
        public finalPrice?: number,
    ) {}
}
