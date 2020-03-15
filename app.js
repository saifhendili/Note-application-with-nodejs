console.log('starting app')
const yargs=require('yargs')
let command=yargs.argv._[0]
let nodes=require('./nodes.js')
let title=yargs.argv.title
let body=yargs.argv.body
if (process.argv.length < 3)
	{ nodes.help();
}
else
if(command==='add'){
	console.log('adding node')
	nodes.addNote(title, body);
}else
if(command==='remove'){
	console.log('remove node')
	nodes.removeNote(title)
}
else
if(command==='read'){

	console.log('read node')
	nodes.readNote(title)
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