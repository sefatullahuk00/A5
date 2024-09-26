// Show hide donation & history section onclick 
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
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