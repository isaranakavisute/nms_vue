<template>

 <div className="flex flex-col h-screen w-screen items-center justify-center bg-white">
     <div className="flex h-screen w-full flex-row items-center justify-center bg-white">
             <div className="flex h-1/2 w-1/2 bg-white flex-col justify-center rounded-xl">
               <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-15 mt-10">
                <div className="text-3xl pb-10">NMS</div>
               </div>
               <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-start mb-10">
                <div className="text-3xl h-full w-1/4 border-0 border-solid border-black flex flex-col justify-center ml-5">USERNAME</div>
                <div className="h-full w-3/4 border-0 border-solid border-black flex flex-row justify-start items-center"><input type="text" name="username" className="h-full w-full border border-solid border-yellow text-2xl cursor-wait mr-5"  /></div>
               </div>
               <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-start mb-10">
                <div className="text-3xl h-full w-1/4 border-0 border-solid border-black flex flex-col justify-center ml-5">PASSWORD</div>
                <div className="h-full w-3/4 border-0 border-solid border-black flex flex-row justify-start items-center"><input type="text" name="password" className="h-full w-full border border-solid border-yellow text-2xl cursor-wait mr-5"  /></div>
               </div>
               <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-0">
                 <input type="submit" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-amber-200 h-full w-[20vh] rounded-lg" value="Log In" />
                 <input type="reset" className="pl-2 pr-2 pt-2 pb-2 bg-amber-200 h-full w-[20vh] rounded-lg" value="Cancel" />
               </div>
               <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-start justify-center mt-10">
               </div>
             </div>
     </div>
 </div>

</template>
