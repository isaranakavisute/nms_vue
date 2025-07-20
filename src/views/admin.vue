<template>

  <div className="flex flex-col h-screen w-screen items-center justify-top bg-white">
       <div className="flex h-[5%] w-full items-center justify-center bg-blue-300 text-2xl">Pay Slip Sharing Tool</div>
       <div className="flex h-[15%] w-full flex-row items-center justify-between border-2 border-solid">
        <div className="flex h-[15vh] flex-row items-start">
         <div className="text-2xl">Welcome {{ getUsername() }}</div>
        </div>
        <div className="flex h-[15vh] flex-row items-center justify-center pr-10">
          <button className="rounded-lg bg-blue-300 pb-5 pl-20 pr-20 pt-5 text-2xl opacity-100">Log Out</button>
        </div>
       </div>
       <div className="flex flex-row h-1/2 w-full flex-row items-center bg-white ">
        <div className="flex flex-row h-1/2 w-1/4 flex-row items-center justify-center bg-blue-400 mr-20 ml-20 rounded-3xl">
         <input type="button" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-blue-400  h-full w-[20vh] rounded-lg" value="Upload File and Sharing" v-on:click.prevent = "upload_screen()" />
        </div>
        <div className="flex flex-row h-1/2 w-1/4 flex-row items-center justify-center bg-blue-400 mr-20 rounded-3xl">
         <input type="button" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-blue-400  h-full w-[20vh] rounded-lg" value="History Search" v-on:click.prevent = "admin_history_screen()" />
        </div>
        <div className="flex flex-row h-1/2 w-1/4 flex-row items-center justify-center bg-blue-400 mr-20 rounded-3xl">
         <input type="button" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-blue-400  h-full w-[20vh] rounded-lg" value="Monthly Statistics" v-on:click.prevent = "statistics_screen()" />
        </div>
        <div className="flex flex-row h-1/2 w-1/4 flex-row items-center justify-center bg-blue-400 mr-20 rounded-3xl">
         <input type="button" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-blue-400  h-full w-[20vh] rounded-lg" value="User Management" v-on:click.prevent = "usermanagement_screen()" />
        </div>
       </div>
   </div>

</template>

  <script>
  import { GET_USERNAME } from "../store/storeconstants";
  export default {
    name: 'WelcomeVIew',
    data() {
      return {}
    },
    methods:{
      getUsername() {
      return this.$store.getters[`auth/${GET_USERNAME}`]
    },
    upload_screen() {this.$router.push('/upload_screen')},
    admin_history_screen() {this.$router.push('/history_screen')},
    statistics_screen() {this.$router.push('/history_screen')},
    usermanagement_screen() {this.$router.push('/history_screen')},
   }
  }
  </script>