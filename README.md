# XO
[![image](https://sv1.picz.in.th/images/2021/09/04/Ct5TGJ.png)](https://sv1.picz.in.th/images/2021/09/04/Ct5TGJ.png)

[![image](https://sv1.picz.in.th/images/2021/09/05/C1iTft.png)](https://sv1.picz.in.th/images/2021/09/05/C1iTft.png)
## วิธีการ setup
1. Cloning a repository นี้ไป
2. ให้กดเปิด index.html เพื่อใช้งาน

## วิธีการเล่น
1. ผู้เล่น (Player) จะได้เป็น X ส่วน Ai จะได้เป็น O
2. Board จะเป็น 3x3 และ 5x5
3. เทิร์นแรกจะเป็นของ Player โดย Player จะต้องคลิ๊กที่ช่องสี่เหลี่ยมที่ต้องการจะลง
4. หลังจากจะสลับ เทิร์น เป็นของ Ai แล้วหลังจากเสร็จเทิร์นของ Ai ก็จะสลับเทิร์นเป็นอง Player โดยจะสลับแบบนี้เรื่อยๆจนเกมจบ
5. ส่วนวิธีจบเกม ถ้าเป็น 3x3 จะเช็คว่าฝั่งไหนลงได้เรียงกันได้  3 ตัวก่อนก็จะเป็นฝ่ายชนะ หรือถ้าไม่มีฝั่งไหนเรียงกันได้ 3 ตัว ก็จะเสมอ
6. ถ้าเป็น 5x5 จะคล้ายกันกับ 3x3 แต่จะเช็ค 4 ตัวเรียงกัน


## วิธีออกแบบโปรแกรมและ algorithm
1. XO นี้ใช้ javascript+html+css ในการเขียน
2. โดยการวาดตารางจะเป็นการวาดขอบของ column 
3. javascript นี้จะใช้ดีไซด์หลักการคล้ายๆ oop 

### เริ่ม algorithm 
* เริ่มแรก  เรียก class fuinction XO()  และ กำหนด attribute turn = 0 , his__score เป็น Array ส่วน table เช็คให้ทำงานเงื่อนไขการชนะแบบไหน
* [![image](https://sv1.picz.in.th/images/2021/09/05/C1cFae.md.png)](https://sv1.picz.in.th/images/2021/09/05/C1cFae.md.png)
* turn จะเป็นค่าที่ไว้ค่อยเช็คว่าถึงเทิร์นของใคร และ his_score จะไว้เก็บ ประวัติชนะ แพ้ ในการเล่นเทิร์นนั้นๆ
*  start function จะเป็น XO() โดยใช้ MutationObserver ในการเช็ค event โดยเมื่อเกิด event จะเรียก method takeTurn()
*  [![image](https://sv1.picz.in.th/images/2021/09/04/CtjMpu.md.png)](https://sv1.picz.in.th/images/2021/09/04/CtjMpu.md.png)
*  method takeTurn()  การทำงานคือ จะเช็คว่ามีการชนะหรือยัง board.checkWin() ถ้ายังจะให้ ค่า turn % 2 แล้วเท่ากับ 0 เป็นเทิร์นของ player ถ้าไม่จะเป็นของ Ai และทุกเทิร์นของคนนั้นจะเก็บ String เทิร์นของคนนั้ด้วย เพื่อจะไว้บอกตอนเกมจบว่า ฝ่ายใดชนะ และหลังจากจบเทิร์นของใคร ก็จะบวกค่า turn ขึ้นเรื่อยๆ
*  [![image](https://sv1.picz.in.th/images/2021/09/04/CtoRIe.png)](https://sv1.picz.in.th/images/2021/09/04/CtoRIe.png)
*  เมื่อถึง เทิร์นของ player ก็จะเรียก player.takeTurn() โดย method นี้จะทำงานเป็น eventListener ของการ click โดยจะไป put x ลงตามตำแหน่งที่ player เลือก
*  [![image](https://sv1.picz.in.th/images/2021/09/04/CtooRS.md.png)](https://sv1.picz.in.th/images/2021/09/04/CtooRS.md.png)
*  เมื่อถึงเทิร์นของ Ai ก็จะให้ เช็คว่ามีตำแหน่งว่างให้ลงได้ไหม โดยการลงของ Ai นั้นจะเป็นแค่การ random ตำแหน่งแค่เท่านั้น ส่วน catch(error) จะเป็นการดักจับว่า ถ้า Ai ลงไม่ได้แล้วนั้นจะถือว่าเกมนั้น เสมอ
*  [![image](https://sv1.picz.in.th/images/2021/09/04/CtomO0.md.png)](https://sv1.picz.in.th/images/2021/09/04/CtomO0.md.png)
*  ส่วน method ที่ไว้เช็คการชนะ คือ checkWin() จาก class function Board() โดย checkWin จะทำงานคือ กำหนด winner = false >> winner ตัวนี้จะเป็นตัวบอกการหยุดของเกมถ้าเป็น true เกมจะหยุดเพราะได้ผู้ชนะแล้ว และ if table == 3 นี้คือถ้าหน้าต่างที่เรากำลังเล่นอยู่เป็น 3x3 จะเข้าทำงานส่วนนี้ ถ้าไม่ใช่ก็จะไป else ที่เป็นการทำงานของ 5x5
*  [![image](https://sv1.picz.in.th/images/2021/09/05/C1gOsu.md.png)](https://sv1.picz.in.th/images/2021/09/05/C1gOsu.md.png)
*  ส่วน datawin นี้จะเป็น pattern ชนะของเกม 3x3 โดยจะเป็นการเรียงข้อมูล แนวคอลัม แนวแถว และ แนวทแยง มีให้อยู่ในรูปของ Array ตามตำแหน่ง
*  [![image](https://sv1.picz.in.th/images/2021/09/05/C1gu0v.md.png)](https://sv1.picz.in.th/images/2021/09/05/C1gu0v.md.png)
*  ส่วนการเช็คนั้น จะวนลูป ตามจำนวน pattern ของ  dataWin โดยถ้า ตำแหน่งแรก === ตำแหน่งสอง และ ตำแหน่งสอง === ตำแหน่งสุดท้าย ก็จะให้ winner = true และวาด hoverตำแหน่งนั้นๆเป็นสีส้ม ส่วนถ้ายังไม่มีผู้ชนะนั้นก็แค่ ไม่ทำงานในเงื่อนไขนี้ สุดท้ายหลังจาก วนลูปครบก็จะ return winner ออกไป
*  [![image](https://sv1.picz.in.th/images/2021/09/04/CtPGAg.md.png)](https://sv1.picz.in.th/images/2021/09/04/CtPGAg.md.png)
*   ส่วน datawin นี้จะเป็น pattern ชนะของเกม 5x5 โดยจะคล้ายกันกับ 3x3 แต่จะ ข้อมูลที่เยอะกว่า
*  [![image](https://sv1.picz.in.th/images/2021/09/05/C1gm2D.md.png)](https://sv1.picz.in.th/images/2021/09/05/C1gm2D.md.png)
*  ส่วนการเช็คนั้น จะวนลูป ตามจำนวน pattern ของ  dataWin โดย 3x3 จะเป็นการตรวจสอบ 3 ตำแหน่ง แต่ 5x5 จะเป็น 4 ตำแหน่ง ถ้า 4 ตำแหน่งนั้นเท่ากันก็จะให้ winner = true และวาด hoverตำแหน่งนั้นๆเป็นสีส้ม ส่วนถ้ายังไม่มีผู้ชนะนั้นก็แค่ ไม่ทำงานในเงื่อนไขนี้ สุดท้ายหลังจาก วนลูปครบก็จะ return winner ออกไป
*  [![image](https://sv1.picz.in.th/images/2021/09/05/C1iklI.md.png)](https://sv1.picz.in.th/images/2021/09/05/C1iklI.md.png)
*  เมื่อ chekWin  เป็น true แล้ว โปรแกรมก็จะบันทึกเพิ่มคะแนนให้ผู้ชนะ และประวัติการชนะ เก็บไว้ โดยวิธีการเช็คว่าใครชนะจะดูได้จากการเก็บ String เทิร์นของคนนั้นๆเป็นแบบ Array ไว้โดยเอาค่าสุดท้ายของ Array ก็จะสามารถบอกได้ทันทีว่าเทิร์นล่าสุดเป็นของใคร 
*  [![image](https://sv1.picz.in.th/images/2021/09/04/CtPMx9.md.png)](https://sv1.picz.in.th/images/2021/09/04/CtPMx9.md.png)
*  ปุ่ม Replay การทำงานก็จะไป เซตให้ cells ทุกตัวเป็นค่าว่าง และ remove เอา classList ออกให้เป็นค่าเริ่มต้น
*  [![image](https://sv1.picz.in.th/images/2021/09/04/CtsYeq.md.png)](https://sv1.picz.in.th/images/2021/09/04/CtsYeq.md.png)
*  ปุ่ม History จะทำงานเป็นการแสดงประวัติการชนะของผู้เล่นนั้น ออกมาในรูปแบบ popup 
*  [![image](https://sv1.picz.in.th/images/2021/09/04/Cts5ZS.md.png)](https://sv1.picz.in.th/images/2021/09/04/Cts5ZS.md.png)

### จบ
