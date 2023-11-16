let arr=[];
let ul= document.querySelector('ul');
function save() {
    console.time("time");
    let str=document.getElementById('insert').value;
    if(str==""){
        document.getElementById('insert').style.boxShadow="0px 0px 20px red";
        document.getElementById('error').style.visibility="visible";
    }
    else if(str!==""){
        document.getElementById('insert').style.boxShadow="none";
        document.getElementById('error').style.visibility="hidden";
        let li= document.createElement('li');
        ul.insertBefore(li, ul.childNodes[0]);
        let task=document.createElement('p');
        task.textContent=str;
        li.append(task);
        let done=document.createElement('button');
        done.className="done";
        li.append(done);
        let tick=document.createElement('i');
        tick.className="fa-solid fa-check fa-lg";
        done.append(tick);
        let remove=document.createElement('button');
        remove.className="remove";
        li.append(remove);
        let cross=document.createElement('i');
        cross.className="fa-solid fa-xmark fa-lg";
        remove.append(cross);
        document.getElementById('insert').value="";
        let d= document.getElementsByClassName('done');
        for(let i=0; i<d.length; i++){
            d[i].addEventListener('click', function(){
                this.parentElement.firstElementChild.setAttribute("style", "text-decoration: line-through");
                // this.parentElement.setAttribute("style", "background-color: rgba( 0 , 255 , 0 , 0.6)" , "color: #fff");

            })
        }
        let rem= document.getElementsByClassName('remove');
        for(let i=0; i<rem.length; i++){
            rem[i].addEventListener('click', function(){
                this.parentElement.remove();
            })
        }
    }
    console.timeEnd("time");
}