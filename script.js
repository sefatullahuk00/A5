// Show hide donation & history section onclick 
let tabs = document.querySelectorAll('[data-target]')
let tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        let target = document.querySelector(tab.dataset.target)
        // active background for active button
        tabs.forEach(tab => {
            tab.classList.remove('bg-[#B4F461]')
        })
        tab.classList.add('bg-[#B4F461]')
        // active Tab
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('block')
            tabContent.classList.add('hidden')
        })
        target.classList.remove('hidden')
        target.classList.add('block');
    })
})

// -----  Donate now form calculation -----
let donationContent = document.getElementById('donation')
let historyContent = document.getElementById('history')

let donateBtns = document.querySelectorAll('#donation-btn')

donateBtns.forEach((donateBtn) => {
    donateBtn.addEventListener('click',(e) => {
        e.preventDefault()
        let netAmountEl = document.querySelector('.net-amount')
        let netAmount = parseInt(document.querySelector('.net-amount').innerHTML) //make it a numher

        let form = donateBtn.closest('form')
        let donateTo = form.querySelector('.donate-to').innerHTML
        let totalDonationEl =  form.querySelector('.total-donation')
        let totalDonation =  parseInt(form.querySelector('.total-donation').innerHTML) //make it a numher

        let donateAmount = donateBtn.previousElementSibling.value

        //Validate if donationAmount is a positive value
        if(isNaN(donateAmount)){
            // call common function of modal with err msg 
            alert('Enter a valid value');
        }else if(donateAmount > netAmount){
            //insufficient balance
            alert('insufficient balance')
        }else{
            // call common function of modal with scs msg
            // alert('you have donated ' + donateAmount);
            // empty donation input val 
            donateBtn.previousElementSibling.value = ''
            // decrement net amount 
            netAmountEl.innerHTML = netAmount - donateAmount
            // increment total donation amount 
            totalDonationEl.innerHTML = totalDonation + parseInt(donateAmount)

            // create a history card 
            let historyCard = document.createElement('div')
                historyCard.setAttribute('class',"history-card border rounded-lg p-6 mt-6")
                // historyCard.classList.add("history-card,border,rounded-lg,p-6,mt-6")

            let historyCardTitle = document.createElement('h1')
                historyCardTitle.setAttribute('class','history-name text-lg font-bold');
                historyCardTitle.innerHTML = donateAmount + " Taka " + donateTo
            let historyCardDate = document.createElement('p')
                historyCardDate.setAttribute('class','history-date text-lg')
                historyCardDate.innerHTML = "Date: " + new Date();
                historyCard.appendChild(historyCardTitle);
                historyCard.appendChild(historyCardDate);
                
            historyContent.innerHTML = ''
            historyContent.prepend(historyCard);
            
        }
        
    })
})



