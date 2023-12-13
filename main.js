const delay = ms => new Promise(res => setTimeout(res, ms));

const emailValidation = (DomElem, e) =>
{
    console.log(DomElem);
    let boolValue = e.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (boolValue == null)
    {
        DomElem.className = "form-control is-invalid";
    }
    else if (boolValue != null)
    {

        DomElem.className = "form-control is-valid";
    }
}


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
    window.scrollTo(0,0);
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
    "#about": "About", "#services": "Services",
    "#contact": "Contact"
};
const getContent = async (elementId) =>
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
    element.className = "fade-in-text";
    let header = document.getElementById('#header');
    header.innerHTML = `<b>${headerDict[idList[targetLink]]}<b>`;
    header.className = "text-center fade-in-text";


}


const emailSubmission = (stuff) =>
{
    console.log(stuff);
}