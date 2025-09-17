import Form_01 from "../components/forms/Form_01.jsx";
import Navbar01 from '../components/navbars/Navbar01.jsx'
import Navbar02 from '../components/navbars/Navbar02.jsx'

export const NavData = [
    {
        name: "Mobile Navbar",
        description:
            "This is a mobile navbar with blue theme. Design have 2 gradient circles with rounded border navbar and five icons also.it has active navlink transition. this is create with react and Tailwind CSS. ",
        img: "/navbars/nav01.png",
        path: "nav01",
        Comp:Navbar01,
    },
    {
        name: "Second Navbar",
        description:
            "This is a mobile navbar with blue theme. Design have 2 gradient circles with rounded border navbar and five icons also.it has active navlink transition. this is create with react and Tailwind CSS. ",
        img: "#",
        path: "nav02",
        Comp:Navbar02,
    },
];

export const FormData = [ {
        name: "Form Design",
        description:
            "this is create with react and Tailwind CSS.",
        img: "/forms/form01.png",
        path: "form01",
        Comp:Form_01,
    },];

export const pagesData = [
    {
        text: "Navbars",
        description: "Explore amazing navbars.",
        path: "/category/navbars",
        data:NavData,
    },
    {
        text: "Forms",
        description: "Get Respnsive & Modern Forms.",
        path: "/category/forms",
        data:FormData,
    },
    {
        text: "Cards",
        description: "Watch Out These Next Lavel Cards.",
        path: "/category/cards",
        data:[]
    },
    {
        text: "Search-Boxes",
        description: "View search boxes.",
        path: "/category/search-boxes",
        data:[]
    },
    {
        text: "Footer",
        description: "choose footers according to yours choice.",
        path: "/category/footer",
        data:[]
    },
];
