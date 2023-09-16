function myFunction() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const idListHeader = {
    "#about": "About Stop Link 101", "#budget": "Budget Transparency",
    "#testimonials": "Testimonials", "#signs": "Where and When To Get A Sign", "#upcoming":"Upcoming Events"
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

    if (idList[idTargetIndex] == "#budget") {

        removeBudget();
        showBudget();
    }
    else
    {
        removeBudget();
    }

    document.getElementById('header').textContent = idListHeader[idList[idTargetIndex]];
    ListIndexes.forEach(other => {
        document.getElementById(other).hidden = true;
    }) 
}

const removeBudget = () =>
{
    let table = document.getElementById("budgetTable");
    if (table != null)
    {
        table.remove();
    }
}

const showBudget = () => {


    let table = document.createElement('table');
    table.className = "table table-dark table-bordered border-primary";
    table.id = "budgetTable"
    let tableHead = document.createElement("thead");
    let headerRow = document.createElement("tr");
    let CostHeader = document.createElement("th");
    let CostHeaderAmount = document.createElement("th");

    let RevenueHeaderAmount = document.createElement("th");

    CostHeader.scope = "col";
    CostHeader.textContent = "Months";
    CostHeaderAmount.textContent = "Cost Amount"
    CostHeaderAmount.scope = "col"; 

    RevenueHeaderAmount.scope = "col";
    RevenueHeaderAmount.textContent = "Revenue Amount";

    headerRow.appendChild(CostHeader);
    headerRow.appendChild(CostHeaderAmount);
    headerRow.appendChild(RevenueHeaderAmount);
    tableHead.appendChild(headerRow);
    table.appendChild(tableHead);
    const monthList = ["September", "October", "November", "December"];
    const costList = ["$200", "$500", "$1000", "$1150"];
    const revenueList = ["$0", "$500", "$2200", "$2100"];


    for (let i = 0; i < monthList.length; i++)
    {

        let tr = document.createElement('tr');

        let costCategory = document.createElement('td');
        let costCategoryAmount = document.createElement('td');
        let revenueCategoryAmount = document.createElement('td');
        costCategory.textContent = monthList[i];
        costCategoryAmount.textContent = costList[i];
        revenueCategoryAmount.textContent = revenueList[i];
        tr.appendChild(costCategory);
        tr.appendChild(costCategoryAmount);
        tr.appendChild(revenueCategoryAmount);

        table.appendChild(tr);
    }
    let targetElem = document.getElementById("#budget");
    targetElem.appendChild(table)
}