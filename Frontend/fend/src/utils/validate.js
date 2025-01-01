export let checkvalidate=(e,o)=>
{
    let r=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e);
    let s=/^\d{5}$/.test(o);
    if(!r)
    {
        return "Invalid email-id";
    }
    if(!s)
    {
        return "Invalid employee_id";
    }
    return null

}