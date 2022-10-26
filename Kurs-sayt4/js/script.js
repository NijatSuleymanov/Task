let serviceTab = document.querySelector('.servicesTab');
let portfolioTab =  document.querySelector('.portfolioTab');
let aboutTab =  document.querySelector('.aboutTab');
let teamTab =  document.querySelector('.teamTab');
let contactTab =  document.querySelector('.contactTab');
let allTabs = document.querySelectorAll('.list ul li a');
document.addEventListener('scroll',()=>{
    if (window.scrollY>=689.6 && window.scrollY<1333.75) {
        for (let i = 0; i < allTabs.length; i++) {
            allTabs[i].style.color = 'white'
        }
        serviceTab.style.color = '#ffc800'
    }
    else if(window.scrollY>=0 && window.scrollY<689.6){
        for (let i = 0; i < allTabs.length; i++) {
            allTabs[i].style.color = 'white'
        }
    }
    else if(window.scrollY>=1333.75 && window.scrollY<2504){
        for (let i = 0; i < allTabs.length; i++) {
            allTabs[i].style.color = 'white'
        }
        portfolioTab.style.color = '#ffc800'
    }
    else if(window.scrollY>=2504 && window.scrollY<4278){
        for (let i = 0; i < allTabs.length; i++) {
            allTabs[i].style.color = 'white'
        }
        aboutTab.style.color = '#ffc800'
    }
    else if(window.scrollY>=4278 && window.scrollY<5245){
        for (let i = 0; i < allTabs.length; i++) {
            allTabs[i].style.color = 'white'
        }
        teamTab.style.color = '#ffc800'
    }
    else if(window.scrollY>=5245 && window.scrollY<5939){
        for (let i = 0; i < allTabs.length; i++) {
            allTabs[i].style.color = 'white'
        }
        contactTab.style.color = '#ffc800'
    }
})