const delay = ms => new Promise(res => setTimeout(res, ms));

const transition = async (prevElem) =>
{
    const idList = Object.keys(headerDict);
    prevElem.className = "nav-item nav-link";
    let prevTarget = prevElem.id.replace("Link", "");
    let idx = idList.indexOf(prevTarget);
    var prevDiv = document.getElementById(idList[idx]);
    prevDiv.className = "hidden";

    document.getElementById('#header').className = "text-center hidden";
    await delay(1000);
}

const selectedLink = async (originatingElem, elementId) =>
{
    const prevElem = document.getElementsByClassName("selectedLink")[0];
    
    if (prevElem != null) {
        await transition(prevElem);
    }
    else
    {
        await transition(document.getElementById("#aboutLink"));
    }
    

    originatingElem.className = "nav-item nav-link selectedLink";
    getContent(elementId);
}
const headerDict = {
    "#about": "About", "#services": "Services", "#certifications": "Certifications",
    "#contact": "Contact"
};
const getContent = (elementId) =>
{
    
    let listIndexes = [];
    let targetLink = 0;

    const idList = Object.keys(headerDict);

    idList.forEach(id =>
    {
        if (id === elementId) {
            targetLink = idList.indexOf(id);

        }
        else {
            listIndexes.push(id);
        }
    });

    listIndexes.forEach(other => {

        let otherElem = document.getElementById(other);
        otherElem.hidden = true;

    })


    const element = document.getElementById(idList[targetLink]);
    element.hidden = false;
    element.className = "slide-up fade-in-text";
    let header = document.getElementById('#header');
    header.textContent = headerDict[idList[targetLink]];
    header.className = "text-center fade-in-text";

}