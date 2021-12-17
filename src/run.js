import { fetchAPI } from "./fetchAPI";

export let run = () => {
    $("#shorten").on("click", () => {
        const url = $('#original-url-input').val()
        fetchAPI(url)
    })
}