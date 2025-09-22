import React from "react";
import { BiStar } from "react-icons/bi";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

function FoodCards() {
    return (
        <div className="w-full min-h-[calc(100vh-4rem)]">
            <FoodCard1
                foodtitle="Jira"
                foodname="Chawal"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro laudantium est maxime."
                ratings={[4.5, 5]}
                price={[200, 180]}
                img="/jira_rice.jpg"
            />
        </div>
    );
}

function FoodCard1({ foodtitle, foodname, description, ratings, price, img }) {
    return (
        <div className="relative mt-28 w-fit">
            <div className="mx-auto w-2xs p-4 bg-green-500 rounded-2xl mt-16 relative">
                <div className="relative pb-8">
                    <img src={img} alt="food img" className="-translate-y-3/4 rounded-3xl shadow-2xl absolute" />
                    <div className="absolute right-0 bg-[url('/price_circle.jpg')] aspect-square rounded-full flex flex-col items-center justify-center bg-cover w-24 text-green-400">
                        <span className="font-extrabold uppercase ">price</span>
                        <span className="text-2xl  font-bold">{price[1]}</span>
                        <span>
                            <strike>{price[0]}</strike>
                        </span>
                    </div>
                </div>
                <span className="font-thin font-[cursive] text-white">{foodtitle}</span>
                <h1 className="font-bold text-4xl pb-4 text-white">{foodname}</h1>
                <div className=" w-fit  flex items-center gap-1">
                    <p className="bg-white rounded-2xl p-2 flex items-center">
                        {[...Array(ratings[1])].map((_, index) => {
                            const starValue = index + 1;
                            return (
                                <span
                                    key={index}
                                    className="inline-block text-yellow-400"
                                >
                                    {ratings[0] >= starValue ? (
                                        <BsStarFill />
                                    ) : ratings[0] >= starValue - 0.5 ? (
                                        <BsStarHalf />
                                    ) : (
                                        <BiStar />
                                    )}
                                </span>
                            );
                        })}
                    </p>
                    <span className="pl-2 font-bold">{ratings[0]}</span>
                </div>
                <p className="mt-3 text-gray-50">{description}</p>
                <button className="cursor-pointer uppercase text-white bg-black px-4 py-1 rounded-3xl mt-3">order now</button>
            </div>
        </div>
    );
}

export default FoodCards;
