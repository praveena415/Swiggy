import { Filter, Search } from "lucide-react";
import { useEffect, useState } from "react";
import RestaurantCard, { withRestaurantPromoted } from "./RestaurantCard";
import { Link } from "react-router-dom";

export default function Body() {
  const [resList, setResList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const RestaurantPromoted = withRestaurantPromoted(RestaurantCard)

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let data = await fetch("/data.json");
    let res = await data.json();
    // console.log(res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setResList(
      res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Hungry? We got you covered
          </h1>
          <p className="text-gray-600">
            Discover the best food & drinks in Bangalore
          </p>
        </div>
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="w-full md:w-1/2 relative">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <div className="pl-4 ">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full p-3 outline-none  text-gray-700"
                placeholder="Enter search query"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="bg-orange-500 text-white px-6 py-3"
                onClick={() => {
                  const filteredRes = resList.filter((ele) =>
                    ele.info.name.toLowerCase().includes(search.toLowerCase())
                  );
                  setFilteredRestaurants(filteredRes);
                }}
              >
                Search
              </button>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <button
              className="flex items-center gap-2 bg-white border border-gray-300 font-medium py-3 px-4 rounded-lg"
              onClick={() => {
                const filteredData = resList.filter(
                  (ele) => ele.info.avgRating > 4.4
                );
                setFilteredRestaurants(filteredData);
              }}
            >
              <Filter size={16} />
              <span>Top rated restaurants</span>
            </button>
          </div>
        </div>

        {/* restaurants grid */}

        {filteredRestaurants.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {filteredRestaurants.length} Restaurants to explore
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
              {filteredRestaurants.map((ele) => (
                 <Link key = {ele.info.id} to={`restaurant/${ele.info.id}`}
                  className="block transition duration-300 hover:-translate-y-1 hover:shadow-lg">  
                 {ele.info.avgRating >= 4.4 ? (
                  <RestaurantPromoted res={ele} />
                 ) : (<RestaurantCard res={ele}/>)} 
                 </Link>        
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
