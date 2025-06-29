<template>

  <div className="flex flex-col h-screen w-screen items-center justify-top bg-white">
       <div className="flex flex-row h-1/4 w-full flex-row items-center justify-center bg-white">
        <div className="text-3l pl-20">ยินดีต้อนรับ {{getUsername()}}</div>
       </div>
       <div className="flex flex-row h-1/2 w-1/2 flex-row items-center justify-center bg-white">
        <div className="flex flex-row h-1/2 w-1/2 flex-row items-center justify-center bg-blue-400 mr-20 rounded-3xl">
         <input type="button" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-blue-400  h-full w-[20vh] rounded-lg" value="ตรวจสอบสลิบเงินเดือน" v-on:click.prevent = "payslip_screen()" />
        </div>
        <div className="flex flex-row h-1/2 w-1/2 flex-row items-center justify-center bg-blue-400 rounded-3xl">
         <input type="button" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-blue-400  h-full w-[20vh] rounded-lg" value="ค้นหาประวัติ" v-on:click.prevent = "history_screen()" />
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
     payslip_screen(){
       this.$router.push('/pay_slip_screen')
     },
     history_screen(){
            this.$router.push('/history_screen')
          }
   }
  }
  </script>