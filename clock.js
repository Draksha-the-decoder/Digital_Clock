setInterval(()  =>{
    a=new Date();
    let time = a.getHours() + " : " + a.getMinutes() +" : " + a.getSeconds();
    let date = a.getDate()+" . "+ a.getMonth()+" . "+ a.getFullYear();
    document.getElementById("date").innerHTML = date;
    document.getElementById("time").innerHTML = time ;
    },1000);