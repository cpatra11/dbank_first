import { dbank_backend as dbank} from '../declarations/dbank_backend/index';


window.addEventListener('load', async function() {
   
       await updateBalance();
            // console.error('Error getting balance:', error);
   
});

document.querySelector("form").addEventListener("submit",async function(event){
    event.preventDefault();

    const button = event.target.querySelector("#submit-btn");
    const inputAmount = parseFloat(document.getElementById("input-amount").value);
    const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);
    
    button.setAttribute("disabled",true);
    document.getElementsByClassName("reset-btn")[0].setAttribute("disabled");

    if(document.getElementById("input-amount").value.length !==0){
        await dbank.topUp(inputAmount);
    }if(document.getElementById("withdrawal-amount").value.length !== 0 ){
        await dbank.withDraw(outputAmount)
    }
 
    await dbank.compound();
    
    await updateBalance();
   
    document.getElementById('input-amount').value = "";
    document.getElementById('withdrawal-amount').value = "";
    button.removeAttribute("disabled")
    document.getElementsByClassName("reset-btn")[0].setAttribute("disabled");

})
document.querySelector('.reset-btn').addEventListener('click', async function(event){
    event.preventDefault();
    await dbank.reset();
    await updateBalance();
    document.getElementById('input-amount').value = "";
    document.getElementById('withdrawal-amount').value = "";
    document.getElementsByClassName("reset-btn")[0].setAttribute("disabled");
})
//TODO: reset button functionality in backend
async function updateBalance(){
    const currentAmount = await dbank.checkBalance();
    document.getElementById('value').innerText = Math.round(currentAmount *100) / 100;
}