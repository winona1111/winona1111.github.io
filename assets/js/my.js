var url_path = new URL(window.location.href);

/* Dropdown Menu */
function detect() {
    var w = window.innerWidth;
    var nav_button = document.getElementById("nav-button");
    var nav_menu = document.getElementById("nav-menu");
    var wrapper = document.getElementById("dl-menu");

    if (w <= 768) {
        wrapper.style.width = "100px";
        document.getElementById("sec-shortcut").style.display = "none";
    }
}
detect();

/* Show selected class for each row item in the sections */
function addSelected(id) {
    var class_name = String("selected");

    for (let i=1 ; i<10; i++) {
        var _id = String("hover-row-" + i);
        if (_id === id) {
            var el = document.getElementById(id);
            if (el.classList.contains(class_name)) {
                el.classList.remove(class_name);
            } else {
                el.classList.add(class_name);
            }
        /* REMOVE FOR OTHERS */
        } else {
            var el = document.getElementById(_id);
            if (el) {
                el.classList.remove(class_name);
            }
        }
    }
}

/* Show details of each row item */
function expand(id) {
    var el = document.getElementById(id);
    if (el) {
        if (el.style.display === "contents") {
            el.style.display = "none";
        } else {
            el.style.display = "contents";
        }
    }
}

/* Show Sections */
function expand_section(id, showall=false, close=true) {

    // var sections = ["pub", "ski", "edu", "exp"];
    var sections = ['ski', 'edu', 'exp', 'act'];

    var highlight = "myhighlight";

    /* Mode */
    var counter = 0;
    var mode = false;
    for (element of sections) {
        console.log(element);

        // let el = document.getElementById(element);
        // if (!el) {
        //     console.error("Element not found:", element);
        //     continue;
        // }
        if (document.getElementById(element).style.display === "contents")
            counter += 1;
    }

    if (counter > 1)
        mode = true;

    /* Show all */
    if (showall) {
        for (let element of sections) {
            var sec =  document.getElementById(element + "-sec");           /*  Color       */
            var icon = document.getElementById(element + "-icon");          /*  Switch      */
            var content = document.getElementById(element);                 /*  Display     */
            var toggle = document.getElementById(element + "-detail");      /*  Display     */
            
            if (content) {
                if (sec) sec.classList.remove(highlight);
                if (element === "edu") document.getElementById("award-sec").classList.remove(highlight);
                if (element === "exp") document.getElementById("teach-sec").classList.remove(highlight);

                icon.classList.remove("fa-plus-square");
                icon.classList.add("fa-minus-square");

                content.style.display = "contents";
                if (toggle) toggle.style.display = "contents";
            }
        }

        // if (document.getElementById("exp-detail-1").classList.contains("fa-toggle-off"))
        //     show_detail("exp-detail", ['hide-1', 'hide-2', 'hide-3', 'hide-4', 'hide-5', 'hide-6', 'hide-7']);
        // if (document.getElementById("edu-detail-1").classList.contains("fa-toggle-off"))
        //     show_detail("edu-detail", ['edu-1', 'edu-2']);
    } else {
        for (let element of sections) {
            var sec =  document.getElementById(element + "-sec");           /*  Color       */
            var icon = document.getElementById(element + "-icon");          /*  Switch      */
            var content = document.getElementById(element);                 /*  Display     */
            var toggle = document.getElementById(element + "-detail");      /*  Display     */

            /* From button & From menu at normal mode */
            if (close || (!close && !mode)) {
                if (element === id) {
                    if (icon.classList.contains("fa-plus-square")) {
                        sec.classList.add(highlight);
                        icon.classList.remove("fa-plus-square");
                        icon.classList.add("fa-minus-square");
                    } else {
                        sec.classList.remove(highlight);
                        icon.classList.add("fa-plus-square");
                        icon.classList.remove("fa-minus-square");
                    }
                    // if (element === "edu") document.getElementById("award-sec").classList.add(highlight);
                    // if (element === "exp") document.getElementById("teach-sec").classList.add(highlight);

                    if (content.style.display === "none") content.style.display = "contents";
                    else content.style.display = "none";

                    if (toggle)
                        if (toggle.style.display === "none") toggle.style.display = "contents";
                        else toggle.style.display = "none";
                } else {
                    if (sec) sec.classList.remove(highlight);
                    // if (element === "edu") document.getElementById("award-sec").classList.remove(highlight);
                    // if (element === "exp") document.getElementById("teach-sec").classList.remove(highlight);
    
                    icon.classList.add("fa-plus-square");
                    icon.classList.remove("fa-minus-square");

                    content.style.display = "none";
                    if (toggle) toggle.style.display = "none";
                }

            /* From menu @ show all mode */
            } else if (mode) {
                if (element === id) {
                    sec.classList.add(highlight);
                    // if (element === "edu") document.getElementById("award-sec").classList.add(highlight);
                    // if (element === "exp") document.getElementById("teach-sec").classList.add(highlight);
                } else {
                    if (sec) sec.classList.remove(highlight);
                    // if (element === "edu") document.getElementById("award-sec").classList.remove(highlight);
                    // if (element === "exp") document.getElementById("teach-sec").classList.remove(highlight);
                }
            }
        }
    }
}

function show_detail(id, elements) {
    var icon = document.getElementById(id + "-1");
    if (icon) {
        if (icon.classList.contains("fa-toggle-off")) {
            icon.classList.remove("fa-toggle-off");
            icon.classList.add("fa-toggle-on");

            for (let el of elements) {
                var detail = document.getElementById(el);
                if (detail) {
                    detail.style.display = "contents";
                }
            }
        } else {
            icon.classList.add("fa-toggle-off");
            icon.classList.remove("fa-toggle-on");

            for (let el of elements) {
                var detail = document.getElementById(el);
                if (detail) {
                    detail.style.display = "none";
                }
            }
        }
    }
}

/* Only for Experience section */
function highlight(id) {
    var ids = [
        "all", "work", "proj",
        "row-exp-work1", "row-exp-work2",
        "row-exp-proj1", "row-exp-proj2", "row-exp-proj3", "row-exp-proj4"

    ];

    for (let element of ids) {
        var el = document.getElementById(element);
        
        if (!el) {
            console.warn(`Element with ID '${element}' not found.`);
            continue;
        }
        if (id === "all") {
            if (element !== "work" && element !== "proj") {
                el.classList.remove("txt-ignore");

                if (element.includes("link") && !(el.classList.contains("code-link"))) {
                    el.classList.add("code-link")
                }
            } else {
                el.classList.add("txt-ignore");
            }

        } else {
            if (element.includes(id)) {
                el.classList.remove("txt-ignore");

                if (element.includes("link")) {
                    el.classList.add("code-link")
                }
            } else {
                el.classList.add("txt-ignore");

                if (element.includes("link")) {
                    el.classList.remove("code-link")
                }
            }
        }
    }
}