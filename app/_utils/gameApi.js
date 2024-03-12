const { default: axiosClient } = require("./axiosClient");

const getLatestGames = () => axiosClient.get("/games?populate=*")
const getGameById = (id) => axiosClient.get(`/games/${id}?populate=*`)
const getGameByCategory = (category) => axiosClient.get(`/games?filters[category][$eq]=${category}&populate=*`)


export default {
  getLatestGames,
  getGameById,
  getGameByCategory
}