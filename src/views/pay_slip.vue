<template>
  <div className="flex flex-col h-screen w-screen">
        <div className="flex h-[5vh] w-full items-center justify-center bg-blue-300 text-2xl">Pay Slip Sharing Tool</div>
        <div className="flex h-[15vh] w-full flex-row items-center justify-between border-2 border-solid">
                   <div className="flex h-[15vh] flex-row items-center">
                    <div className="pl-10 pr-10">
                     <!--
                     <Image
                      src={logo}
                      alt="nms logo"
                     />
                     -->
                    </div>
                    <div className="text-2xl">Welcome {{ getUsername() }}</div><!--<div className="pl-1 text-2xl text-blue-300">View Slip</div>-->
                   </div>
                  <div className="flex h-[15vh] flex-row items-center justify-center pr-10">
                   <button className="rounded-lg bg-blue-300 pb-5 pl-20 pr-20 pt-5 text-2xl opacity-100">Log Out</button>
                  </div>
        </div>
        <div className="flex h-screen w-full flex-row items-top justify-between border-2 border-solid">
          <div className="flex h-full w-1/4 flex-col items-center justify-end bg-white pb-0">
            <button className="text-1xl rounded-lg border-2 border-solid pb-2 pl-10 pr-10 pt-2 opacity-100" v-on:click="go_back()">Back</button>
          </div>






           <div className="flex h-4/5 w-2/4 flex-col items-center justify-center border-0 border-solid bg-white">
                     <div className="flex h-1/4 w-full flex-row items-center justify-center border-0 border-solid bg-white">
                      <div className="flex h-full w-3/4 flex-row items-center justify-center border-0 border-solid bg-white">
                       <div className="flex h-full w-1/4 flex-col items-center justify-start border-0 border-solid bg-white">
                        <div className="pt-7">
                         <!--
                         <Image
                          src={logo}
                          alt="nms logo"
                         />
                         -->
                        </div>
                       </div>
                       <div className="flex h-full w-3/4 flex-col items-center justify-center border-0 border-solid bg-white">
                         <div className="flex h-3/4 w-full flex-row items-center justify-center border-0 border-solid bg-white">
                          <div className="pt-5 text-xs">
                           nms (Thailand) Co.,Ltd.  
                           4/222 Harbor Office,6th Floor,Room 6B01,Moo 10.
                           Sukhumvit Rd. T. Tungsukia,A. Sriracha Chonburi 20230
                          </div>
                         </div>
                         <div className="flex h-1/4 w-full flex-row items-center justify-center border-0 border-solid bg-white">
                          Name-Lastname
                         </div>
                       </div>
                      </div>
                      <div className="flex h-full w-1/4 flex-col items-center justify-center border-0 border-solid bg-white">
                       <div className="flex h-1/4 w-full flex-row items-center justify-center border-0 border-solid bg-white">
                        PAY SLIP
                       </div>
                       <div className="flex h-2/4 w-full flex-row items-center justify-center border border-solid border-black bg-white">
                            <div className="flex h-full w-1/2 flex-col items-center justify-center border-0 border-solid bg-white">
                             <div className="flex h-1/3 w-full flex-row items-center justify-start border-0 border-solid bg-white">
                               <div className="pl-5 text-xs">
                                Period
                               </div>
                             </div>
                             <div className="flex h-1/3 w-full flex-row items-center justify-start border-0 border-solid bg-white">
                              <div className="pl-5 text-xs">
                               Branch
                              </div>
                             </div>
                             <div className="flex h-1/3 w-full flex-row items-center justify-start border-0 border-solid bg-white">
                              <div className="pl-5 text-xs">
                               Emp No
                              </div>
                             </div>
                            </div>
                            <div className="flex h-full w-1/2 flex-col items-center justify-center border-0 border-solid bg-white">
                             <div className="flex h-1/3 w-full flex-row items-center justify-center border-0 border-solid bg-white">
                              <!--<div className="pr-5 text-[0.35rem]">
                               Sep-24
                              </div>-->
                              <div className="pr-5 text-xs">
                               Sep-24
                              </div>
                             </div>
                             <div className="flex h-1/3 w-full flex-row items-center justify-center border-0 border-solid bg-white">
                              <div className="pr-5 text-xs">
                               A Company
                              </div>
                             </div>
                             <div className="flex h-1/3 w-full flex-row items-center justify-center border-0 border-solid bg-white">
                              <div className="pr-5 text-xs">
                               151450000741
                              </div>
                             </div>
                            </div>
                       </div>
                       <div className="flex h-1/4 w-full flex-row items-center justify-center border-0 border-solid bg-white">
                        <div className="flex h-full w-1/2 flex-col items-center justify-center border-0 border-solid bg-white">
                         <div className="flex h-1/2 w-full flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="text-xs">
                               ID Card
                            </div>
                         </div>
                         <div className="flex h-1/2 w-full flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="text-xs">
                               Division
                            </div>
                         </div>
                        </div>
                        <div className="flex h-full w-1/2 flex-col items-center justify-center border-0 border-solid bg-white">
                         <div className="flex h-1/2 w-full flex-row items-center justify-center border-0 border-solid bg-white">
                            <div className="text-xs">
                               1-5145-4000-74-1
                            </div>
                         </div>
                         <div className="flex h-1/2 w-full flex-row items-center justify-center border-0 border-solid bg-white">
                            <div className="text-xs">
                               Production
                            </div>
                         </div>
                        </div>
                       </div>
                      </div>
                     </div>
                     <div className="flex h-3/4 w-full flex-row items-center justify-center border-l border-b border-r border-t border-solid border-black bg-white">
                      <div className="flex h-full w-1/3 flex-col items-center justify-center border-r border-solid border-black bg-white">
                       <div className="flex h-1/10 w-full flex-row items-center justify-center border-b border-solid border-black bg-white">
                        <div className="text-xs">
                        Income
                        </div>
                       </div>
                       <div className="flex h-8/10 w-full flex-col items-center justify-start border-0 border-solid border-black bg-white">
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 pt-5 text-xs">
                            ค่าจ้าง
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pt-5 text-xs">
                            26.0
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 pt-5 text-xs">
                            9,620.00
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            Rental
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="text-xs">
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            1,300.00
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            Meal
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="text-xs">
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            1300.00
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            Meal OT
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="text-xs">
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            3,000.00
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            Transport
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="text-xs">
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            900.00
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            Night Shift
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="text-xs">
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            2,400.00
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            xx
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="text-xs">
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            xx
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="text-xs">
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            -
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            xx
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="text-xs">
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            1,720.00
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            Diligent
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="text-xs">
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            1,500.00
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            OT 1.5x
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="text-xs">
                            27.60
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            1,852.45
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            OT. 2.0
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="text-xs">
                             48.00
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                             4,440.00
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            OT 3.x
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="text-xs">
                            -
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            -
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            Traditional
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="text-xs">

                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            -
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            xx
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="text-xs">

                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">

                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            AL LSD
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="text-xs">

                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            -
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            Other
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="text-xs">

                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            -
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            xx
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="text-xs">

                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            -
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="text-xs">

                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">

                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="text-xs">

                            </div>
                           </div>
                           <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">

                            </div>
                           </div>
                         </div>
                       </div>
                       <div className="flex h-1/10 w-full flex-row items-center justify-center border-0 border-t border-solid border-black bg-white">
                        <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid border-black bg-white">
                         <div className="pl-5 text-xs">
                         Total Income
                         </div>
                        </div>
                        <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid border-black bg-white">
                         <div className="pr-5 text-xs">
                         28,032.45
                         </div>
                        </div>
                       </div>
                      </div>
                      <div className="flex h-full w-1/3 flex-col items-center justify-center border-r border-solid border-black">
                       <div className="flex h-1/10 w-full flex-col items-center justify-center border-b border-solid border-black">
                        <div className="text-xs h-full w-full items-center justify-center">
                         Deduction
                        </div>
                       </div>
                       <div className="flex h-8/10 w-full flex-col items-center justify-start border-0 border-solid border-black">
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid">
                           <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 pt-5 text-xs">
                            Tax
                            </div>
                           </div>
                           <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 pt-5 text-xs">
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            SSF
                            </div>
                           </div>
                           <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            469.00
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            xx
                            </div>
                           </div>
                           <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">

                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            Late
                            </div>
                           </div>
                           <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            -
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            Absence
                            </div>
                           </div>
                           <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">

                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            Advance
                            </div>
                           </div>
                           <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">

                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            Uniform
                            </div>
                           </div>
                           <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            -
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            Other
                            </div>
                           </div>
                           <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            -
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                           <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                           <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                           <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                           <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                           <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                           <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                           <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                           <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                           <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                           <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                           <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                         </div>
                         <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                           <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                            <div className="pl-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                           <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                            <div className="pr-5 text-xs">
                            {{'\xa0'}}
                            </div>
                           </div>
                         </div>
                       </div>
                       <div className="flex h-1/10 w-full flex-row items-center justify-center border-0 border-solid border-black bg-white">
                        <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-l border-t border-solid border-black bg-white">
                         <div className="pl-5 text-xs">
                         Total Deduction
                         </div>
                        </div>
                        <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-t border-solid border-black bg-white">
                         <div className="pr-5 text-xs">
                         469.00
                         </div>
                        </div>
                       </div>
                      </div>
                      <div className="flex h-full w-1/3 flex-col items-center justify-top border-0 border-solid border-black bg-white">
                       <div className="flex h-1/10 w-full flex-row items-center justify-center border-b border-solid border-black bg-white pt-10">
                        <div className="text-xs">
                         {{'\xa0'}}
                        </div>
                       </div>
                       <div className="flex h-[70vh] w-full flex-col items-center justify-start border-b border-solid border-black bg-white">
                        <div className="flex h-[4vh] w-full flex-row items-center justify-center border-b border-solid border-black bg-white">
                         <div className="flex h-full w-1/2 flex-row items-center justify-start border-r border-solid border-black bg-white pl-5">
                          <div className="text-xs">
                            xxx
                          </div>
                         </div>
                         <div className="flex h-full w-1/2 flex-row items-center justify-end border-solid border-black bg-white">
                          <div className="pr-5 text-xs">
                            208,000.00
                          </div>
                         </div>
                        </div>
                        <div className="flex h-[4vh] w-full flex-row items-center justify-center border-b border-solid border-black bg-white">
                         <div className="flex h-full w-1/2 flex-row items-center justify-start border-r border-solid border-black bg-white pl-5">
                          <div className="text-xs">
                            xxx
                          </div>
                         </div>
                         <div className="flex h-full w-1/2 flex-row items-center justify-end border-solid border-black bg-white">
                          <div className="pr-5 text-xs">
                            3,600.00
                          </div>
                         </div>
                        </div>
                        <div className="flex h-[4vh] w-full flex-row items-center justify-center border-b border-solid border-black bg-white">
                         <div className="flex h-full w-1/2 flex-row items-center justify-start border-r border-solid border-black bg-white pl-5">
                          <div className="text-xs">
                            xxx
                          </div>
                         </div>
                         <div className="flex h-full w-1/2 flex-row items-center justify-end border-solid border-black bg-white">
                          <div className="pr-5 text-xs">
                          </div>
                         </div>
                        </div>
                        <div className="flex h-[4vh] w-full flex-row items-center justify-center border-solid border-black bg-white">
                         <div className="flex h-full w-1/2 flex-row items-center justify-start border-r border-solid border-black bg-white pl-5">
                          <div className="text-xs">
                            xxx
                          </div>
                         </div>
                         <div className="flex h-full w-1/2 flex-row items-center justify-end border-solid border-black bg-white">
                          <div className="pr-5 text-xs">
                          </div>
                         </div>
                        </div>
                        <div className="flex h-full w-full flex-row items-center justify-center border-l border-solid border-black">
                        </div>
                       </div>
                       <div className="flex h-[20vh] w-full flex-row items-center justify-center border-0 border-solid border-black bg-white">
                        <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid border-black bg-white">
                         <div className="pl-5 text-xs">
                          Net Income
                         </div>
                        </div>
                        <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid border-black bg-white">
                         <div className="pr-5 text-xs">
                          27,563.45
                         </div>
                        </div>
                       </div>
                      </div>
                     </div>
                   </div>







           <div className="flex h-full w-1/4 flex-row items-center justify-end">
                     <div className="flex h-full w-[30vh] flex-row items-start justify-start border-0 border-solid border-black bg-white pb-5 pl-5 pt-5">
                      Publication date
                      2014.12.25
                     </div>
                     <div className="flex h-full w-full flex-row items-end justify-end bg-white pb-0 pr-10">
                      <button className="text-1xl rounded-lg bg-blue-300 pb-2 pl-10 pr-10 pt-2 opacity-100">Downlod PDF</button>
                     </div>
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
    go_back() {
        this.$router.go(-1);
      }
    /*
     payslip_screen(){
       this.$router.push('/pay_slip_screen')
     },
     history_screen(){
            this.$router.push('/history_screen')
          }
    */
   }
  }
  </script>


