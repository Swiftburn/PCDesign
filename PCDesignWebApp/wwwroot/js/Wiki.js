 function ToggleAccordion(id) {
        var panel = document.getElementById("panel" + id);
        var button = document.getElementById("article" + id);

        if (panel.style.maxHeight === "0px") {
            panel.style.maxHeight = "150px"; 
            panel.style.opacity = 1;
            button.classList.add("actived");
        } else {
            panel.style.maxHeight = "0";
            panel.style.opacity = 0;
            button.classList.remove("actived");
        }
    }