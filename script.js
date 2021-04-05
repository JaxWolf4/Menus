var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display");
var end = document.body.querySelector(".end");
var num = document.body.querySelector(".num");
var buttons = 0
var clicks = 1
var counter = 0

var pages = [
  {
    name:"Home",
    content: "Home"
   },
  {
    name:"About",
    content:"About me"
  },
  {
    name:"Interact",
    content:"Counter Value: "+counter
  },
]


for(var i=0; i<pages.length; i++){
  createPage(pages[i]);
}

function createPage(pg){
  var button = document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name);
    contentWrites(pg.content, pg.name);
    contentWritess(pg.content, pg.name);
  })
  button.innerHTML=pg.name;
  nav.appendChild(button);
}

function add(pls, one){
if (one){
  clicks = 1;
}
}

function homePage(){
  var header = document.createElement("h1");
  header.innerHTML = "Home";
  display.appendChild(header);
}

function interactPage(){
  var button = document.createElement("button");
  button.innerHTML = "Add One";
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(button);
  button.addEventListener ("click", function() {
  var plus = counter = counter + 1;
  display.innerHTML = "Counter Value: " + counter;
  add(plus, true);
});
 //  display.innerHTML = "Counter Value: "+counter;
 //  document.body.querySelector(".num").addEventListener("click", function(){
 // var plus = counter = counter + 1;
 //  display.innerHTML = "Counter Value: " + counter;
 //  add(plus, true);})
}

function aboutPage(){
  var header = document.createElement("h1");
  var small = document.createElement("h3");
  header.innerHTML = "About";
  small.innerHTML = "Jackson"
  display.appendChild(header);
  display.appendChild(small);
}

function contentWrite(wd,pg){
  display.innerHTML="";
  if(pg!=="About"){
  display.innerHTML=wd;
 }else{     
  aboutPage()
}}

function contentWrites(wd,pg){
  display.innerHTML="";
  if(pg!=="Interact"){
  display.innerHTML=wd;
 }else{     
  interactPage()
}}

function contentWritess(wd,pg){
  display.innerHTML="";
  if(pg!=="About"){
  display.innerHTML=wd;
 }else{     
  aboutPage()
}}


contentWrite(pages[0].content, "")
contentWrites(pages[0].content, "")
contentWritess(pages[0].content, "")