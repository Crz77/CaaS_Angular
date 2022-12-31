export class CartItem {
    constructor(
        public shopID?: string,
        public productID?: string,
        public cartID?: string,
        public quantity?: number,
        public price?: number
    ) {}
}
