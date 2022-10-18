import { ImageSourcePropType } from "react-native";

class PromotionItem {
    id!: number | string;
    image!: string | ImageSourcePropType;
    productName!: string;
    discount!: string;
    start!: string;
    end!: string;
}

export default PromotionItem;