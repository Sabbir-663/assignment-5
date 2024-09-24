document.getElementById('donate-button').addEventListener('click',function(){
    document.getElementById('history-section').classList.add('hidden');
    
    document.getElementById('donation-section').classList.remove('hidden');

})

document.getElementById('history-button').addEventListener('click',function(){
    document.getElementById('history-section').classList.remove('hidden');
    
    document.getElementById('donation-section').classList.add('hidden');

})