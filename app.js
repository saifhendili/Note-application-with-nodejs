	const yargs=require('yargs')
let command=yargs.argv._[0]
let nodes=require('./nodes.js')
let title=yargs.argv.title
let body=yargs.argv.body
let unde
if (process.argv.length < 3)
	{ nodes.help();
}
else
if(command==='add'){
unde=process.argv[3]
if(unde=='--title')
{
	console.log('adding node')
	nodes.addNote(title, body);
	
}
else{
	console.log('Option : \nnode app.js add --title your_title --body todo_body \t to add a note')

}
	
}else
if(command==='remove'){
	unde=process.argv[3]
	if(unde=='--title')
{
	console.log('remove node')
	nodes.removeNote(title)
	
}
else{
	console.log('Option : \nnode app.js remove --title your_title \t\t\t to remove a note')

}

}
else
if(command==='read'){
	unde=process.argv[3]
	if(unde=='--title')
{
console.log('read node')
	nodes.readNote(title)
	
}
else{
	console.log('Option : \nnode app.js read --title your_title \t\t\t to read a note ')

}
	
}
else
if(command==='list'){
	console.log('show node')
	nodes.list()
}
else{
		console.log('this command is unknow !!! try again!!!')
		nodes.help();
}