import axios from "axios"

const YOUR_APP_KEY = "aaac24182f6406f70287a0a7f48cacadf" //TODO put the right id
const YOUR_APP_ID = "aa1ed68"                           //TODO put the right id

export const getRecipies = async(query)=>{
    const url =  `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    axios.get(url)
}