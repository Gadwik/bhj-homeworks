const handler = (e) => {
    e.preventDefault();
    
    if (e.target.tagName == "A") {
        const tootlipActive = e.target.getElementsByClassName("tooltip_active").item(0)
        if (tootlipActive) {
            tootlipActive.remove()
        } else {
            const tootlipActiveBox = Array.from(document.getElementsByClassName("tooltip_active"))
            tootlipActiveBox.forEach(element => element.remove())
        
            e.target.insertAdjacentHTML("beforeEnd", `<div class='tooltip tooltip_active'>${e.target.title}</div>`);
            document.getElementsByClassName("tooltip_active").item(0).setAttribute("style", `left: ${e.target.getBoundingClientRect().left}px`);
        }  
    }   
}

window.addEventListener("click", handler);