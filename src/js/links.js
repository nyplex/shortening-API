export class Link {
    constructor(code, original, shorten) {
        this.code = code
        this.original = original
        this.shorten = shorten
    }

    saveData() {
        const linkDetails = this
        const ls = localStorage
        const link1 = ls.getItem("link1")
        const link2 = ls.getItem("link2")

        if(link1 == null || link1 == undefined) {
            ls.setItem("link1", JSON.stringify(linkDetails))
        }else if(link2 == null || link2 == undefined) {
            ls.setItem("link1", JSON.stringify(linkDetails))
            ls.setItem("link2", link1)
        }else{
            ls.setItem("link1", JSON.stringify(linkDetails))
            ls.setItem("link2", link1)
            ls.setItem("link3", link2)
        }
    }

    static displayData() {
        const ls = localStorage
        const links = [ls.getItem("link1"), ls.getItem("link2"), ls.getItem("link3")]
        $("#links-container").empty()
        links.forEach(link => {
            if(link == null) return
            link = JSON.parse(link)
            let html = `
            <div class="generated-link-container">
                <p class="original-link">${link.original}</p>
                <hr class="lg:hidden border-gray-300 w-8/12 my-4">
                <div class="new-link-container">
                    <p class="generated-link">${link.shorten}</p>
                    <button data-link="${link.shorten}" class="copy-btn btn">Copy</button>
                </div>
            </div>
            `;
            $("#links-container").append(html)
        });
    }

    listenForCopy() {
        $(".copy-btn").on("click", (e) => {
            const shorten = $(e.target).attr("data-link")
            navigator.permissions.query({name: "clipboard-write"})
            .then(result => {
                if(result.state === "granted" || result.state === "prompt") {
                    navigator.clipboard.writeText(shorten)
                    .then(() => {
                        $(e.target).text("Copied!")
                        setTimeout(() => {
                            $(e.target).text("Shorten it!")
                        }, 2000);
                    })
                }
            })
        })
    }
}
