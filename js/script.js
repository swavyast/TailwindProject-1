//alert("script is running");

function funct1(){
    const expr = prompt("Him or Her ?", "Type Here")

    switch(expr){
        case 'Her':
            alert("A female")
            break;
        case 'Him':
            alert("A male")
        case 'None':
        alert("You haven't entered anything, try again.")
    }
}

function funct2(){
    const promptValue = prompt("What's your age ?")
    if(promptValue<=0){
        alert("Age value can't be less than or equal to zero.")
    }else if(promptValue<18){
        alert("Minors can't drive")
    }else{
        alert("If you know, you can drive else you need to learn how to drive first, then only you can drive.")
    }
}

function funct3(){

    const exp = prompt("An expression is either true or false, choose a value and enjoy the magic")
    // document.write(exp)
    exp==='true'? alert("You have selected true and since i'm telling it right, it's already magical, isn't it?"): alert("no magic here :/")
}

function funct4(){
    const c = prompt("Enter a number", "e.g. : 1,2,3,4,5 ... rtc")
    const a = []
    for(i=1;i<=10;i++){
        a[i] = c*i+'&nbsp';
        //document.getElementById("printResult").innerText=(c*i+" ")

    }
    for(i=1;i<=10;i++){
    document.getElementById("printResult").innerText="This method prints a table\nSince you have typed "+c+"\nit will print the table of "+c +"\nand table of "+c +" = "+a
    }
}