const txt = document.querySelector(".txt");
const save = document.querySelector(".save");
const list =  document.querySelector(".list");


let data = [];

function renderData(){
    let str = '';
    data.forEach(function(value, index){
    str+=`<li>${value.content}
    <input class="delete" type="button" data-num="${index}" value="刪除">
    </li>`
    })
    
    const list = document.querySelector(".list");
    list.innerHTML = str;
}
//新增待辦
save.addEventListener('click', function(e){
    if(txt.value==''){
     alert("請輸入內容");
     return;
    };
    let obj = {};
    obj.content = txt.value;
    data.push(obj);
    renderData();
 })
 
 //刪除待辦
 list.addEventListener('click', function(e){
if(e.target.getAttribute("class")!=="delete"){
    alert("此處無效")
return;
}
let num = e.target.getAttribute("data-num");
console.log(num);
data.splice(num,1);
renderData();
 })