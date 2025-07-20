<template>
  <div className="flex flex-col w-screen h-screen">
        <div className="flex h-[5%] w-full items-center justify-center bg-blue-300 text-2xl">Pay Slip Sharing Tool</div>
        <div className="flex h-[15%] w-full flex-row items-center justify-between border-2 border-solid">
                  <div className="flex h-[15vh] flex-row items-start">
                    <div className="text-2xl">Welcome {{ getUsername() }}</div>
                  </div>
                  <div className="flex h-[15vh] flex-row items-center justify-center pr-10">
                   <button className="rounded-lg bg-blue-300 pb-5 pl-20 pr-20 pt-5 text-2xl opacity-100">Log Out</button>
                  </div>
        </div>
        <div className="flex h-[15%] w-full flex-row items-center justify-between border-2 border-solid">
                   <div className="flex h-[15vh] flex-col items-start w-1/2">
                    <div className="flex w-full flex-row items-center">
                     <div className="text-xm w-full">เดือนที่เริ่มต้น</div>
                     <div className="text-xm w-full">เดือนที่สิ้นสุด</div>
                    </div>
                    <div className="flex w-full flex-row items-center">
                     <input type="text" id="starting_month" name="starting_month" v-model="input.starting_month" className="h-full w-full border border-solid border-yellow text-2xl cursor-wait mr-5"  />
                     <input type="text" id="ending_month" name="ending_month" v-model="input.ending_month" className="h-full w-full border border-solid border-yellow text-2xl cursor-wait mr-5"  /> 
                    </div>
                    <p>starting_month is: {{input.starting_month}}</p>
                    <p>ending_month is: {{input.ending_month}}</p>
                   </div>
                  <div className="flex h-[15vh] flex-row items-center justify-end pr-10 w-1/2">
                   <button className="rounded-lg bg-blue-300 pb-5 pl-10 pr-10 pt-5 text-xs opacity-100" v-on:click.prevent = "search()" >ค้นหา</button>
                  </div>
        </div>
        <div className="flex h-screen w-full flex-col justify-between">
         <div className="flex flex-col">
          <div className="flex w-full flex-row border-t border-solid border-black bg-green-200">
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black">ลำดับ</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black">ชื่อ</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black">นามสกุล</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black">บริษัท</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black">หมายเลขบัตรประชาชน</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black">รอบเดือน</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black">View</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-r border-solid border-black">Download</div>
          </div>
          <div className="flex w-full flex-row border-b border-solid border-black" v-for="item in items" >
            <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black">{{item[0]}}</div>
            <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black">{{item[1]}}</div>
            <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black">{{item[2]}}</div>
            <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black">{{item[3]}}</div>
            <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black">{{item[4]}}</div>
            <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black">{{item[5]}}</div>
            <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black">-</div>
            <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-r border-solid border-black">-</div>
           </div>
         </div>
        <div className="flex w-full flex-row items-top justify-start border-0 border-solid pt-5">
          <div className="flex h-4/5 w-1/4 flex-col items-center justify-end bg-white pb-10">
            <button className="text-1xl rounded-lg border-2 border-solid pb-2 pl-10 pr-10 pt-2 opacity-100" v-on:click="go_back()">Back</button>
          </div>
        </div>
      </div>
  </div>
</template>


<script>

  /*
  const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
  { id: 6, name: "Item 6" },
  { id: 7, name: "Item 7" },
  { id: 8, name: "Item 8" },
  { id: 9, name: "Item 9" },
  { id: 10, name: "Item 10" },
  { id: 11, name: "Item 11" },
  { id: 12, name: "Item 12" },
  ];
  */
  

  import { GET_USERNAME } from "../store/storeconstants";
  import axios from 'axios';
  export default {
    name: 'SearchView',
    data() {
      return {
         input:{
            starting_month: "",
            ending_month: ""
        },
        items: []
      }
    },
    methods:{
      getUsername() {
      return this.$store.getters[`auth/${GET_USERNAME}`]
    },
      search() {
        axios.post('http://deploy-aws.com:5000/nms/listall', { name: '123' })
            .then(response => {
                console.log(response.data);

                let object_index = 0;
                for (let k in response.data) {
                 this.items.push(response.data[object_index]);
                 object_index++;
                }
            })
            .catch(error => {
                console.error(error);
            });
      },
      go_back() {
        this.$router.go(-1);
      }
   },
   beforeMount() {
    this.search();
  }
  }
  </script>

 


