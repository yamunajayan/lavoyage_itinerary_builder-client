const thailandTrip = {
  itinerary: [
    {
      day: 1,
      plan: "Arrival in Bangkok - December is a great time to visit Bangkok due to cooler, less humid weather. Visit iconic spots like the Grand Palace, Wat Phra Kaew, and Wat Arun.",
      transportation:
        "Public transport options include taxis, Tuk-Tuks, and the Skytrain (BTS).",
    },
    {
      day: 2,
      plan: "Bangkok continued - Explore the Chatuchak Weekend Market, take a Chao Phraya River cruise, and visit Chinatown for unique experiences.",
      transportation:
        "Use the BTS Skytrain to navigate inner-city travel and avoid traffic.",
    },
    {
      day: 3,
      plan: "Travel to Phuket - Take a 1.5-hour flight from Bangkok or opt for a bus or train ride, which takes around 12-13 hours. Upon arrival, explore Old Town Phuket and visit the Big Buddha.",
      transportation:
        "Fly via domestic airlines like AirAsia or Thai Lion Air, or use buses/trains for longer travel.",
    },
    {
      day: 4,
      plan: "Phuket sightseeing - Enjoy Patong Beach, Freedom Beach, and water activities like snorkeling or kayaking.",
      transportation:
        "Rent a motorbike or car, or use Tuk-Tuks for travel around the city.",
    },
    {
      day: 5,
      plan: "Travel to Krabi - Take a ferry (2 hours) or bus (3-4 hours) from Phuket to Krabi. Relax at Ao Nang Beach after arrival.",
      transportation:
        "Ferries are a scenic option; buses offer a cheaper alternative.",
    },
    {
      day: 6,
      plan: "Krabi exploration - Visit Railay Beach and enjoy island hopping at the Four Islands (Chicken Island, Tup Island, Poda Island, Phra Nang Cave Beach).",
      transportation:
        "Long-tail boats are best for island hopping, while motorbikes or Tuk-Tuks work well for city travel.",
    },
    {
      day: 7,
      plan: "Departure - Depending on your flight time, visit the Emerald Pool or Hot Springs before heading to Krabi International Airport.",
      transportation:
        "Krabi Airport offers flights back to Bangkok and other international destinations.",
    },
  ],
  transportation: [
    {
      mode: "Domestic Flights",
      message:
        "Flights between cities like Bangkok, Phuket, and Krabi are fast and convenient. Airlines like AirAsia and Thai Airways are reliable options.",
      transportation: "Ideal for covering long distances between cities.",
    },
    {
      mode: "Buses",
      message:
        "Government and private buses connect major cities and towns. While slower, they're a budget-friendly option.",
      transportation: "Buses are good for overnight or long-distance travel.",
    },
    {
      mode: "Ferries",
      message:
        "Ferries operate between islands like Phuket and Krabi, offering scenic routes and comfortable travel.",
      transportation: "Ferries are the best way to travel between islands.",
    },
    {
      mode: "Tuk-Tuks and Motorbikes",
      message:
        "Tuk-Tuks are a quintessential way to explore Thai cities, while motorbikes offer flexibility and independence for shorter distances.",
      transportation: "Best for city travel and short-distance exploration.",
    },
  ],
  finalReminders: {
    safety:
      "Beware of scams in tourist-heavy areas. Use reputable transportation options and stay cautious in crowded places.",
    culturalEtiquette:
      "Dress modestly when visiting temples. Remove shoes before entering homes or temples.",
    dining:
      "Enjoy local street food, but be cautious with hygiene. Tipping is not common, but appreciated.",
  },
  idealTravelSeason: {
    bestMonths: ["November", "December", "January", "February"],
    decemberTravel: {
      isGoodMonth: true,
      message:
        "December is an excellent time to visit Thailand due to pleasant weather and fewer chances of rain. It's the peak tourist season, so expect more crowds, especially in popular areas like Bangkok and Phuket.",
    },
  },
};

const italyTrip = {
  itinerary: [
    {
      day: 1,
      plan: "Arrival in Rome - The Eternal City offers iconic landmarks like the Colosseum, Roman Forum, and Trevi Fountain. Start your day with a leisurely exploration of these historic sites.",
      transportation:
        "Public transportation options include buses, trams, and the metro. Taxis are available, but walking is ideal for exploring central Rome.",
    },
    {
      day: 2,
      plan: "Rome continued - Visit the Vatican City, including St. Peter's Basilica and the Sistine Chapel. End your day with a stroll through Piazza Navona and the Pantheon.",
      transportation:
        "Use the metro or buses for Vatican City. Walking is the best way to explore the surrounding areas.",
    },
    {
      day: 3,
      plan: "Travel to Florence - Enjoy a scenic train ride from Rome to Florence. Once in Florence, visit the Duomo, Piazza della Signoria, and Uffizi Gallery.",
      transportation:
        "Take a high-speed train (Frecciarossa or Italo) from Rome to Florence in about 1.5 hours. Walking or using local buses for Florence sightseeing.",
    },
    {
      day: 4,
      plan: "Florence continued - Explore more of Florence, including the Ponte Vecchio, Boboli Gardens, and Michelangelo's David at the Galleria dell'Accademia.",
      transportation:
        "Florence is very walkable, but buses are available for longer distances.",
    },
    {
      day: 5,
      plan: "Travel to Venice - Head to Venice by train and spend the day exploring St. Mark's Square, St. Mark's Basilica, and the Doge's Palace.",
      transportation:
        "Take a high-speed train from Florence to Venice (2 hours). In Venice, use water buses (vaporetti) to get around or walk through the winding streets.",
    },
    {
      day: 6,
      plan: "Venice continued - Enjoy a gondola ride, visit the Rialto Bridge, and explore the islands of Murano (for glass-making) and Burano (for colorful houses).",
      transportation:
        "Gondolas and water buses are the main forms of transportation within Venice. Ferries are available to the nearby islands.",
    },
    {
      day: 7,
      plan: "Departure - Depending on your flight time, relax in a café or visit the Venice Biennale art exhibition before heading to the airport.",
      transportation:
        "Take a water taxi or Alilaguna (water bus) to Venice Marco Polo Airport.",
    },
  ],
  transportation: [
    {
      mode: "Trains",
      message:
        "Italy's high-speed train network (Frecciarossa and Italo) connects major cities like Rome, Florence, and Venice efficiently.",
      transportation:
        "Trains are the fastest and most convenient way to travel between cities.",
    },
    {
      mode: "Buses",
      message:
        "Local buses operate within each city and connect to nearby towns, but walking is often preferred for city exploration.",
      transportation:
        "Buses and regional trains are available for local travel.",
    },
    {
      mode: "Car Rentals",
      message:
        "Car rentals are useful for trips to the Italian countryside or smaller towns, though not necessary within major cities like Rome, Florence, or Venice.",
      transportation:
        "Services like Hertz, Europcar, and Avis are widely available. An international driving permit is required.",
    },
  ],
  finalReminders: {
    safety: "Stay vigilant in crowded tourist areas to avoid pickpockets.",
    culturalEtiquette:
      "Respect local customs and dress appropriately when visiting religious sites.",
    dining:
      "Try authentic Italian cuisine at local trattorias, and remember, tipping is not mandatory in Italy.",
  },
  idealTravelSeason: {
    bestMonths: ["April", "May", "September", "October"],
    decemberTravel: {
      isGoodMonth: true,
      message:
        "December can be a great time to visit Italy, especially for those who enjoy festive Christmas markets, fewer tourists, and cooler weather. Rome and Florence are lively with holiday lights and events.",
    },
  },
};

export { thailandTrip, italyTrip };
