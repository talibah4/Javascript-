/*jshint multistr:true */
var text = "blah blah blah Dina blah blah blah Dina blah blah"
var myName = "dina"
var hits = []

for(counter = 0; counter < text.length; counter++){
    if (text[counter]==="D"){
        
    for(counter2=counter; counter2 < (myName.length+counter); counter2++){
        hits.push(text[counter2])
    }
    }
    
}

if (hits.length === 0){
    console.log("Your name wasn't found!")
}
else{
    console.log(hits)
}


