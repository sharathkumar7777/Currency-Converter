const BASE_URL=
"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const val=document.querySelectorAll(".dropdown select"); 
const btn=document.querySelector("form button");

const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".To select");
const msg1=document.querySelector(".msg");

// for(code in countryList){
//     console.log(code, countryList[code]);
// }

for(let select of val){
    for(currCode in countryList){
        let newOpt=document.createElement("option");
        newOpt.innerText=currCode;
        newOpt.value=currCode;
        if(select.name==="from" && currCode==="USD"){
            newOpt.selected="selected";
        } 
        else if(select.name === "To" && currCode === "INR"){
            newOpt.selected="selected";
        } 
        select.append(newOpt);
    }
    select.addEventListener("change", (event)=>{
        upadateFlag(event.target);
    });
}

const upadateFlag = (element) => {
    let currCode=element.value;
    let countryCode = countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", async (event)=>{
    event.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    // console.log(amtVal);

    if(amtVal==="" || amtVal < 1){
        amtVal=1;
       amount.value="1";
    }
    // console.log(fromCurr.value, toCurr.value);
    const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data=await response.json();
    let rate=data[toCurr.value.toLowerCase()];
    let finalAmt=amtVal * rate;
    msg1.innerText=`${amtVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value} `;
});