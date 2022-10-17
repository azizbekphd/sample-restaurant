import { ImageSourcePropType } from "react-native";

class PromotionItem {
    id: number | string;
    image: string | ImageSourcePropType;
    productName: string;
    discount: string;
    start: string;
    end: string;
    constructor(
        id: number | string,
        image: string | ImageSourcePropType,
        productName: string,
        discount: string,
        start: string,
        end: string,
    ) {
        this.id = id;
        this.image = image;
        this.productName = productName;
        this.discount = discount;
        this.start = start;
        this.end = end;
    }
}

export default PromotionItem;