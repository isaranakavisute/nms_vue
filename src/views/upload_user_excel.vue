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
        <div className="flex h-[15%] w-full flex-row items-center justify-start border-2 border-solid">
                  <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" className="h-full border border-solid border-yellow text-black bg-yellow-100" />
                  <button v-on:click="submitFile()" className="ml-5 mr-5 bg-blue-100">Upload</button>
        </div>
        <div className="flex h-screen w-full flex-col justify-between">
         <div className="flex flex-col">
          <div className="flex w-full flex-row border-t border-solid border-black bg-green-200">
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">No.</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">ID</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">Mr,Mrs</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">Name</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">Surname</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">Company</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">Password</div>
          </div>
          <div className="flex w-full flex-row border-t border-b border-solid border-black" v-for="item in items">
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">{{item[0]}}</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">{{item[1]}}</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">{{item[2]}}</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">{{item[3]}}</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">{{item[4]}}</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">{{item[5]}}</div>
           <div className="flex w-1/5 h-full flex-row items-center justify-center border-l border-solid border-black text-xs">{{item[6]}}</div>
          </div>
         </div>
        <div className="flex w-full flex-row items-top justify-between border-0 border-solid pt-5">
          <div className="flex h-4/5 w-1/4 flex-col items-center justify-end bg-white pb-10">
            <button className="text-1xl rounded-lg border-2 border-solid pb-2 pl-10 pr-10 pt-2 opacity-100" v-on:click="go_back()">Back</button>
          </div>
          <div className="flex h-4/5 w-1/4 flex-col items-center justify-end bg-white pb-10">
            <button className="text-1xl rounded-lg border-2 border-solid pb-2 pl-10 pr-10 pt-2 opacity-100" v-on:click="write_to_prd()">Register</button>
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
        items: [],
        file: '',
        uploadpath: ''
      }
    },
    methods:{
      getUsername() {
      return this.$store.getters[`auth/${GET_USERNAME}`]
    },

    handleFileUpload() {
       this.file = this.$refs.file.files[0];
      },

    submitFile() {
       let formData = new FormData();
       formData.append('file', this.file);
       formData.append('publication_date', this.input.publication_date);
       axios.post( 'http://deploy-aws.com:5000/nms/upload_user_file',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then( 
              response => { 
              console.log(response.data); 
              this.uploadpath = response.data.upload_excel.full_uploaded_file_path;
              console.log(this.uploadpath);
              let object_index = 0;
                for (let k in response.data.uploaded_data) {
                 response.data.uploaded_data[object_index][0] = object_index + 1;
                 this.items.push(response.data.uploaded_data[object_index]);
                 object_index++;
                }
         })
        .catch(function(){
          console.log('FAILURE!!');
        });
      },

      write_to_prd()
      {
       let formData = new FormData();
       formData.append('uploadpath', this.uploadpath);
       axios.post( 'http://deploy-aws.com:5000/nms/write_user_prd',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then( 
              response => { 
              console.log(response.data); 
         })
        .catch(function(){
          console.log('FAILURE!!');
        });

        this.$router.push('/user_check_upload')
      },
      go_back() {
        this.$router.go(-1);
      }

   }
  }
  </script>

 


