import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store= new Vuex.Store({
    state: {
        expenses: [
            {id: 1, name: 'Registration Fee', amount: 3500, date: '06-07-2020'},
            {id: 2, name: 'Admission Fee', amount: 300000, date: '06-07-2020'},
            {id: 3, name: 'Examination Fee', amount: 30000, date: '06-07-2020'},
            {id: 4, name: 'Stationary', amount: 300, date: '07-07-2020'},
        ]
    },
    mutations: {
        ADD_NEW ( state, eName, eAmount, eDate) {
            state.expenses.push({
                id:state.expenses.length+1, name:eName, amount:eAmount, date:eDate
            })
        }
    },
    actions: {
        addNew(context, eName, eAmount){
            const d= Date();
            var eDate=d.getDay()+'-'+d.getMonth()+'-'+d.getYear();
            context.commit( 'ADD_NEW',eName,eAmount,eDate)
        }
    }
})