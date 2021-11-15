<template>
  <div>
    <form id="container" class="max-w-md p-9 m-6 rounded-3xl shadow-2xl" data-test="form" @submit.prevent="addCard">
        <h1 style="text-align: center;">Guest Ledger Book</h1>
        <input v-model="inpEmail" data-test="mail" id="email" class="min-w-full p-2 m-5" type="text" placeholder="please enter your email.." onload="focus" ><br>
        <input v-model="inpMsg" data-test="msg" id="message" class="min-w-full p-2 m-5" type="text" placeholder="please enter your message.."><br>
        <button id="submit" class="max-w-none text-black py-2 px-4 m-3 rounded shadow-2xl" style="margin: 10px;">SUBMIT</button>
    </form>
    <div class="max-w-md p-9 m-6 rounded-3xl shadow-2xl">
        <h1 style="text-align: center;">List</h1>
        <div v-for="item of list" :key="item" data-test="item" class="max-w-md p-9 m-6 rounded-3xl shadow-2xl">
            <p data-test="shownMail" @click="showMsg"><strong>email: </strong>{{ item.email }}</p>
            <p v-if="control" data-test="shownMessage"><strong>message: </strong>{{ item.message }}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Book',
    data(){
        return{ 
            control: false,
            inpEmail: "",
            inpMsg: "",   
            card:{
                email: "",
                message: ""
            },
            list: []    
        }
    },
    methods:{
        focus(){ document.getElementById('email').focus();},
        addCard(){
            this.card = { email: this.inpEmail, message: this.inpMsg }
            this.list.push(this.card)
            this.card = {}
        },
        showMsg(){ this.control = !this.control } 
    }
}
</script>
<style>
#email, #message {
    outline: none;
}
#submit{
    background: #94B3FD;
}
#submit:active {
    background: #94B3FD;
    box-shadow: 1px 1px 3px 1px rgba(0.2, 0.2, 0.1, 0.2);
    transform: translateY(4px);
}
</style>