// dl-menu options
$(function() {
  $( '#dl-menu' ).dlmenu({
    animationClasses : { classin : 'dl-animate-in', classout : 'dl-animate-out' }
  });
});
// Need this to show animation when go back in browser
window.onunload = function() {};

// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// FitVids options
$(function() {
  $(".content").fitVids();
});

// All others
$(document).ready(function() {
    // zoom in/zoom out animations
    if ($(".container").hasClass('fadeOut')) {
        $(".container").removeClass("fadeOut").addClass("fadeIn");
    }
    if ($(".wrapper").hasClass('fadeOut')) {
        $(".wrapper").removeClass("fadeOut").addClass("fadeIn");
    }
    $(".zoombtn").click(function() {
        $(".container").removeClass("fadeIn").addClass("fadeOut");
        $(".wrapper").removeClass("fadeIn").addClass("fadeOut");
    });
    // go up button
    $.goup({
        trigger: 500,
        bottomOffset: 10,
        locationOffset: 20,
        containerRadius: 0,
        containerColor: '#fff',
        arrowColor: '#000',
        goupSpeed: 'normal'
    });
	$('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open. 
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });
});

var url_path = new URL(window.location.href);

/* Dropdown Menu */
// function detect() {
//     var w = window.innerWidth;
//     var nav_button = document.getElementById("nav-button");
//     var nav_menu = document.getElementById("nav-menu");
//     var wrapper = document.getElementById("dl-menu");

//     if (w <= 768) {
//         wrapper.style.width = "100px";
//         document.getElementById("sec-shortcut").style.display = "none";
//     }
// }
// detect();

// /* Show selected class for each row item in the sections */
// function addSelected(id) {
//     var class_name = String("selected");

//     for (let i=1 ; i<10; i++) {
//         var _id = String("hover-row-" + i);
//         if (_id === id) {
//             var el = document.getElementById(id);
//             if (el.classList.contains(class_name)) {
//                 el.classList.remove(class_name);
//             } else {
//                 el.classList.add(class_name);
//             }
//         /* REMOVE FOR OTHERS */
//         } else {
//             var el = document.getElementById(_id);
//             if (el) {
//                 el.classList.remove(class_name);
//             }
//         }
//     }
// }

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

    var sections = ['ski'];
    // var sections = ["pub", "ski", "edu", "exp"];
    var highlight = "myhighlight";

    /* Mode */
    var counter = 0;
    var mode = false;
    for (element of sections)
        // console.log(document.URL);
        console.log(element);
        // console.log(document.getElementById(element));
        // console.log("2");
        // console.log(document.getElementById(element).style);
        // console.log("3");
        // console.log(document.getElementById(element).style.display);

        if (document.getElementById(element).style.display === "contents")
            counter += 1;
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
                    if (element === "edu") document.getElementById("award-sec").classList.add(highlight);
                    if (element === "exp") document.getElementById("teach-sec").classList.add(highlight);

                    if (content.style.display === "none") content.style.display = "contents";
                    else content.style.display = "none";

                    if (toggle)
                        if (toggle.style.display === "none") toggle.style.display = "contents";
                        else toggle.style.display = "none";
                } else {
                    if (sec) sec.classList.remove(highlight);
                    if (element === "edu") document.getElementById("award-sec").classList.remove(highlight);
                    if (element === "exp") document.getElementById("teach-sec").classList.remove(highlight);
    
                    icon.classList.add("fa-plus-square");
                    icon.classList.remove("fa-minus-square");

                    content.style.display = "none";
                    if (toggle) toggle.style.display = "none";
                }

            /* From menu @ show all mode */
            } else if (mode) {
                if (element === id) {
                    sec.classList.add(highlight);
                    if (element === "edu") document.getElementById("award-sec").classList.add(highlight);
                    if (element === "exp") document.getElementById("teach-sec").classList.add(highlight);
                } else {
                    if (sec) sec.classList.remove(highlight);
                    if (element === "edu") document.getElementById("award-sec").classList.remove(highlight);
                    if (element === "exp") document.getElementById("teach-sec").classList.remove(highlight);
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
        "all", "rs", "se",
        "row-exp-rs1", "row-exp-rs2", "row-exp-rs3", "row-exp-rs4",
        "row-exp-se1", "row-exp-se2",
        "link-se-iot", "link-rs-ir", "link-rs-most",
        "tag-se1-1", "tag-se1-2", "tag-se1-3", "tag-se1-4", "tag-se1-5", "tag-se1-6",
        "tag-rs1-1", "tag-rs1-2", "tag-rs1-3", "tag-rs1-4",
        "tag-rs2-1", "tag-rs2-2", "tag-rs2-3",
        "tag-rs3-1", "tag-rs3-2", "tag-rs3-3", "tag-rs3-4", "tag-rs3-5",
        "tag-rs4-1", "tag-rs4-2", "tag-rs4-3", "tag-rs4-4", "tag-rs4-5",

    ];

    for (let element of ids) {
        var el = document.getElementById(element);

        if (id === "all") {
            if (element !== "rs" && element !== "se") {
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