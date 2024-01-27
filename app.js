const URL = "https://cat-fact.herokuapp.com/facts";

const para1=document.querySelector("#para");
const btn1=document.querySelector("#btn");

// let promise=fetch(URL);
// console.log(promise);

// const getFacts = async ()=> {
//     console.log("getting data...");
//     let response= await fetch(URL);
//     console.log(response.status);//JASON format
//     let data = await response.json();
//     // console.log(data[0].text);
//     para1.innerText=data[1].text;
// };

function getFacts(){
    fetch(URL)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        para1.innerText=data[1].text;
    });
}

btn1.addEventListener("click", getFacts);