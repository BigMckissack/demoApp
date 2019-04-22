let list = [];

function refreshList(){
    let newOL = document.createElement("ol");
    for(var i=0; i<list.length; i++){
        let elem = document.createElement("li");
        elem.setAttribute('id', list[i]);
        elem.innerText = list[i];
        newOL.appendChild(elem);
    }
    let listHTML = document.getElementById('list');
    if(listHTML){
        listHTML.innerHTML = newOL.innerHTML;
    }
};

document.getElementById('tForm').addEventListener('submit', function(e){
    e.preventDefault();
    const input = document.forms['tForm'].inp.value;
    list.push(input);
    refreshList();
});