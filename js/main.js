//tbody

function readJson() {
    const tableList = document.getElementById("typeFormsTableBody")
    fetch("/json/list.json").then((response) => response.json()).then(json => {
            json.forEach((element) => {
                const tr = document.createElement("tr")
                const tdTitle = document.createElement("td");
                const tdApi = document.createElement("a");
                const tdLastUpdate = document.createElement("td");
                const tdResponses = document.createElement("td");
                const tdEdit = document.createElement("a");
                const tdRemove = document.createElement("a");
                const removeIcon = document.createElement("i");
                const editIcon = document.createElement("i");
                const hrefLink = document.createElement("a");
                const editlink = document.createElement("a");


                removeIcon.className = "far fa-trash-alt";
                editIcon.className = "far fa-edit";


                tdRemove.appendChild(removeIcon);
                tdTitle.innerHTML = element.title;
                editlink.appendChild(editIcon);
                tdResponses.innerText = element.responses;
                tdLastUpdate.innerText = element.last_updated_at;
                hrefLink.setAttribute("href", element.href);
                editlink.setAttribute("href", "http://127.0.0.1:5500/edit/${element.id}")
                tdApi.innerText = element.href;
                tdEdit.appendChild(editlink);
                tdEdit.className = "text-center";
                tdRemove.className = "text-center";

                tdApi.appendChild(hrefLink);
                tableList.appendChild(tr)
                tr.appendChild(tdTitle);
                tr.appendChild(tdApi);
                tr.appendChild(tdLastUpdate);
                tr.appendChild(tdResponses);
                tr.appendChild(tdEdit);
                tr.appendChild(tdRemove);

                removeIcon.addEventListener("click", removeItem)
                tableList.appendChild(tr);
            });
        })
        .catch((error) => {
            console.log(error)
        })


};

function removeItem() {
    const buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
}

readJson();