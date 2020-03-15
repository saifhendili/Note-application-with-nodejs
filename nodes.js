const fs=require('fs');
var fetchn=()=>{
try{
return JSON.parse(fs.readFileSync('notes.txt'))
}catch(err){
return []
}
}
function help() {
  console.log('node app.js list \t\t\t\t\t to show the list')
  console.log('node app.js add --title your_title --body todo_body \t to add a note')
  console.log('node app.js read --title your_title \t\t\t to read a note ')
  console.log('node app.js remove --title your_title \t\t\t to remove a note')
}
const addNote=(title,body)=>{
let notes =fetchn()
	let note={
		title,
		body
	};
	let exist=notes.filter(el=>el.title===title)
	if(exist.length==0){
notes.push(note)
	fs.writeFileSync("notes.txt", JSON.stringify(notes));
	}
	else
		{console.log('this title is already here try with another title')}
	

};
const removeNote=(title)=>{
	let notes=fetchn()
	let notewithremove=[]
	notewithremove = notes.filter(el=>el.title!==title)
	fs.writeFileSync("notes.txt",JSON.stringify(notewithremove));
	
}
const readNote=(title)=>{
	let notes=fetchn()
	let notetoread={}
	notetoread=notes.filter(el=>el.title===title)
	myDisplay(notetoread[0])
}
const list=()=>{
	let notes=fetchn()
	notes.forEach(node=>myDisplay(node))
	
}
const myDisplay=(note)=>{
	console.log('**********************************')
	console.log(`title: ${note.title}`)
	console.log(`body: ${note.body}`)
}
module.exports={
	help,
addNote,
removeNote,
readNote,
list
}
