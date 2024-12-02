function expand_world_menu() {
    var coll = document.getElementsByClassName("collapsible_world_menu");

    for (var i = 0; i < coll.length; i++) {
        var content = coll[i].nextElementSibling;

        // Toggle menu state
        if (content.style.maxHeight) {
            coll[i].classList.remove("active");
            content.style.maxHeight = null; // Collapse the menu
        } else {
            coll[i].classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px"; // Expand the menu
        }
    }
}

function expand_characters_menu() {
    var coll = document.getElementsByClassName("collapsible_characters_menu");

    for (var i = 0; i < coll.length; i++) {
        var content = coll[i].nextElementSibling;

        // Toggle menu state
        if (content.style.maxHeight) {
            coll[i].classList.remove("active");
            content.style.maxHeight = null; // Collapse the menu
        } else {
            coll[i].classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px"; // Expand the menu
        }
    }
}


function expand_media_menu() {
    var coll = document.getElementsByClassName("collapsible_media_menu");

    for (var i = 0; i < coll.length; i++) {
        var content = coll[i].nextElementSibling;

        // Toggle menu state
        if (content.style.maxHeight) {
            coll[i].classList.remove("active");
            content.style.maxHeight = null; // Collapse the menu
        } else {
            coll[i].classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px"; // Expand the menu
        }
    }
}


function setupMenuButtons() {
    const buttonMappings = {
        map: "map.html",
        nations: "under_construction.html",
        pantheon: "pantheon.html",
		blain: "under_construction.html",
		eldine: "under_construction.html",
		koda: "under_construction.html",
		zaku: "under_construction.html",
		npcs: "under_construction.html",
		gallery: "under_construction.html",
		playlists: "under_construction.html",
		guestbook: "guestbook.html"
    };

    for (const [id, url] of Object.entries(buttonMappings)) {
        const button = document.getElementById(id);
        if (button) {
            button.onclick = function () {
                location.href = url;
            };
        }
    }
}