import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({res}) => {
    const {cloudinaryImageId, name, cuisines, avgRating, sla} = res?.info;
    return (
        <div className="restaurant-card rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 ">
            <div className="relative h-52 overflow-hidden">
                <img className="w-full h-full object-cover" src={`${CDN_URL+cloudinaryImageId}`} alt="" />
            </div>
            
        </div>
    )
}
export default RestaurantCard