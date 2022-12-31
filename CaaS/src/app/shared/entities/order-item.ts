export class OrderItem {
    constructor(
        public shopID?: string,
        public orderID?: string,
        public itemID?: string,
        public productID?: string,
        public itemName?: string,
        public quantity?: number,
        public price?: number
    ) {}
}

