<template>
  <div className="flex flex-col w-screen h-screen">
        <div className="flex h-[5%] w-full items-center justify-center bg-blue-900 text-2xl">Pay Slip Sharing Tool</div>
        <div className="flex h-[15%] w-full flex-row items-center justify-between border-2 border-solid">
                  <div className="flex h-[15vh] flex-row items-start">
                    <div className="text-2xl">Welcome {{ getUsername() }}</div>
                  </div>
                  <!--
                  <div className="flex h-[5vh] flex-row items-center justify-center pr-10 mt-2 mb-2">
                   <button className="rounded-lg bg-blue-300 pb-2 pl-2 pr-2 pt-2 text-xs opacity-100">Log Out</button>
                  </div>
                  -->
                  <div className="flex h-[5vh] flex-row items-center justify-center pr-10 mt-2 mb-2">
                   <button className="rounded-lg bg-blue-900 pb-5 pl-20 pr-20 pt-5 text-xs opacity-100 text-white">Log Out</button>
                  </div>
        </div>
        <div className="flex h-screen w-full flex-col justify-between">
         <div className="flex flex-col">

          <!--
          <div className="flex w-full flex-row border-t border-solid border-black bg-green-200">
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">No.</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">ID</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">Name</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">แผนก</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">ID.Card.</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">Start working</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">Total Income</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">Total Payment</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-r border-solid border-black text-xs">View</div>
          </div>
          <div className="flex w-full flex-row border-t border-b border-solid border-black" v-for="item in items">
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">{{item[0]}}</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">{{item[1]}}</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">{{item[2]}}</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">{{item[3]}}</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">{{item[4]}}</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">{{item[5]}}</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">{{item[11]}}</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">{{item[12]}}</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-r border-solid border-black text-xs pt-2 pb-2"><button className="text-1xl rounded-lg bg-blue-900 pb-2 pl-10 pr-10 pt-2 opacity-100 text-white" v-on:click="open_payslip()">View</button></div>
          </div>
          -->

        <div>
          <table width="100%">
           <thead>
            <tr className="bg-white">
             <td className="text-xs">No.</td>
             <td className="text-xs">ID</td>
             <td className="text-xs">Name</td>
             <td className="text-xs">แผนก</td>
             <td className="text-xs">ID.Card.</td>
             <td className="text-xs">Start working</td>
             <td className="text-xs">Total Income</td>
             <td className="text-xs">Total Payment</td>
             <td className="text-xs">View</td>
            </tr>
          </thead>
          <tbody>
           <tr v-for="item in items">
             <td className="text-xs">{{item[1]}}</td>
             <td className="text-xs">{{item[2]}}</td>
             <td className="text-xs">{{item[3]}}</td>
             <td className="text-xs">{{item[5]}}</td>
             <td className="text-xs">{{item[4]}}</td>
             <td className="text-xs">{{item[6]}}</td>
             <td className="text-xs">{{item[90]}}</td>
             <td className="text-xs">{{item[105]}}</td>
             <td className="text-xs"><button className="text-xs rounded-lg bg-blue-900 pb-2 pl-10 pr-10 pt-2 opacity-100 mt-2 mb-2 text-white" v-on:click="open_payslip(item[0])">View</button></td>
            </tr>
          </tbody>
          </table>
         </div>


         </div>
        <div className="flex w-full flex-row items-top justify-between border-0 border-solid pt-5">
          <div className="flex h-4/5 w-1/4 flex-col items-center justify-center bg-white pb-10">
            <button className="text-1xl rounded-lg border-2 border-solid pb-2 pl-10 pr-10 pt-2 opacity-100" v-on:click="go_back()">Back</button>
          </div>
          <div className="flex h-4/5 w-1/4 flex-col items-center justify-center bg-white pb-10">
            <button className="text-1xl rounded-lg border-2 border-solid pb-2 pl-10 pr-10 pt-2 opacity-100" v-on:click="">Setup</button>
          </div>
        </div>
      </div>
  </div>
</template>


<script>
  import { GET_USERNAME } from "../store/storeconstants";
  import axios from 'axios';
  export default {
    name: 'SearchView',
    data() {
      return {
         input:{
            publication_date: ""
        },
        items: []
      }
    },
    methods:{
      getUsername() {
      return this.$store.getters[`auth/${GET_USERNAME}`]
    },

    get_temp_table()
      {
       let formData = new FormData();
       formData.append('uploadpath', this.uploadpath);
       axios.post( 'http://deploy-aws.com:5000/nms/get_payslip_temp_table',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then( 
              response => { 
              console.log(response.data); 

              let object_index = 0;
                for (let k in response.data) {
                 //response.data[object_index][0] = object_index + 1;
                 this.items.push(response.data[object_index]);
                 object_index++;
                }
         })
        .catch(function(){
          console.log('FAILURE!!');
        });
      },

      open_payslip(row_id){
        //this.$router.push('/pay_slip_screen'+'?row_id='+row_id)
        //pay_slip_admin
        this.$router.push('/pay_slip_admin'+'?row_id='+row_id)
      },

       go_back() {
        this.$router.go(-1);
      }
   },
  beforeMount() {
    this.get_temp_table();
  }
  }
  </script>

 


