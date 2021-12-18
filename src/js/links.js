export class Link {
    constructor(code, original, shorten) {
        this.code = code
        this.original = original
        this.shorten = shorten
        this.memory = []
    }

    copy(shorten) {
        navigator.permissions.query({name: "clipboard-write"})
        .then(result => {
            if(result.state === "granted" || result.state === "prompt") {
                this.updateClipboard(shorten)
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    updateClipboard(value) {
        navigator.clipboard.writeText(value)
        .then(() => {
            $("#shorten").text("Copied!")
            setTimeout(() => {
                $("#shorten").text("Shorten it!")
            }, 2000);
        }, () => {
            console.log("copy failed!");
        })
    }

    saveData() {
        let linkDetails = [this]
        let inStorage = JSON.parse(localStorage.getItem("links"))
        if(inStorage.length >= 3) {
            inStorage.shift()
        }
        inStorage.push(linkDetails)
        localStorage.setItem("links", JSON.stringify(inStorage))

        console.log(inStorage);
    }
}

/*
let save = {[{
    code: Zw1354,
    original: www.alex.com,
    shorten: r3.w2sgF.com
}]}

*/