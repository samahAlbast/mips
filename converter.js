function convert(){
    var stringOutput ="";
    var stringInput = document.getElementById("inputArea").value;
    var arrayInput  = [];
    for(var i=0;i< stringInput.length;i++){
        var elem ="";
        while(stringInput[i] != " "&& i<stringInput.length){
            elem += stringInput[i];
            i++;
        }
        arrayInput.push(elem);
    }
    for(var i = arrayInput.length-1;i> -1 ;i--){
        stringOutput  = stringOutput + " " + myMap.get(arrayInput[i]);
    }
    myMap.set(arrayInput[1],myMap.get(arrayInput[2]) + myMap.get(arrayInput[3]) 
                                                    )
    // document.getElementById
    document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])
    document.getElementById("outputArea").value = myMap.get(arrayInput[0]).toString() + "   " +
                                                (myMap.get(arrayInput[1])).toString(2).padStart(5,"0") + "   " +
                                                (myMap.get(arrayInput[2])).toString(2).padStart(5,"0") + "   " +
                                                (myMap.get(arrayInput[3])).toString(2).padStart(5,"0") ; 
}
