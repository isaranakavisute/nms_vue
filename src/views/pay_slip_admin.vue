<template>
  <div className="flex flex-col h-screen w-screen">
        <div className="flex h-[5vh] w-full items-center justify-center bg-blue-300 text-2xl">Pay Slip Sharing Tool</div>
        <div className="flex h-[15vh] w-full flex-row items-center justify-between border-2 border-solid">
                   <div className="flex h-[15vh] flex-row items-center">
                    <div className="pl-10 pr-10">
                     <img alt="" src="../assets/nms.png" className="h-full bg-white">
                    </div>
                    <div className="text-2xl">Welcome {{ getUsername() }}</div><!--<div className="pl-1 text-2xl text-blue-300">View Slip</div>-->
                   </div>
                   <div className="flex h-[5vh] flex-row items-center justify-center pr-10 mt-2 mb-2">
                    <button className="rounded-lg bg-blue-300 pb-2 pl-2 pr-2 pt-2 text-xs opacity-100">Log Out</button>
                   </div>
        </div>
        <div className="flex w-full flex-row items-top justify-center border-2 border-solid">

          <!--Left Panel-->
          <!--
          <div className="flex h-full w-1/4 flex-col items-center justify-end bg-white pb-0 bg-white">
            <button className="text-1xl rounded-lg border-2 border-solid pb-2 pl-10 pr-10 pt-2 opacity-100" v-on:click="go_back()">Back</button>
          </div>
          -->

          <!--Middle Panel-->
          <div className="flex w-3/4 flex-col items-center justify-start border-0 border-solid border-black bg-white">


                    <table width="100%" className="mt-2 mb-2 mr-2 ml-2">
                     <thead>

                      <!--first row-->
                      <tr>
                       <table width="100%" className="mt-0 mb-0 mr-0 ml-0">
                        <thead>
                         <tr>
                          <td width="10%" align="left"><img alt="" src="../assets/nms.png"></td>
                          <td width="60%">
                           <table width="100%" align="top">
                            <tr width="100%"> 
                             <td style="border: 0px solid #ccc;" width="100%" align="center">
                              <table width="100%">
                               <tr>
                                <td>
                                 <div className="text-sm">nms (Thailand) Co.,Ltd.</div>
                                </td>
                               </tr>
                               <tr>
                                <td>
                                 <div className="text-sm">4/222 Harbor Office,6th Floor,Room 6B01,Moo 10. Sukhumvit Rd. T. Tungsukia,A. Sriracha Chonburi 20230</div>
                                </td>
                               </tr>
                              </table>
                             </td>
                            </tr>
                           </table>
                          </td>
                          <td width="30%">
                           <table width="100%" className="mt-0 mb-0 mr-0 ml-0">
                            <thead>
                             <tr width="100%">
                              <td width="100%"><div className="text-xs">ใบรับเงิน / PAY SLIP</div></td>
                             </tr>
                             <tr width="100%">
                              <td width="100%">
                               <table width="100%">
                                 <tr width="100%">
                                  <td style="border: 1px solid #ccc;" width="100%">
                                   <table width="100%">
                                    <theader>
                                     <tr width="100%">
                                      <td width="90%" align="left"><div className="text-xs">ประจำงวด/Period</div></td>
                                      <td width="10%" align="left"><div className="text-xs">xxx</div></td>
                                     </tr>
                                     <tr width="100%">
                                      <td width="90%" align="left"><div className="text-xs">ประจำสาขา/Branch</div></td>
                                      <td width="10%" align="left"><div className="text-xs">xxx</div></td>
                                     </tr>
                                     <tr width="100%">
                                      <td width="90%" align="left"><div className="text-xs">รหัสพนักงาน/Employee No</div></td>
                                      <td width="10%" align="left"><div className="text-xs">xxx</div></td>
                                     </tr>
                                     <tr width="100%">
                                      <td width="90%" align="left"><div className="text-xs">แผนก/Dept</div></td>
                                      <td width="10%" align="left"><div className="text-xs">xxx</div></td>
                                     </tr>
                                    </theader>
                                   </table>
                                  </td>
                                </tr>
                              </table>
                             </td>
                             </tr>
                            </thead>
                           </table>
                          </td>
                         </tr>
                        </thead>
                       </table>
                      </tr>

                      <!--Second row-->
                      <tr width="100%">
                       <table width="100%" className="mt-0 mb-0 mr-0 ml-0">
                        <tr width="100%">
                         <td width="10%" align="center"></td>
                         <td width="60%">
                          <table width="100%" align="center">
                           <tr>
                            <td width="25%"><div className="text-xs">ชื่อสกุล/Emp.</div></td>
                            <td width="25%"><div className="text-xs">xxx</div></td>
                            <td width="25%"><div className="text-xs">ตำแหน่ง/Position</div></td>
                            <td width="25%"><div className="text-xs">xxx</div></td>
                           </tr>
                          </table>
                         </td>
                         <td width="30%" align="center"></td>
                        </tr>
                       </table>
                      </tr>

                      <!--Third row-->
                      <tr width="100%">
                       <table width="100%" className="mt-0 mb-0 mr-0 ml-0">
                        <tr width="100%">
                         <td width="30%" style="border: 1px solid #ccc;" align="center"><div className="text-xs">รายได้(Income)</div></td>
                         <td width="30%" style="border: 1px solid #ccc;" align="center"><div className="text-xs">รายการหัก(Deduction)</div></td>
                         <td width="30%" style="border: 1px solid #ccc;" align="center"><div className="text-xs"></div></td>
                        </tr>
                        <tr width="100%">
                         <td width="30%" style="border: 1px solid #ccc;vertical-align:top" align="left">
                          <table width="100%" className="mt-0 mb-0 mr-0 ml-0">
                           <tr width="100%">
                            <td width="70%" align="left"><div className="text-xs">เงินเดือนค่าจ้าง/Wage(K)</div></td>
                            <td width="20%" align="left">
                             <table width="100%">
                              <tr width="100%">
                               <td width="50%"><div className="text-xs" align="left">xxx</div></td>
                               <td><div className="text-xs" align="left">บาท/วัน</div></td>
                              </tr>
                             </table>
                            </td>
                            <td width="10%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">วันทำงาน/Working days(J)</div></td>
                            <td width="35%" align="left">
                              <table width="100%">
                               <tr width="100%">
                                <td width="50%"><div className="text-xs" align="left">xxx</div></td>
                                <td><div className="text-xs" align="left">วัน</div></td>
                               </tr>
                              </table>
                            </td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                          <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ชั่วโมงการทำงาน/Working hours</div></td>
                            <td width="35%" align="left">
                             <table width="100%">
                               <tr width="100%">
                                <td width="50%"><div className="text-xs" align="left">xxx</div></td>
                                <td><div className="text-xs" align="left">ชม</div></td>
                               </tr>
                              </table>
                            </td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">วันหยุดประเพณี/Traditional</div></td>
                            <td width="35%" align="left">
                              <table width="100%">
                               <tr width="100%">
                                <td width="50%"><div className="text-xs" align="left">xxx</div></td>
                                <td><div className="text-xs" align="left">วัน</div></td>
                               </tr>
                              </table>
                            </td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">พักร้อน,ป่วย,ลากิจ,ลาคลอด/Maternity Leave,AL,SLD,BLD</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าแรง 75%/Pay 75% of the wage</div></td>
                            <td width="35%" align="left">
                              <table width="100%">
                               <tr width="100%">
                                <td width="50%"><div className="text-xs" align="left">xxx</div></td>
                                <td><div className="text-xs" align="left">วัน</div></td>
                               </tr>
                              </table>
                            </td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าแรง 80%/Pay 80% of the wage</div></td>
                            <td width="35%" align="left">
                              <table width="100%">
                               <tr width="100%">
                                <td width="50%"><div className="text-xs" align="left">xxx</div></td>
                                <td><div className="text-xs" align="left">วัน</div></td>
                               </tr>
                              </table>
                            </td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าแรง 85%/Pay 85% of the wage</div></td>
                            <td width="35%" align="left">
                              <table width="100%">
                               <tr width="100%">
                                <td width="50%"><div className="text-xs" align="left">xxx</div></td>
                                <td><div className="text-xs" align="left">วัน</div></td>
                               </tr>
                              </table>
                            </td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">วันหยุด/Holiday</div></td>
                            <td width="35%" align="left">
                              <table width="100%">
                               <tr width="100%">
                                <td width="50%"><div className="text-xs" align="left">xxx</div></td>
                                <td><div className="text-xs" align="left">วัน</div></td>
                               </tr>
                              </table>
                            </td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าล่วงเวลา OTx1</div></td>
                            <td width="35%" align="left">
                              <table width="100%">
                               <tr width="100%">
                                <td width="50%"><div className="text-xs" align="left">xxx</div></td>
                                <td><div className="text-xs" align="left">ชม</div></td>
                               </tr>
                              </table>
                            </td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าล่วงเวลา OTx1.3</div></td>
                            <td width="35%" align="left">
                              <table width="100%">
                               <tr width="100%">
                                <td width="50%"><div className="text-xs" align="left">xxx</div></td>
                                <td><div className="text-xs" align="left">ชม</div></td>
                               </tr>
                              </table>
                            </td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าล่วงเวลา OTx1.5</div></td>
                            <td width="35%" align="left">
                              <table width="100%">
                               <tr width="100%">
                                <td width="50%"><div className="text-xs" align="left">xxx</div></td>
                                <td><div className="text-xs" align="left">ชม</div></td>
                               </tr>
                              </table>
                            </td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                          <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าล่วงเวลา OTx1.7 </div></td>
                            <td width="35%" align="left">
                              <table width="100%">
                               <tr width="100%">
                                <td width="50%"><div className="text-xs" align="left">xxx</div></td>
                                <td><div className="text-xs" align="left">ชม</div></td>
                               </tr>
                              </table>
                            </td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าล่วงเวลา OTx2  ปกติ/OTx2 Regular Work Day</div></td>
                            <td width="35%" align="left">
                              <table width="100%">
                               <tr width="100%">
                                <td width="50%"><div className="text-xs" align="left">xxx</div></td>
                                <td><div className="text-xs" align="left">ชม</div></td>
                               </tr>
                              </table>
                            </td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าล่วงเวลา OTx2.2</div></td>
                            <td width="35%" align="left">
                              <table width="100%">
                               <tr width="100%">
                                <td width="50%"><div className="text-xs" align="left">xxx</div></td>
                                <td><div className="text-xs" align="left">ชม</div></td>
                               </tr>
                              </table>
                            </td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าล่วงเวลา OTx3  ปกติ/OTx3 Regular Work Day</div></td>
                            <td width="35%" align="left">
                              <table width="100%">
                               <tr width="100%">
                                <td width="50%"><div className="text-xs" align="left">xxx</div></td>
                                <td><div className="text-xs" align="left">ชม</div></td>
                               </tr>
                              </table>
                            </td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าล่วงเวลา OTx2 วันนักขัตฤกษ์/OTx2 for Holiday Work</div></td>
                            <td width="35%" align="left">
                              <table width="100%">
                               <tr width="100%">
                                <td width="50%"><div className="text-xs" align="left">xxx</div></td>
                                <td><div className="text-xs" align="left">ชม</div></td>
                               </tr>
                              </table>
                            </td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าล่วงเวลา OTx3 วันนักขัตฤกษ์/OTx2 for Holiday Work</div></td>
                            <td width="35%" align="left">
                              <table width="100%">
                               <tr width="100%">
                                <td width="50%"><div className="text-xs" align="left">xxx</div></td>
                                <td><div className="text-xs" align="left">ชม</div></td>
                               </tr>
                              </table>
                            </td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าล่วงเวลา OTx3.2</div></td>
                            <td width="35%" align="left">
                              <table width="100%">
                               <tr width="100%">
                                <td width="50%"><div className="text-xs" align="left">xxx</div></td>
                                <td><div className="text-xs" align="left">ชม</div></td>
                               </tr>
                              </table>
                            </td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าอาหาร/Meal Allowance</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าอาหารวันหยุด/Holiday Meal Allowance</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าอาหารล่วงเวลา/OT Meal Allowance</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                          <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่ากะดึก/Night Shift</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าอาหารกะดึก/Night Shift Meal Allowance</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่ากะเช้า/Day shift </div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าเดินทาง/Transportation</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าเช่าบ้าน/Rental Allowance</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าทักษะ/Skill-based</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าครองชีพ/Cost of Living Allowance</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าลักษณะงาน/Job description</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าตำแหน่ง/Position allownce</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าตรวจพบงานเสีย/Quality award</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                          <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าความเสี่ยง/Risk allowance</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าตัวชี้วัดประสิทธิภาพ/KPI</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าเดินทางออกต่างจังหวัด(150)/Off-site Travel Expenses(150)</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าเดินทางออกต่างจังหวัด(180)/Off-site Travel Expenses (180)</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าจอดรถ/Parking Fee</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">เบี้ยขยัน/Diligence</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">เบี้ยขยันพิเศษ/Special Diligence</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">เงินพิเศษสำหรับพนักงาน/Extra Money for Employees</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าทำงานต่างพื้นที่/Fees for work in different area</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">เบี้ยเลี้ยงออกนอกสถานที่/Outside Allowance</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                          <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">สิทธิประโยชน์พิเศษ/Special Benefit</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าคอมมิชชั่น/Commission</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">อินเซนทีฟ/Incentive</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ค่าชดเชยพิเศษ/Special Allownce</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">รางวัลบริการประจำปี/Service Year Award</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">คืนพักร้อนประจำปี/Pay Annual Vacation</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">โบนัส/Bonus</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ตกเบิก/Adjust</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">อื่นๆ / Other</div></td>
                            <td width="35%" align="left"><div className="text-xs">xxx</div></td>
                            <td width="15%" align="left"><div className="text-xs">xxx</div></td>
                           </tr>
                          </table>
                         </td>
                         <td width="30%" style="border: 1px solid #ccc;vertical-align:top" align="left">
                          <table width="100%" className="mt-0 mb-0 mr-0 ml-0" valign="top">
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ภาษีหัก ณ ที่จ่าย/Tax</div></td>
                            <td width="50%" align="right"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ประกันสังคม/SSF</div></td>
                            <td width="50%" align="right"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">สงเคราะห์กองทุนลูกจ้าง</div></td>
                            <td width="50%" align="right"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">กองทุนสำรองเลี้ยงชีพ</div></td>
                            <td width="50%" align="right"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">กยศ/Student loan(TSLF)</div></td>
                            <td width="50%" align="right"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">หักบังคับคดี/Enforcement</div></td>
                            <td width="50%" align="right"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">เงินเบิกล่วงหน้า/Advance</div></td>
                            <td width="50%" align="right"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ชุดยูนิฟอร์ม/Uniform</div></td>
                            <td width="50%" align="right"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">คูปอง/Cashless</div></td>
                            <td width="50%" align="right"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">รางวัลบริการประจำปี/Service Year Award</div></td>
                            <td width="50%" align="right"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="60%" align="left"><div className="text-xs">หยุดงาน,สาย,กลับก่อน/Absent,Late,Leave early</div></td>
                            <td width="40%" align="right"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">อุปกรณ์โรงงาน/PPE</div></td>
                            <td width="50%" align="right"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">อื่นๆ/Other</div></td>
                            <td width="50%" align="right"><div className="text-xs">xxx</div></td>
                           </tr>
                          </table>
                         </td>
                         <td width="30%" style="border: 1px solid #ccc;vertical-align:top" align="left">
                          <table width="100%" className="mt-0 mb-0 mr-0 ml-0">
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">รายได้สะสม(บาท)</div></td>
                            <td width="50%" align="right"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ประกันสัมคมสะสม(บาท)</div></td>
                            <td width="50%" align="right"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">ภาษีหัก ณ ที่จ่าย สะสม(บาท)</div></td>
                            <td width="50%" align="right"><div className="text-xs">xxx</div></td>
                           </tr>
                           <tr width="100%">
                            <td width="50%" align="left"><div className="text-xs">กองทุนสำรองเลี้ยงชีพสะสม(บาท)</div></td>
                            <td width="50%" align="right"><div className="text-xs">xxx</div></td>
                           </tr>
                          </table>
                         </td>
                        </tr>

                        <!--fourth row-->
                        <tr width="100%">
                         <td width="30%" style="border: 1px solid #ccc;" align="left"><div className="text-xs">รายได้(Income)</div></td>
                         <td width="30%" style="border: 1px solid #ccc;" align="left"><div className="text-xs">รายการหัก(Deduction)</div></td>
                         <td width="30%" style="border: 1px solid #ccc;" align="center"><div className="text-xs">เงินได้สุทธิ(บาท)</div></td>
                        </tr>


                       </table>
                      </tr>

                      
                     
                      

                     </thead>
                    </table>
              

                     <!--
                     <div className="flex h-1/4 w-full flex-row items-center justify-center border-0 border-solid bg-white">
                      <div className="flex h-full w-3/4 flex-row items-center justify-center border-0 border-solid bg-white">
                       <div className="flex h-full w-1/4 flex-col items-center justify-start border-0 border-solid bg-white">
                        <div className="pt-7">
                         <img alt="" src="../assets/nms.png" className="h-full bg-white">
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
                     -->

                   </div>






           <!--right panel-->
           <!--
           <div className="flex h-full w-1/4 flex-row items-center justify-end bg-white">
                     <div className="flex h-full w-[30vh] flex-row items-start justify-start border-0 border-solid border-black bg-green-100 pb-5 pl-5 pt-5">
                      Publication date
                      2014.12.25
                     </div>
                     <div className="flex h-full w-full flex-row items-end justify-end bg-green-100 pb-0 pr-10">
                      <button className="text-1xl rounded-lg bg-blue-300 pb-2 pl-10 pr-10 pt-2 opacity-100">Downlod PDF</button>
                     </div> 
           </div>
           -->
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

  <style>

  td 
  {border: 0px solid #ccc;}

  </style> 

 





