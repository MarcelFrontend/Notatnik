const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteAllBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

let myLeads = [];

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
    <li>
        <div class="contener">
            ${leads[i]}
            <button class="deleteAllBtn">Usuń</button>
        </div>
    </li>
    `;
    }
    ulEl.innerHTML = listItems;
    const deleteButtons = document.querySelectorAll(".deleteAllBtn");
    deleteButtons.forEach((button, i) => {
        button.addEventListener("click", () => {
            deleteLead(i);
        });
    });
}

deleteAllBtn.addEventListener("dblclick", () => {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

inputBtn.addEventListener("click", () => {
    if (inputEl.value != "") {
        myLeads.push(inputEl.value);
        inputEl.value = "";
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    }else{
        alert("You can't save an empty task.");
    }
});


function deleteLead(index) {
    myLeads.splice(index, 1);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
}