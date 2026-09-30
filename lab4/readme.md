# Express

1. create project folder 
2. goto project and open terminal
3. execute `npm init -y`
4. intall `npm i nodemon -D`
5. install `npm i exress`
6. open package.json
   a. change `type:'module'`
   b. update script {
    "start":node prg1.js",
    "dev":nodemon prg1.js:
   } 
7. create prg1.js in folder
8. add folderName/node_modules in .gitignore
9. send method/function is used to revert back contents to the client it may be html,json,html file,plai text.
we can also at status code with status function. It can be chain with send function. 

## Map
This function is used to iterate any array it must return new array
...

array.map((item)=.{
   return
})

array.map((item)=>)
...

In first syntax we have to use explicit return keyword whereas in syntax2
Exclude number of property from any json object
const(p1,p2,......rest)=product;
log(rest);

## search
to search any item any json array we use find method it will return null on unseccessfull on and object successfull
## syntax 
array.find(item)=item.id==id