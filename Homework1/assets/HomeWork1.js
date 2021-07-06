// const playlist = [
//     { title: "song title", desc: "description" }
//   ];

const buttons = document.getElementById('button');
buttons.addEventListener("click", ()=>{
   alert('Playlist');
});
// let textarea = (title, desc) =>{
//     title = document.getElementById('Title');
//     desc = document.getElementById('Description');
//    title.value= textarea.join("\n");
// }
var title = ['songtitle'];
var msg = title.join("\n");
var area = document.getElementById("Title");
area.value= msg;

var desc = ['description'];
var msg = desc.join("\n");
var area = document.getElementById("Description");
area.value= msg;