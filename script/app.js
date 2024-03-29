var navElement = null;
var observerProjects;
var observerTools;

function init() {
    //window.scrollTo(0, 0);

    var nav = document.getElementById("nav-elements");
    navElement = nav.getElementsByTagName("a");
    changeNavColor(0);

    var refProjects = document.getElementsByClassName('project');
    var refTools = document.getElementsByClassName('img-languages');
    //var refContact = document.getElementsByClassName('img-contact');

    for(var i = 0; i < refProjects.length; i++)
        refProjects[i].classList.remove("project-transition");

    observerProjects = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("project-transition");
            return;
        }

        entry.target.classList.remove("project-transition");
        });
    });

    for(var i = 0; i < refProjects.length; i++)
        observerProjects.observe(refProjects[i]);

    observerTools = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                for(var i = 0; i < refTools.length; i++)
                    refTools[i].classList.add("project-transition");
                return;
            }

            for(var i = 0; i < refTools.length; i++)
                refTools[i].classList.remove("project-transition");
        })
    });

    observerTools.observe(refTools[0]);
}

function changeNavColor(idx) {
    navElement[idx].style.color = "rgb(29, 210, 210)";

    for(var i = 1; i < navElement.length; i++)
        navElement[(idx + i) % navElement.length].style.color = "white";
}

