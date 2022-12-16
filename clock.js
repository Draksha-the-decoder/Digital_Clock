setInterval(()  =>
{
    a=new Date();
    let time;
    if(a.getHours()>12)
    {
        time = (a.getHours()-12) + " : " + a.getMinutes() +" : " + a.getSeconds() + " PM";
    }
    else
    {
        time = hours + " : " + a.getMinutes() +" : " + a.getSeconds() + " AM";
    }    
    let date = a.getDate()+" . "+ (a.getMonth()+1)+" . "+ a.getFullYear();
    document.getElementById("date").innerHTML = date;
    document.getElementById("time").innerHTML = time ;
},1000);
