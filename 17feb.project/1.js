const search = document.querySelector("#search")
const sear = document.querySelector(".sear")
const container = document.querySelector(".container")
const buttons = document.querySelector(".buttons")
const prev = document.querySelector(".prev")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const next = document.querySelector(".next")

sear.addEventListener("click", () => {
 let userValue = search.value.toLowerCase();

    const value = [
        "Passion Flower",
        "Blue-Eyed Grass",
        "Weigela",
        "ABC",
        "DEF",
        "GHI",
        "Big-Leaf-Lantana"];
    const isMatch = value.some(item => //
        item.toLowerCase().includes(userValue)
    );
    if (!isMatch) {
        console.log("matched")
    }
    else {
        console.log("Not in a list")
    }
});

 


