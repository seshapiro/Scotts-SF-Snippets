function SFConvert18(value) {
    if (value.length == 15){
        var convertedID = "";
        for (var i = 0; i < 3; i++){
            var baseTwo=0;
            for (var j = 0; j < 5; j++){
                var character = value.charAt(i*5+j);
                if(character >= "A" && character<="Z"){
                    baseTwo+=1<<j;
                }              
            }
            convertedID+="ABCDEFGHIJKLMNOPQRSTUVWXYZ012345".charAt(baseTwo);
        }
        return value + convertedID;
    }
    else{
        return "Error: Please enter a valid Salesforce ID with 15 characters";
    }
}
function SFConvert15(value){
    if (value.length == 18){
        return value.substring(0, 15);
    }
    else{
        return "Error: Please enter a valid Salesforce ID with 18 characters";
    }
}