let EventEmitter=require('events');
let e=new EventEmitter();
e.on('click',(a)=>
{
    console.log("click");
    
})
e.emit('click','abc')