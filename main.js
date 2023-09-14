function myFunction() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const idListHeader = {
    "#about": "About Link 101", "#budget": "Budget Transparency",
    "#testimonials": "Testimonials", "#signs": "How To Get A Sign", "#upcoming":"Upcoming Events"
};

const videoSrc = "https://www.youtube.com/embed/dGcw17aAutQ?si=VEUTpwFYFcF48BEx";

const showContent = (idName) => {
    let idTargetIndex = 0;
    let ListIndexes = [];
    const idList = Object.keys(idListHeader);
    idList.forEach(id => {
        if (id === idName)
        {
            idTargetIndex = idList.indexOf(id);
        }
        else
        {
            ListIndexes.push(id);
        }
    });
    const videoPlayer = document.querySelector("iframe");

    if (idTargetIndex == 2)
    {
         videoPlayer.setAttribute('src', 'https://www.youtube.com/embed/dGcw17aAutQ?si=VEUTpwFYFcF48BEx');
         document.getElementById(idList[idTargetIndex]).hidden = false;
    }
    else
    {
        videoPlayer.setAttribute('src', 'about:blank');
        document.getElementById(idList[idTargetIndex]).hidden = false;
    }
    document.getElementById('header').textContent = idListHeader[idList[idTargetIndex]];
    ListIndexes.forEach(other => {
        document.getElementById(other).hidden = true;
    }) 
}