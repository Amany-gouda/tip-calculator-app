// input part
// get the total bill amount that the user entered
let totalBill=document.getElementById("bill");
// get the total number of people that the user entered
let numOfPeople =document.getElementById("num");
// get the list of the fixed percentages that the user can choose from it
let percentage=document.getElementsByClassName("btn");
// get the custom percentage that the user can entered
let customPer =document.getElementById("custom");
// get the label for the inputs
let label = document.getElementsByClassName("labnum");
console.log(label);
let totalpriceValue;
let msg = document.createElement("span");
msg.classList.add("msg");
msg.innerText="can't be zero";
// output part
let tipAmount =document.getElementById("tip-amount");
let totalprice =document.getElementById("total");
let reset = document.getElementById("reset");


// numOfPeople.addEventListener("input",()=>{
//     if(numOfPeople.value!=0){
//         totalpriceValue =  totalBill.value/numOfPeople.value;     
//     }

// })

// percentage button part 
for(let i=0;i<percentage.length;i++){
    percentage[i].addEventListener("click",()=>{
        if(totalBill.value==0||numOfPeople.value==0){
            addZeroAlert();
            return;
        }
        else{
            // call the removezeroalert function to remove the red border and can't be zero message
            removeZeroAlert();  
            // activation for the percentage buttons by adding the activate class if the button pressed and remove it from the other buttons
            for(let j=0;j<percentage.length;j++){
                if(j!==i){
                    percentage[j].classList.remove("activate");                
                }
                else{
                    percentage[j].classList.add("activate");
                }
            }       
            //  deactivate the custom button
            removeCustomStyle();
            // appear the output of the calculations
            // 1- remove the % sign to take the number only
            let per = parseFloat(percentage[i].value.replace("%",""))/100;
            //2- convert the bill value entered by user into float number
            let billInFloat = parseFloat(totalBill.value); 
            // 3- print the tip amount per person after rounding the number to 2
            tipAmount.innerHTML = ((billInFloat*per)/numOfPeople.value).toFixed(2);
            // 3- print the total price per person after rounding the number to 2
            totalprice.innerHTML = (parseFloat(totalBill.value/numOfPeople.value) +parseFloat(tipAmount.innerText)).toFixed(2) ;
           
        }    
    })
}
// custom button part
customPer.addEventListener("input",()=>{
    if(totalBill.value === ""){
        resetInputs();
        addZeroAlert();
        return;
    }
    if(numOfPeople.value === "")numOfPeople.value=1;
    customPer.classList.add("chosen");
    let customFloat = parseFloat((customPer.value)/100);
    let total =parseFloat(totalBill.value);
    tipAmount.innerHTML = ((total*customFloat)/numOfPeople.value).toFixed(2) ;
    totalprice.innerHTML = ((total/numOfPeople.value) + ((total*customFloat)/numOfPeople.value)).toFixed(2);
    removeBtnStyle();
    removeZeroAlert();
})

reset.addEventListener("click",resetInputs);
function resetInputs(){
    tipAmount.innerHTML ="$0.00";
    totalprice.innerHTML = "$0.00";
    totalBill.value = "";
    numOfPeople.value = "";
    customPer.value = "";
    removeBtnStyle();
    removeCustomStyle();
    removeZeroAlert();
}
function removeBtnStyle(){
        for(let ind=0; ind<percentage.length;ind++){
        if(percentage[ind].classList.contains){
            percentage[ind].classList.remove("activate");
        }
    }
}
function removeCustomStyle(){
    if(customPer.classList.contains("chosen")){
        customPer.classList.remove("chosen");
        customPer.value="";
    }
}
function addZeroAlert(){
    numOfPeople.classList.add("red-border");
    totalBill.classList.add("red-border");
    for(let x=0;x<label.length;x++){
        label[x].appendChild(msg);
        console.log(label[x]);
    }
}
function removeZeroAlert(){
    // removing the red border class if the user enter any number except 0
    if(numOfPeople.classList.contains("red-border")||totalBill.classList.contains("red-border")){
        numOfPeople.classList.remove("red-border");
        totalBill.classList.remove("red-border");                
    }
    //remove "can't be zero" message when the user inter any number except zero
            if(label[1].querySelector("span.msg")){
                label[1].removeChild(msg); 
            }
}

let print = num => num;