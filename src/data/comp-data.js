import navData from "./nav-data.js";
import formData from "./form-data.js";
import cardData from "./card-data.js";
import searchBoxData from "./search-box-data.js";
import footerData from "./footer-data.js";

const componentsData = [
    {
        text: "Navbars",
        description: "Explore amazing navbars.",
        path: "/category/navbars",
        data: navData,
    },
    {
        text: "Forms",
        description: "Get Respnsive & Modern Forms.",
        path: "/category/forms",
        data: formData,
    },
    {
        text: "Cards",
        description: "Watch Out These Next Lavel Cards.",
        path: "/category/cards",
        data: cardData,
    },
    {
        text: "Search-Boxes",
        description: "View search boxes.",
        path: "/category/search-boxes",
        data: searchBoxData,
    },
    {
        text: "Footer",
        description: "choose footers according to yours choice.",
        path: "/category/footer",
        data: footerData,
    },
];

export default componentsData;
