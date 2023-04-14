// render navbar
const listNavbar = ["Feature","About","Pricing","Reviews","Contact"];
const navbarElement = document.querySelector('.listNavbar');
navbarElement.innerHTML = listNavbar.map((item)=>{
    return `<li>${item}</li>`
})
navbarElement.innerHTML = navbarElement.innerHTML.replace(/,/g, '');

// render tag

const listTab = ["Tabs with soft transitioning effect.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."];
const tabElement = document.querySelector('.listContent');
tabElement.innerHTML = listTab.map((item)=>{
    return `<p>${item}</p>`
})
tabElement.innerHTML = tabElement.innerHTML.replace(/,/g, '');

// render option

const listOption = [
    {
        image: "./images/icon-upload.png",
        title: "Title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
    },
    {
        image: "./images/icon-download.png",
        title: "Title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
    }
]
const optionElement = document.querySelector('.wrapperOption');
optionElement.innerHTML = listOption.map((item)=>{
    return `<div><img src=${item.image}><p>${item.title}</p><p>${item.content}</p></div>`
})
optionElement.innerHTML = optionElement.innerHTML.replace(/,/g, '');

// render content building

const listIntroduce = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."]
const introduceElement = document.querySelector('.contentLine');
introduceElement.innerHTML = listIntroduce.map((item)=>{
    return `<p>${item}</p>`
})
introduceElement.innerHTML = introduceElement.innerHTML.replace(/,/g, '');

// render introduce

const listNitro = [
    {
        image: "./images/icon-buble.png",
        title: "Thoughtful Design",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra."
    },
    {
        image: "./images/icon-show.png",
        title: "Well Crafted",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra."
    },
    {
        image: "./images/icon-intro.png",
        title: "Easy to Customize",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra."
    },
]
const nitroElement = document.querySelector('.card');
nitroElement.innerHTML = listNitro.map((item)=>{
    return `<div class="wrapperCard"><img src=${item.image}><p>${item.title}</p><p>${item.content}</p></div>`
})
nitroElement.innerHTML = nitroElement.innerHTML.replace(/,/g, '');