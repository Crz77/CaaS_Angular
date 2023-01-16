export class Cart {
    constructor(
        public shopID?: string,
        public cartID?: string,
        public totalPrice?: number,
        public sumOfDiscounts?: string,
        public finalPrice?: number,
        public expireDate?: string
    ) {}
}