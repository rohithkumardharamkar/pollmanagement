export let check=(a,b,c,d)=>
{
    console.log(a,b,c,d);
    
    if(a==undefined || b==undefined || c==undefined ||d==undefined)
    {

        return "All fields are required"
    }
    return null
}