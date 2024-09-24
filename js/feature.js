document.getElementById('donate-button').addEventListener('click',function(){
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-section').classList.remove('hidden');


    document.getElementById('donate-button').classList.add('bg-[#B4F461]');
    document.getElementById('history-button').classList.remove('bg-[#B4F461]');

})

document.getElementById('history-button').addEventListener('click',function(){
   

    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('donation-section').classList.add('hidden');


    document.getElementById('donate-button').classList.remove('bg-[#B4F461]');
    document.getElementById('history-button').classList.add('bg-[#B4F461]');
    document.getElementById('donate-button').classList.add('border-stone-300','border');

})

// bg-[#B4F461]