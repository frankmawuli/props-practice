import kakum from './images/kakum.jpeg';
import capecoast from './images/capecoast.jpeg';
import mole from './images/mole.jpeg'
import wli from './images/wli.jpeg'
import ghana from './images/ghana_n.jpeg'
import beach from './images/busua.jpeg'
const ghanaTouristAttractions = [
  {
      id: 1,
      name: "Kakum National Park",
      description: "Kakum National Park is a dense tropical rainforest in southern Ghana. The park is home to over 40 species of mammals, including forest elephants, leopards, and various primates. One of its highlights is the Canopy Walkway, a series of suspended bridges that offer breathtaking views of the forest canopy.",
      location: "Central Region",
      imageUrl: kakum,
      website: "https://www.kakumnationalpark.org/",
      date: generateRandomDate()
  },
  {
      id: 2,
      name: "Cape Coast Castle",
      description: "Cape Coast Castle is a UNESCO World Heritage Site located in the Central Region of Ghana. Built by the Swedes in the 17th century, it later became a key trading post for the transatlantic slave trade. Today, it serves as a museum and memorial, providing insights into Ghana's history and the impact of the slave trade.",
      location: "Central Region",
      imageUrl: capecoast,
      website: "https://www.ghanamuseums.org/cape-coast-castle.php",
      date: generateRandomDate()
  },
  {
      id: 3,
      name: "Mole National Park",
      description: "Mole National Park is the largest wildlife reserve in Ghana, located in the northern part of the country. It offers opportunities for safari adventures, with the chance to spot elephants, buffalo, antelope, and various bird species. The park also features several watering holes where animals gather, providing excellent viewing opportunities.",
      location: "Northern Region",
      imageUrl: mole,
      website: "https://www.molenationalpark.org/",
      date: generateRandomDate()
  },
  {
      id: 4,
      name: "Wli Waterfalls",
      description: "Wli Waterfalls is the highest waterfall in Ghana, located near the village of Wli in the Volta Region. Surrounded by lush greenery and accessible via a scenic hike, the waterfall is a popular destination for nature lovers and hikers. Visitors can swim in the pool at the base of the falls and enjoy the serene atmosphere.",
      location: "Volta Region",
      imageUrl: wli,
      website: "https://www.ghanawaterfalls.com/wli-waterfall.php",
      date: generateRandomDate()
  },
  {
      id: 5,
      name: "Ghana National Museum",
      description: "The Ghana National Museum, located in Accra, showcases the cultural heritage of Ghana through its extensive collection of artifacts, archaeological finds, and historical exhibits. Visitors can explore exhibits on traditional Ghanaian crafts, ancient civilizations, and the country's colonial history.",
      location: "Greater Accra Region",
      imageUrl: ghana,
      website: "https://www.ghanamuseums.org/national-museum.php",
      date: generateRandomDate()
  },
  {
      id: 6,
      name: "Busua Beach",
      description: "Busua Beach is a picturesque stretch of coastline along Ghana's Atlantic coast, known for its golden sands and clear blue waters. It's a popular destination for beachgoers, surfers, and sun-seekers, offering opportunities for swimming, surfing, and relaxation. The beach is lined with resorts, restaurants, and bars, making it a vibrant hub for tourists.",
      location: "Western Region",
      imageUrl: beach,
      website: "https://www.visitbusuabeach.com/",
      date: generateRandomDate()
  }
];

function generateRandomDate() {
  const startDate = new Date('2022-01-01');
  const endDate = new Date();
  const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  return randomDate.toISOString().slice(0, 10);
}

export default ghanaTouristAttractions;
