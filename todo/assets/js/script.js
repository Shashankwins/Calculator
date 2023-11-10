
let arr=[];
let ul= document.querySelector('ul');

function save() {
    let str=document.getElementById('insert').value;
    let li= document.createElement('li');
    ul.append(li);
    let parentBox= document.createElement('div');
    li.append(parentBox);
    parentBox.className="parentBox";
    let content= document.createElement('div');
    parentBox.append(content);
    content.className="content";
    let listBtn= document.createElement('div');
    parentBox.append(listBtn);
    listBtn.className="listBtn";
    let task= document.createElement('p');
    content.append(task);
    task.innerText=str;
    let icon1= document.createElement('span');
    listBtn.append(icon1);
    icon1.className="icon1";
    let tick= document.createElement('i');
    icon1.append(tick);
    tick.className="fa-solid fa-check fa-lg";
    let icon2=document.createElement('span');
    listBtn.append(icon2);
    icon2.className="icon2";
    let a=document.querySelector('span');
    let remove= document.createElement('i');
    icon2.append(remove);
    remove.className="fa-solid fa-xmark fa-lg";
    document.getElementById('insert').value="";
}




