<template>
    <div id="expenses">
        <h1>Expenses</h1>

        <select name="select" id="select">
            <option value="Today" selected>Today</option>
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
        </select>
               
    <!-- list of expenses-->
        <table class="exp-list" border="">
            <thead>
                <tr>
                    <th class='col-1'>SN</th>
                    <th class='col-2'>Particulars</th>
                    <th class='col-3'>Dates</th>
                    <th class='col-4'>Amt(Rs.)</th>
                    <th class='col-5'>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(exp, index) in expenses" 
                    :key="index">
                    <!--<td>{{index+=1}}</td>--> <td>{{exp.id}}</td>
                    <td class="particulars">{{exp.name}}</td>
                    <td class="dates">{{exp.date}}</td>
                    <td class='amounts'>{{exp.amount}}</td>
                    <td><button @click="edit(exp.id, exp.name, exp.date, exp.amount)">Edit</button> </td>
                    
                </tr>
            </tbody>
            <tfoot>
                <tr class='total'>
                    <td colspan='3' style="padding-right='10px'">Total</td>
                    <td class="tamount">{{total}}</td>
                </tr>
            </tfoot>
        </table>
        <div id="background"></div>
        <div id="edit">
            <h4>Enter the following details:</h4>
            <!-- <form action="_SELF" method="POST">-->
                <div v-for = "(exp, index) in expenses" :key='index'>
                    <div v-if="Number(exp.id)===Number(id)">
                        <p>
                            EID: <span id="eid">{{id}}</span>  
                            Date: <span id="date">{{expDate}}</span>
                        </p>
                          
                        <div><label for='name' id="lblName">Particular: </label>
                            <input type="text" id='name' name='exp'  :value="expName" required>
                        </div>
                        <div><label for="amount" id="lblAmount">Amount: </label>
                            <input type="number" id='amount'  :value="expAmount" required> 
                        </div>
                    </div>
                </div>
                
            <!--</form>-->
             <div class="btn">
                 <button class='btn-cancel' @click="cancel">Cancel</button>
                <button class='btn-save' @click="save">Save</button>
             </div>
            
        </div>
    </div>   
</template>
 
<script>
//import { mapstate, mapAction} from 'Vuex'
export default {
    ele: '#expenses',
    data() {
        return {
            total: null,
            expDate: null,
            expName: null,
            expAmount: null,
            id: null
        }
    },/*
    data: ()=>{
        return{
            myname:'bikash'
        }
    } */
    
    computed: {
        expenses() {
            return this.$store.state.expenses;
        }
    },
    methods: {
        edit(id, name, date, amt) {
            document.getElementById('background').style.display="block";
            document.getElementById('edit').style.display="block", 
            this.id=id,        
            this.expName=name,
            this.expAmount=amt,
            this.expDate=date   
        },
        cancel() {
            document.getElementById('background').style.display="none";
            document.getElementById('edit').style.display="none";
            document.getElementById('btn-cancel').focus=true;
        },
        save() {
            //this.$store.dispatch (['addNew'])
            this.cancel(),
            alert("remaining")
        }       
         
    }
}
</script>

<style scoped>
    *{box-sizing:border-box;}
    .exp-list{
        background:lightgray;
        margin:10px auto;
        border-collapse: collapse;
        border: 2px solid purple;
        width: 80%;
    }
    .exp-list thead{
        color:green;
        font-weight:800;
    }
    .col-1{
        padding:0;
        width:6%;
    }
    .col-3{
        width:15%;
    }
    .particulars{
        text-align: left;
    }
    .amounts, .total{
        text-align: right;
    }
    .particulars, .tamount, .amounts{
        padding:5px 10px;
    }
    .total{color:green;font-weight:bold;}
    
    /* style for select box */
     #select{
         font-size:1em;
         color:navy;
         font-weight:bold;
     }
    #background{
        position:absolute;
        top:0;left:0;
        opacity: 0.5;
        width:100%;
        height:100%;
        background:gray;
        display:none;
    }

    /* style for edit pop-up */
    #edit{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        margin:0 auto;
        background: #fff;
        width:55%;
        padding:15px;
        display: none;
    }
    #eid {margin-right:10px;}
    #lblName, #lblAmount{
        position:relative;
        width: 10%;
    }
    #lblAmount{ padding-right:11px;}
    #name, #amount{ 
        width:80%;
    }
    #name, #lblName, #amount, #lblAmount{
        margin-top:11px;
    }
    .btn {
        padding:15px;
    }
    .btn-save{margin-left:50px;}
     
     
</style>