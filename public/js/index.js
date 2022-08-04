const nodeBlock = document.getElementById("node-block")
const expressBlock = document.getElementById("express-block")
const npmBlock = document.getElementById("npm-block")
const mongodbBlock = document.getElementById("mongodb-block")
const nodeText = document.getElementById("node-text")
const expressText = document.getElementById("express-text")
const npmText = document.getElementById("npm-text")
const mongodbText = document.getElementById("mongodb-text") 

const blocks = document.getElementsByClassName("block")

nodeBlock.addEventListener("click", function() {
    const newBlocks = blocks

    if (this.classList.contains("main") != true) {
        for (i = 0; i < newBlocks.length; i++) {
            if (newBlocks[i] != this) {
                newBlocks[i].classList.add("hidden")
                this.classList.add("main")
            }
        }
        nodeText.classList.remove("hidden")
    } else {
        for (i = 0; i < newBlocks.length; i++) {
            if (newBlocks[i] != this) {
                newBlocks[i].classList.remove("hidden")
            }
            this.classList.remove("main")
        }
        nodeText.classList.add("hidden")
    }
    
})

expressBlock.addEventListener("click", function() {
    const newBlocks = blocks

    if (this.classList.contains("main") != true) {
        for (i = 0; i < newBlocks.length; i++) {
            if (newBlocks[i] != this) {
                newBlocks[i].classList.add("hidden")
                this.classList.add("main")
            }
        }
        expressText.classList.remove("hidden")
    } else {
        for (i = 0; i < newBlocks.length; i++) {
            if (newBlocks[i] != this) {
                newBlocks[i].classList.remove("hidden")
            }
            this.classList.remove("main")
        }
        expressText.classList.add("hidden")
    }
})

npmBlock.addEventListener("click", function() {
    const newBlocks = blocks

    if (this.classList.contains("main") != true) {
        for (i = 0; i < newBlocks.length; i++) {
            if (newBlocks[i] != this) {
                newBlocks[i].classList.add("hidden")
                this.classList.add("main")
            }
        }
        npmText.classList.remove("hidden")
    } else {
        for (i = 0; i < newBlocks.length; i++) {
            if (newBlocks[i] != this) {
                newBlocks[i].classList.remove("hidden")
            }
            this.classList.remove("main")
        }
        npmText.classList.add("hidden")
    }
})

mongodbBlock.addEventListener("click", function() {
    const newBlocks = blocks

    if (this.classList.contains("main") != true) {
        for (i = 0; i < newBlocks.length; i++) {
            if (newBlocks[i] != this) {
                newBlocks[i].classList.add("hidden")
                this.classList.add("main")
            }
        }
        mongodbText.classList.remove("hidden")
    } else {
        for (i = 0; i < newBlocks.length; i++) {
            if (newBlocks[i] != this) {
                newBlocks[i].classList.remove("hidden")
            }
            this.classList.remove("main")
        }
        mongodbText.classList.add("hidden")
    }
})