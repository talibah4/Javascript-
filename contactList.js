var user = prompt("What's your name?").toLowerCase();

switch(user){
    case 'dina':
        if(user==="Dina" || user==="dina"){
        console.log("Hi Dina")
        }
        else{
            console.log("Hi "+ user)
        }
        break;
    case 'angi':
        if(user[0]==='a' && user[1]==='n'){
        console.log('Hi Angi')
        }
         else{
            console.log("Hi "+ user)
        }
        break;
    case 'shaddy':
        console.log('Hi Shaddy')
        break;
    default:
        console.log("Hi "+ user);
        break;
}