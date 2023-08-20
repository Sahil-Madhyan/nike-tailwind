import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Legend Essential 2",
        price: "₹10,390.12",
        rating: 4.5,
    },
    {
        imgURL: shoe5,
        name: "K-Swiss CR Terrati",
        price: "₹5,334.07",
        rating: 4.2,
    },
    {
        imgURL: shoe6,
        name: "Nike MD Runner 2 Suede 300",
        price: "₹4679.00",
        rating: 4.8,
    },
    {
        imgURL: shoe7,
        name: "New Balance MS247",
        price: "₹7999.00",
        rating: 4.4,
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Experience effortless shopping with our inclusive shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Indulge in hassle-free transactions with our reliable and secure payment alternatives."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our committed team is available to support you at every stage of your journey."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Aiden Mitchell',
        rating: 4.8,
        feedback: "The meticulous attention to even the finest aspects and the exceptional product quality went beyond what I anticipated. I wholeheartedly recommend it!"
    },
    {
        imgURL: customer2,
        customerName: 'Riya Patel',
        rating: 4.5,
        feedback: "The product went above and beyond my expectations, surpassing them in every way. I'm certainly looking forward to being a repeat customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];