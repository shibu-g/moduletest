let createpost=document.querySelector('.right');
let popup=document.querySelector('.create');
let edit=document.querySelector('.edit');
let editcross=document.querySelector('.editcross');
let createcross=document.querySelector('.createcross');
let editblog;
let fleg=false;
let publish=document.querySelector('.publish');
let blogs=document.querySelector('.blogs');
let savepost=document.querySelector('.savepost');
let deletepost=document.querySelector('.deletepost');
let down=document.querySelector('.down');
let editid=-1;

let arr=[];
function visible(){
    popup.classList.add('visible');
    down.classList.add('opa');
}
function hidecreate(){
    popup.classList.remove('visible');
    down.classList.remove('opa');
}
function hideedit(){
  edit.classList.remove('visible');
  down.classList.remove('opa');
}
function visibleedit(){
    edit.classList.add('visible');
    down.classList.add('opa');
    // alert("hi");
}
function addpost(){
    
  
   let header=document.querySelector("#heading").value;
   document.querySelector("#heading").value="";
   let post=document.querySelector("#text").value;
   document.querySelector("#text").value="";
   if(header==""||post==""){
    alert("Please Enter Proper Heading and blog");
    
   }
   else{
    let arrheader=header;
    let arrpost=post;
    let id=arr.length+1;
    let obj={arrheader,arrpost,id};
    arr.push(obj);
   let blog=document.createElement('div');
   blog.classList.add('blog');
   let divheading=document.createElement('div');
   divheading.classList.add('blogheading');
   divheading.innerText=header;
   blog.appendChild(divheading);
   let divpost=document.createElement('div');
   divpost.classList.add('blogtext');
   divpost.innerText=post;
   blog.appendChild(divpost);
   let divbtns=document.createElement('div');
   divbtns.classList.add('blogbtns');
   
   let btns=document.createElement('div');
   btns.classList.add('blogbtn');
//    btns.innerHTML="<button class="blogedit">Edit Post</button>
//    <button class="blogdelete">Delete Post</button>";
     btns.innerHTML='<button class="blogedit" onclick="editclicked(' +id+ ')"">Edit Post</button>';
     btns.innerHTML+='<button class="blogdelete" onclick="deleteclicked(' +id+ ')"">Delete Post</button>';
   divbtns.appendChild(btns);
   blog.appendChild(divbtns);
   let time=document.createElement('div');
   time.classList.add('time');
 let date=new Date();
 let currdate=date.toLocaleDateString();
 let currtime=date.toLocaleTimeString();
 time.innerText=""+"Created at "+" "+currdate+" at"+currtime;
 divbtns.appendChild(time);
 blog.appendChild(divbtns);
blogs.appendChild(blog);
//  console.log(obj);
  start();
hidecreate();
}
}
function deleteclicked(id){
    delete arr[id-1];
    rander();
}

function editclicked(id){
    // alert("hi");
    //  console.log(id);
     let currobj=arr[id-1];
     editid=id-1;
    //  console.log(currobj.arrpost)
//    console.log(currobj.arrheader);
    editblogfun(currobj);
}

function editblogfun(obj){
    let editheader=document.querySelector('.edittext');
    let oldpost=document.querySelector('.edittextbox');
    editheader.value=obj.arrheader;
    oldpost.innerText=obj.arrpost;
    let getobj=getting(obj);
    arr[obj.id-1]=getobj;
    visibleedit();
    // changecontent(obj);
}
function getting(obj){
     let newobj=arr[editid];
     let editheader=document.querySelector('.edittext');
     let oldpost=document.querySelector('.edittextbox');
     newobj.arrheader=editheader.value;
     newobj.arrpost=oldpost.value;
     return newobj;
}
function start(){
    // editblog=document.querySelector('.blogedit');
    // editblog.addEventListener('click',visibleedit);
}
function rander(){
    blogs.innerHTML="";
   arr.forEach(element =>{
        let blog=document.createElement('div');
   blog.classList.add('blog');
   let divheading=document.createElement('div');
   divheading.classList.add('blogheading');
   divheading.innerText=element.arrheader;
   blog.appendChild(divheading);
   let divpost=document.createElement('div');
   divpost.classList.add('blogtext');
   divpost.innerText=element.arrpost;
   blog.appendChild(divpost);
   let divbtns=document.createElement('div');
   divbtns.classList.add('blogbtns');
   
   let btns=document.createElement('div');
   btns.classList.add('blogbtn');
//    btns.innerHTML="<button class="blogedit">Edit Post</button>
//    <button class="blogdelete">Delete Post</button>";
     btns.innerHTML='<button class="blogedit" onclick="editclicked(' +element.id+ ')"">Edit Post</button>';
     btns.innerHTML+='<button class="blogdelete" onclick="deleteclicked(' +element.id+ ')"">Delete Post</button>';
   divbtns.appendChild(btns);
   blog.appendChild(divbtns);
   let time=document.createElement('div');
   time.classList.add('time');
 let date=new Date();
 let currdate=date.toLocaleDateString();
 let currtime=date.toLocaleTimeString();
 time.innerText=""+"Created at "+" "+currdate+" at"+currtime;
 divbtns.appendChild(time);
 blog.appendChild(divbtns);
blogs.appendChild(blog);
    });
}
function save(){
//   console.log(editid);
  let newobj=arr[editid];
  let editheader=document.querySelector('.edittext');
  let oldpost=document.querySelector('.edittextbox');
  newobj.arrheader=editheader.value;
  newobj.arrpost=oldpost.value;
  arr[editid]=newobj;
  hideedit();

  rander();
  
}
function deletesave(){
   delete arr[editid];
   hideedit();
   rander();
}
createpost.addEventListener('click',visible);
editcross.addEventListener('click',hideedit);
createcross.addEventListener('click',hidecreate);
publish.addEventListener('click',addpost);
savepost.addEventListener('click',save);
deletepost.addEventListener('click',deletesave);