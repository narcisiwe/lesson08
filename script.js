'use strict';

const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
    
const start = function() {
    do 
    {
        money = prompt('Ваш месячный доход?', 80000);
    }
    while (!isNumber(money));
};
start();


const appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    addExpenses: {},
    expenses: {},
    expensesMonth: 0,
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 500000,
    period: 3,
    
    asking: function() {

        if(confirm('Есть ли у Вас дополнительный источник дохода?')){
            
            
            // let itemincome;
            // const checkitemincome = function () 
            // {
            //     itemincome = prompt('Какой у Вас доп. заработок?', 'Таносить по галактикам');
            //     if (!isNaN(itemincome)) 
            //     {
            //         alert("А циферки то низяя");
            //         return checkitemincome();
            //     }
            // };
            // checkitemincome();


            let itemincome = 0;
            while (!isNaN(itemincome)) {
            itemincome = prompt('Какой у Вас доп. заработок?', 'Таносить по галактикам');
            }


            let cashincome;
            while (isNaN(parseFloat(cashincome)) || cashincome < 0) 
            {
                cashincome = prompt('Сколько в месяц зарабатываете на этом?', '10000');
            }
            appData.income[itemincome] = cashincome;
        };

           
        
        function checkaddExpenses() {
            appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?', 'блекДжек, куртизанки, виски');
            if (!isNaN(appData.addExpenses)) {
                alert("А циферки то низяя");
                return checkaddExpenses();
            }
        };
        checkaddExpenses();

        
    //    appData.addExpenses = appData.addExpenses.toLowerCase().split(',');
        //appData.addExpenses = appData.addExpenses[0].toUpperCase().split(',');
        appData.addExpenses = appData.addExpenses.split(',') + appData.addExpenses[0].toUpperCase() + appData.addExpenses.slice(1);

  

        for (let i=0; i < 2; i++) {
            let value;
            const askExpenses = [];
            
            do 
            { 
            askExpenses[i] = prompt('Введите обязательную статью расходов??');
            console.log(value);
            }
            while (!isNaN(parseFloat(askExpenses)));


            do 
            { 
            value = +prompt('Во сколько это обойдется?');
            console.log(value);
            }
            while (isNaN(parseFloat(value)) || value < 0);
            
            appData.expenses[askExpenses[i]] = value;
            };


        for (let key in appData.expenses) {
            console.log(appData.expensesMonth += appData.expenses[key]);  
        };

        
        const getTarget = appData.getTargetMonth(appData.mission, appData.budgetMonth);


        if (getTarget>0) 
            {
            console.log('Цель будет достигнута')
            } else 
            {
            console.log('Цель будет достигнута');
            };


        console.log('Расходы за месяц ' + appData.expensesMonth + ' чего то там');
        console.log('Цель будет достигнута за ' +  Math.round(getTarget) + ' месяцев');
        console.log('Наша программа включает в себя данные:');


        for (let key in appData) {
         console.log('Ключ: ' + key + ' значение: ' + appData[key]);
        };


    },

    
    getBudget: function() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        console.log(appData.budgetMonth, appData.budget, appData.expensesMonth)
        appData.budgetDay = appData.budgetMonth / 30;
    },


    getTargetMonth: function(mission, accumulatedMonth) {
        const getTargetMonthSum = mission / accumulatedMonth;
        return getTargetMonthSum;
    },
    

    getStatusIncome: function(){
        if (appData.budgetDay>= 1200) {
            console.log('У вас высокий уровень дохода')
        } else if (appData.budgetDay>= 600) {
            console.log('У вас средний уровень дохода')
        } else if (appData.budgetDay>= 0) {
            console.log('К сожалению у вас уровень дохода ниже среднего')
        } else {
            console.log('Что то пошло не так');
        }
    },
    getInfoDeposit: function(){
        appData.deposit = confirm('Есть ли у вас депозит в банке? Yes/Ok No/Cancel');
        if(appData.deposit){
            do
            {
                appData.percentDeposit = +prompt('Какой годовой процент?', '10');
            }
            while (isNaN(parseFloat(appData.percentDeposit)) || appData.percentDeposit < 0) 
            
            
            do
            {
                appData.moneyDeposit = +prompt('Какая сумма заложена?', '10000');
            }
            while (isNaN(parseFloat(appData.moneyDeposit)) || appData.moneyDeposit < 0) 
        }
    },
    calSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }
};
appData.asking();
appData.getInfoDeposit();
appData.getBudget();
appData.getStatusIncome();
console.log(appData);



console.log(appData.percentDeposit, appData.moneyDeposit, appData.calSavedMoney());

      



