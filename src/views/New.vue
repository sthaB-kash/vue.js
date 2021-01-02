<template>
    <div id="new">
        <h1>Add New Expensese Here:-</h1>
        <div class='addNew'>
            <h4>Enter the following details:</h4>
           <!-- <form action="_SELF" method="POST">-->
                <label for='name'>Particular: </label>
                    <input type="text" id='name' name='exp' placeholder="Please enter expensese name" required>
                <label for="amount">Amount: </label>
                    <input type="number" id='amount' name='amt' placeholder="Please enter amount in Rs." required>
                <input  @click="addNew" type="submit" value="Save">
                 
            <!--</form>-->
        </div>
    </div>
</template>

 
<script>
export default {
    el: '#new',
    data() {
        return {
            exp: null,
            amt: null
        }
    },
    methods: {
        addNew(){
            this.exp=document.getElementById('name').value,
            
            this.amt=document.getElementById('amount').value,
            alert ("Amount: Rs." + this.amt + "  for Expenses: " + this.exp + " " + "  is saved successfully.\n"+ Date())
            document.getElementById('name').value="",
            document.getElementById('amount').value=""
        }
    }

}
</script>
 

<style  scoped>
    *{
        box-sizing:border-box;
    }
    h4{margin-top:32px;}
    .addNew{
        width:50%;
        margin: 20px auto;
        border:3px inset gray;
        padding: 5px 10px;
    }
    label{
        float:left;
        width: 20%;
        text-align: left;
    }
    input[type='text'], input[type='number']{
        width: 70%;
         
    }
    input, label {
        margin-top: 8px;
        font-size:16px;
        color: #000;
    }
    input[type='submit']{
        display:block;
        margin: 30px auto;
    }
    
</style>