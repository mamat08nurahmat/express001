//console.log('hello nodejs');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//initial app
const app = express();
/*
const logger = function(req,res,next){
console.log('logging......')	
next()
}
app.use(logger);
*/

//view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


//body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//ser static path
app.use(express.static(path.join(__dirname,'public')));

//persona json tes
/*
const person = [
{	
nama:"mat",	
age : 26
},
{	
nama:"jack",	
age : 30
}
]
*/

//users json tes
const users = [
{	
id:1,
first_name:"mat",	
last_name:"nur",	
email : 'mat08nur@gmail.com'
},
{	
id:2,
first_name:"mugi",	
last_name:"wara",	
email : 'mugiwara@gmail.com'
},
{	
id:3,
first_name:"nur",	
last_name:"rahmat",	
email : 'nurahmat@gmail.com'
}
]
/*
*/


//get
app.get('/',function(req,res){

//res.send('HELLO APP WITH GET');	
//res.json(person);	
res.render('index',{
	title :'Customer',
	users  : users,
 });	
 
});


//post
app.post('/users/add',function(req,res){
//	console.log('FORM SUBMIT POST');	
	console.log(res.body);	

});



app.listen(3000,function(){
console.log('Server run on port 3000.....');	
});