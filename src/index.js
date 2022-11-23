import './style.css';

const DomCreator = (function() {
    const sidebar = document.getElementById(`grid-sidebar`);
    const buttonCreator = () => {
        const btn =  document.createElement(`button`);
        btn.classList.add(`button`);
        sidebar.appendChild(btn);
    }
    
    const costumButton = () => {
        const btnsList = [...document.querySelectorAll(`.button`)];
        btnsList[0].innerText = `Inbox`;
        btnsList[1].innerText = `Today`;
        btnsList[2].innerText = `This week`
        btnsList[3].innerText = `+`
    }

    const paraCreator = () =>  {
        const para = document.createElement(`p`);
        para.classList.add(`para`);
        sidebar.appendChild(para);    
    }

    const costumPara = () => {
        const paraList = [...document.querySelectorAll(`.para`)];
        paraList[0].innerText = `Current projects:`;
        paraList[1].innerText = `Project list:`;
    }

    return {
        buttonCreator,
        costumButton,
        paraCreator,
        costumPara
    }
})();

// create
DomCreator.paraCreator();
DomCreator.buttonCreator();
DomCreator.buttonCreator();
DomCreator.buttonCreator();
DomCreator.paraCreator();
DomCreator.buttonCreator();

// costumise
DomCreator.costumButton();
DomCreator.costumPara();