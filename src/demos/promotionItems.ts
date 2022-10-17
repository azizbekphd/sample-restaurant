import PromotionItem from "../models/PromotionItem";

const promotionItems: Array<PromotionItem> = [
    {
        id: 1,
        image: require("../assets/img/promotion_item_1.png"),
        productName: "Excelsa",
        discount: "20%",
        start: "20/04/20",
        end: "06/09/2020",
    },
    {
        id: 2,
        image: require("../assets/img/promotion_item_2.png"),
        productName: "Liberica",
        discount: "20%",
        start: "20/04/20",
        end: "06/09/2020",
    },
    {
        id: 3,
        image: require("../assets/img/promotion_item_3.png"),
        productName: "Excelsa",
        discount: "20%",
        start: "20/04/20",
        end: "06/09/2020",
    },
    {
        id: 4,
        image: require("../assets/img/promotion_item_4.png"),
        productName: "MockUp",
        discount: "20%",
        start: "20/04/20",
        end: "06/09/2020",
    },
]

export default promotionItems;