import { displayErrors, removeErrors } from "./displayErrors"
import { Link } from "./links";

const api = "https://api.shrtco.de/v2/shorten?url=";

export let fetchAPI = (url) => {
    const fullAPI = api + url
    fetch(fullAPI, {
        method: "GET"
    })
    .then((response) => {
        return response.json()
    })
    .then(data => {
        handleData(data)
    })
    .catch((errors) => {
        console.log(errors);
    })
}

let handleData = (data) => {
    removeErrors()
    if(data.ok) {
        const {code, original_link, short_link2} = data.result
        const link = new Link(code, original_link, short_link2)
        link.copy(link.shorten)
        link.saveData()
    }else{
        displayErrors(data)
    }
}