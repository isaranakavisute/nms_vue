<template>
<form name="login-form" >
 <div className="flex flex-col h-screen w-screen items-center justify-center bg-white">
     <div className="flex h-screen w-full flex-row items-center justify-center bg-white">
             <div className="flex h-1/2 w-1/2 bg-white flex-col justify-center rounded-xl">
               <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-15 mt-10">
                <div className="text-3xl pb-10">NMS</div>
               </div>
               <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-start mb-10">
                <div className="text-3xl h-full w-1/4 border-0 border-solid border-black flex flex-col justify-center ml-5">USERNAME</div>
                <div className="h-full w-3/4 border-0 border-solid border-black flex flex-row justify-start items-center"><input type="text" id="username" name="username" v-model="input.username" className="h-full w-full border border-solid border-yellow text-2xl cursor-wait mr-5"  /></div>
               </div>
               <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-start mb-10">
                <div className="text-3xl h-full w-1/4 border-0 border-solid border-black flex flex-col justify-center ml-5">PASSWORD</div>
                <div className="h-full w-3/4 border-0 border-solid border-black flex flex-row justify-start items-center"><input type="text" id="password" name="password" v-model="input.password" className="h-full w-full border border-solid border-yellow text-2xl cursor-wait mr-5"  /></div>
               </div>
               <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-0">
                 <input type="submit" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-amber-200 h-full w-[20vh] rounded-lg" value="Log In" v-on:click.prevent = "login()" />
                 <input type="reset" className="pl-2 pr-2 pt-2 pb-2 bg-amber-200 h-full w-[20vh] rounded-lg" value="Cancel" />
               </div>
               <p>Username is: {{input.username}}</p>
               <p>Password is: {{input.password}}</p>
               <p>Message: {{input.login_status}}</p>
             </div>
     </div>
 </div>
 </form>
</template>

<script>
import { SET_AUTHENTICATION, SET_USERNAME } from "../store/storeconstants";
export default {
  name: 'LoginView',
  data(){
    return{
        input:{
            username: "",
            password: "",
            login_status: ""
        }
    }
  },
   methods:{
      login(){
        //make sure username OR password are not empty
        if (this.input.username == "user" && this.input.password == "user"){
          console.log("cannot enter user mode")
          this.input.login_status = "User Mode is not opened for testing";
          //this.$router.push('/welcome')
          //this.$store.commit(`auth/${SET_AUTHENTICATION}`, true);
          //this.$store.commit(`auth/${SET_USERNAME}`, this.input.username);
        }
        else if (this.input.username == "admin" && this.input.password == "admin"){
          console.log("authenticated")
          this.$router.push('/admin')
          this.$store.commit(`auth/${SET_AUTHENTICATION}`, true);
          this.$store.commit(`auth/${SET_USERNAME}`, this.input.username);
        }
        else if (this.input.username != "" && this.input.password != "") {
          console.log("Username/Password is wrong");
          this.input.login_status = "Username/Password is wrong.";
        }
        else
        {
          console.log("Username/Password is empty");
          this.input.login_status = "Username/Password is empty.";
        }
      }
    },
}
</script>

