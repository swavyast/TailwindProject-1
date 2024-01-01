//alert("script is running");

function funct1(){
    const expr = prompt("\n\n\n\nHim or Her ?\n\n", "\nThese strings are case sensitive, type carefully.\n")

    switch(expr){
        case 'Her':
            alert("\n\n\n\nA female")
            break;
        case 'Him':
            alert("\n\n\n\nA male")
            break;
        default:
        alert("\n\n\n\nEither You have typed something wrong or you haven't typed at all, try again.\n\n\n\n")
        funct1();
    }
}

function funct2(){
    const promptValue = prompt("\n\n\n\nWhat's your age ?\n\n")
    if(promptValue<=0){
        alert("\n\n\n\nAge value can't be less than or equal to zero. :( Try again\n\n\n\n")
        funct2();
    }else if(promptValue<18){
        alert("\n\n\n\nMinors can't drive :/\n\n\n\n")
    }else{
        alert("\n\n\n\nIf you know, you can drive else you need to learn how to drive first, then only you can drive.\n\n\n\n")
    }
}

function funct3(){

    const exp = prompt("\n\n\n\nAn expression is either true or false, choose a value and enjoy the magic\n\n")
    // document.write(exp)
    exp==='true'? alert("\n\n\n\nYou have selected true and since i'm telling it right, it's already magical, isn't it?\n\n\n\n"): alert("\n\n\n\nno magic here :/\n\n\n\n")
}

//working with for loop

function funct4(){
    const c = prompt("\n\n\n\nEnter a number\n\n", "e.g. : 1,2,3 ... etc")
    if(c>1){
        const a = []
        for(i=1;i<=10;i++){
            a[i] = c*i;
            //document.getElementById("printResult").innerText=(c*i+" ")
    
        }
        document.getElementById("printResult").innerHTML="This method prints a table<br>And since you have typed "+c+"<br><br>Your table in array form, looks like :&emsp;"
        document.getElementById("printResult").innerHTML+=a+"<br><br>After formatting it looks like : "
        for(i=1;i<=10;i++){
        document.getElementById("printResult").innerHTML+=a[i]+"&emsp;"
        }
        let anch = document.createElement("a")
        anch.innerHTML+="try again?"
        anch.setAttribute("onclick","funct4()")
        anch.setAttribute("class", "btn px-3 py-2 m-2  rounded-2xl bg-black text-center text-blue-600 cursor-default")
        document.getElementById("printResult").innerHTML+="<br><br>"
        document.getElementById("printResult").appendChild(anch)
        
    }else{
        

    }
        
}

// Working with for in and for of loop

function funct5(){
    let student = {
        Name : "Himanshu Rai",
        address : "Noida",
        phone : "727585**35",
        email : "him@ymail.com"
    }
    document.getElementById("printResult").innerHTML ="Using for in loop :<br><br>"
    for(let a in student){
            document.getElementById("printResult").innerHTML += a+" : "+student[a]+"<br>"
    }        
}

function funct6(){
    let student = {
        name : "Himanshu Rai",
        address : "Noida",
        phone : "727585**35",
        email : "him@ymail.com"
    }
    document.getElementById("printResult").innerHTML ="Using for of loop :<br><br>"
    for(let a in student){
        
        let y = a
        let z = student[a]
        for(let m of y){
            document.getElementById("printResult").innerHTML += m
        }document.getElementById("printResult").innerHTML +=" :- &emsp;-: "
        for(let m of z){
            document.getElementById("printResult").innerHTML += m
        } document.getElementById("printResult").innerHTML +="<br>"
        }
}

function funct7(){
    
    const al1 = confirm("Do you want to logout ?\n\n Click OK to continue.\n\n\t\t\t\t\t\t\t You can cancel if you want to logout.")
    if(!al1){
        const logoutButton = document.createElement("button")
        logoutButton.setAttribute("class", "bg-black p-2 m-2 mt-2 rounded-lg ring-2 ring-fuchsia-500  ml-10 me-auto text-center text-lime-500")
        logoutButton.setAttribute("value", "logout")
        logoutButton.setAttribute("form", "logOutForm")
        logoutButton.innerHTML="Logout"
        document.getElementById("myButton").click()
        //document.getElementById("headMenu").appendChild(logoutButton)
    }else{

    }
    
}