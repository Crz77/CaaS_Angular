
export class Product {
    constructor(
        public shopID?: string,
        public productID?: string,
        public categoryID?: string,
        public ruleID?: string,
        public actionID?: string,
        public productName?: string,
        public description?: string,
        public link?: string,
        public isActive?: string,
        public price?: number,
        public picture?: string
    ) {}
}