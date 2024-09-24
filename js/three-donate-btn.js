




// Noakhali Button



document.getElementById('noakhali-donate-btn').addEventListener('click',function(event){
    event.preventDefault();

    const noakhaliInput=document.getElementById('noakhali-input').value ;
    const inputNoakhali=parseFloat(noakhaliInput);
    const noakhaliBalance=document.getElementById('noakhali-balance').innerText ;
    const balanceNoakhali=parseFloat(noakhaliBalance); 
    const availableBalance=document.getElementById('available-balance').innerText;
    const balanceAvailable=parseFloat(availableBalance);


  //  Check if the input is a valid whole number
    if (!/^[0-9]+$/.test(noakhaliInput)) {
        alert('Please enter a valid amount');
        return;
    }

    if (typeof inputNoakhali === 'number' && !isNaN(inputNoakhali)   && inputNoakhali<=balanceAvailable ) {

       
       
      

        const newNoakhaliBalance= inputNoakhali+balanceNoakhali;
        document.getElementById('noakhali-balance').innerText=newNoakhaliBalance;

        const newAvailableBalance=balanceAvailable-inputNoakhali;
        document.getElementById('available-balance').innerText=newAvailableBalance;

        alert('Thank You for donating ')
    }
    else{
        alert('Insufficient Balance haha Gorib')
    }
    
})


// Feni Donate Button

document.getElementById('feni-donate-btn').addEventListener('click',function(event){
    event.preventDefault();

    const feniInput=document.getElementById('feni-input').value ;
    const inputFeni=parseFloat(feniInput);
    const feniBalance=document.getElementById('feni-balance').innerText ;
    const balanceFeni=parseFloat(feniBalance); 
    const availableBalance=document.getElementById('available-balance').innerText;
    const balanceAvailable=parseFloat(availableBalance);


  //  Check if the input is a valid whole number
    if (!/^[0-9]+$/.test(feniInput)) {
        alert('Please enter a valid amount');
        return;
    }

    if (typeof inputFeni === 'number' && !isNaN(inputFeni)   && inputFeni<=balanceAvailable ) {

       
       
      

        const newFeniBalance= inputFeni+balanceFeni;
        document.getElementById('feni-balance').innerText=newFeniBalance;

        const newAvailableBalance=balanceAvailable-inputFeni;
        document.getElementById('available-balance').innerText=newAvailableBalance;

        alert('Thank You for donating ')
    }
    else{
        alert('Insufficient Balance haha Gorib')
    }
    
})


document.getElementById('quota-donate-btn').addEventListener('click',function(event){
    event.preventDefault();

    const quotaInput=document.getElementById('quota-input').value ;
    const inputQuota=parseFloat(quotaInput);
    const quotaBalance=document.getElementById('quota-balance').innerText ;
    const balanceQuota=parseFloat(quotaBalance); 
    const availableBalance=document.getElementById('available-balance').innerText;
    const balanceAvailable=parseFloat(availableBalance);


  //  Check if the input is a valid whole number
    if (!/^[0-9]+$/.test(quotaInput)) {
        alert('Please enter a valid amount');
        return;
    }

    if (typeof inputQuota === 'number' && !isNaN(inputQuota)   && inputQuota<=balanceAvailable ) {

       
       
      

        const newQuotaBalance= inputQuota+balanceQuota;
        document.getElementById('quota-balance').innerText=newQuotaBalance;

        const newAvailableBalance=balanceAvailable-inputQuota;
        document.getElementById('available-balance').innerText=newAvailableBalance;

        alert('Thank You for donating ')
    }
    else{
        alert('Insufficient Balance haha Gorib')
    }
    
})


