import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({res}) => {
    const {cloudinaryImageId, name, cuisines, avgRating, sla, areaName} = res?.info;
    return (
        <div className="restaurant-card rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 ">
            <div className="relative h-52 overflow-hidden">
                <img className="w-full h-full object-cover" src={`${CDN_URL+cloudinaryImageId}`} alt={name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    {/* offer badge */}
                    {res?.info?.aggregatedDiscountInfoV3?.header && (
                        <div className="absolute bottom-3 left-3 text-white font-bold text-xl">
                            {res?.info?.aggregatedDiscountInfoV3?.header}
                        </div>
                    )}
                </div>
            </div>
            {/* restaurant details */}
            <div  className="p-3">
                    <h3 className="font-bold text-xl truncate" title={name}>{name}</h3>
                    {/* rating and time */}
                    <div className="flex items-center mt-1 mb-2">
                        <div className="flex items-center-gap-1">
                            <div className="bg-green-600 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center text-md ">
                                <span>★</span>
                            </div>
                            <span className="ml-1.5">{avgRating}</span>
                        </div>
                        <span className="mx-2 text-gray-800">•</span>
                        <span className="text-gray=800 font-semibold">{sla.slaString}</span>
                    </div>
                    {/* cuisines */}
                    <p className="text-gray-500 text-sm truncate">{cuisines.join(", ")}</p>
                    <p className="text-gray-500 text-sm mt-1">{areaName}</p>
            </div>
            
        </div>
    )
}
//hof for promoted restaurants
export const withRestaurantPromoted = (RestaurantCard)=>{
    return (props)=>(
        <div className="relative">
            <div className="absolute top-0 left-0 bg-black text-white px-2 py-1 z-10 m-2 rounded font-medium text-sm">Promoted</div>
            <RestaurantCard {...props}/>
        </div>
    )
}


export default RestaurantCard