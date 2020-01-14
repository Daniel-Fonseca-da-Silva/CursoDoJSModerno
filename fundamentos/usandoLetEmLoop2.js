const funcs = [];

for(let i = 0; i < 10; i++)
{
    funcs.push(function(){
       console.log(i); 
    });
}

funcs[2]();
funcs[4]();
funcs[7]();
funcs[9]();
funcs[8]();