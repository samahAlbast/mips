var stringOutput ="";
var arrayInput  = [];
var ArrayInput =[[]];
var stringInput="";
var add_inst,addi_inst,sub_inst;
function convert(current_Inst){
    var Inst_number =1;
    arrayInput =[]
    stringInput = document.getElementById("inputArea").value;
    var i =0;

        while(i<stringInput.length){
            if(stringInput[i] =="\n"){
                Inst_number++;
            }
            i++;
        }
        i=0;
        console.log(Inst_number)
        if(Inst_number==current_Inst+1){
            if(Inst_number==1){
            Inst_Map.set(1,Inst_Map.get(1)-1)
            for(var i=0;i<stringInput.length;i++){
                var elem ="";
                while(stringInput[i] != " " && i<stringInput.length&& stringInput[i] !="(" && stringInput[i] !=")"){
                    elem += stringInput[i]
                    i++;
                }
                arrayInput.push(elem)   
            }}
            else{Inst_Map.set(1,Inst_Map.get(1)-1)
                console.log(ArrayInput[Inst_number-1])
            arrayInput = ArrayInput[Inst_number-1]}
        }
        else {
            if(ArrayInput.length == 1){
            i =0;
            for(var j=0;j<Inst_number;j++){ 
                
                var temp = [];  
                while(stringInput.length>i&&stringInput[i-1] != "\n"){
                    if(stringInput[i-2]=="\n"){
                    var elem =stringInput[i-1];}
                    else{var elem = ""}
                    while(stringInput[i] != " "&& i<stringInput.length&& stringInput[i]!="\n"&& stringInput[i]!="(" && stringInput[i] !=")"){
                        elem += stringInput[i];
                        i++;
                    }
                    temp.push(elem);
                    i++;
                    
                }
                i++
                ArrayInput[j] = temp;
            }}
        arrayInput =[];
        arrayInput = ArrayInput[current_Inst]}

    // console.log(Inst_Map.get(1))
    // for(var i=0;i< stringInput.length;i++){
    //     var elem ="";
    //     while(stringInput[i] != " "&& i<stringInput.length){
    //         elem += stringInput[i];
    //         i++;
    //     }
    //     arrayInput.push(elem);
    // }
    console.log(arrayInput)
    
    
    // ---------------------------------------------------------------------------------------
    //                                       Add instruction
    // ---------------------------------------------------------------------------------------
    function add_instruction(){

        stringOutput = "000000 " + B_Map.get(arrayInput[2]) +" "+ B_Map.get(arrayInput[3]) +" "+ 
                                  B_Map.get(arrayInput[1]) + " 00000 " + B_Map.get(arrayInput[0])

        myMap.set(arrayInput[1],myMap.get(arrayInput[2]) + myMap.get(arrayInput[3]) )
        
        document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])
        document.getElementById("outputArea").value = stringOutput     
        Inst_Map.set(1,Inst_Map.get(1)+1);
    }
    // --------------------------------------------------------------------------------------
    //                                        Sub instruction
    // --------------------------------------------------------------------------------------

    function sub_instruction(){
        stringOutput = "000000 " + B_Map.get(arrayInput[2]) +" "+ B_Map.get(arrayInput[3]) +" "+ 
                                   B_Map.get(arrayInput[1]) + " 00000 " + B_Map.get(arrayInput[0])

       myMap.set(arrayInput[1],myMap.get(arrayInput[2]) - myMap.get(arrayInput[3]) )

       document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])

       document.getElementById("outputArea").value = stringOutput
       Inst_Map.set(1,Inst_Map.get(1)+1);
    }
    // ---------------------------------------------------------------------------------------
    //                                      addi instruction
    // ---------------------------------------------------------------------------------------

    function addi_instruction(){
        stringOutput = B_Map.get(arrayInput[0])+ " " + B_Map.get(arrayInput[2]) +" "+ 
                                    B_Map.get(arrayInput[1]) +" "+ 
                                   myMap.get(arrayInput[3]).toString(2).padStart(16,"0");
        // console.log(stringOutput)
       myMap.set(arrayInput[1],myMap.get(arrayInput[2]) + myMap.get(arrayInput[3]) )

       document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])

       document.getElementById("outputArea").value = stringOutput
       Inst_Map.set(1,Inst_Map.get(1)+1);
    //    console.log(Inst_Map.get(1))
    }
    function lw_instruction(){
        stringOutput = B_Map.get(arrayInput[0]) +" "+ B_Map.get(arrayInput[3]) +" "
                    +B_Map.get(arrayInput[1])+" "+myMap.get(arrayInput[2]).toString(2).padStart(16,"0")
        
        myMap.set(arrayInput[1],choose_reg(myMap.get(arrayInput[2])))
        document.getElementById(arrayInput[1]).innerHTML =myMap.get(arrayInput[1])

        document.getElementById("outputArea").value= stringOutput
        Inst_Map.set(1,Inst_Map.get(1)+1);
    }

    function sw_instruction(){
        stringOutput = B_Map.get(arrayInput[0]) +" "+ B_Map.get(arrayInput[3]) +" "
                    +B_Map.get(arrayInput[1])+" "+myMap.get(arrayInput[2]).toString(2).padStart(16,"0")
        
                    console.log((4* arrayInput[2]+LS_Map.get(arrayInput[3])));

        set_reg(myMap.get(arrayInput[2]),myMap.get(arrayInput[1]))

        LS_Map.set(arrayInput[3], LS_Map.get(arrayInput[3])+4* arrayInput[2]);

        document.getElementById(arrayInput[3]).innerHTML ="0x" +
                                    (LS_Map.get(arrayInput[3])).toString().padStart(8,"0"); 

        document.getElementById("outputArea").value= stringOutput
        Inst_Map.set(1,Inst_Map.get(1)+1);
    }

    function choose_inst(){
        switch(myMap.get(arrayInput[0])){
            case "add": add_inst = add_instruction(); break;
            case "addi": addi_inst = addi_instruction(); break;
            case "sub": sub_inst = sub_instruction();break;
            case "lw" : lw_inst = lw_instruction();break;
            case "sw" : sw_isnt = sw_instruction();break;
        }        
    }
    function choose_reg(i){
        switch(arrayInput[3]){
            case "$a0": return a0[i];
            case "$a1": return a1[i];
            case "$a2": return a2[i];
            case "$a3": return a3[i];
        }
    }

    function set_reg(i,j){
        switch(arrayInput[3]){
            case "$a0": a0[i] = j;
            case "$a1": a1[i] = j;
            case "$a2": a2[i] = j;
            case "$a3": a3[i] = j;
        }
    }

    choose_inst();
}
