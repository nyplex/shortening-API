import { fetchAPI } from "./fetchAPI";
import { Link } from "./links";

export let run = () => {
    Link.displayData()
    $("#shorten").on("click", () => {
        const url = $('#original-url-input').val()
        fetchAPI(url)
    })
}