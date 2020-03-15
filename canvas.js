var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d')

function Dot(x,y){
    this.x = x;
    this.y = y;
    c.beginPath()
    c.arc(this.x,this.y,3,Math.PI*2,false)
    c.fill();
}
function Arrow(x,y){
    this.x = x;
    this.y = y;
    
    c.beginPath()
    c.moveTo(this.x,this.y)
    c.lineTo(this.x, this.y-10)
    c.lineTo(this.x+7, this.y-5)
    c.lineTo(this.x, this.y)
    c.fill()
}
function f(){
    //instruction 31-26
    c.font = "20px Arial"
    c.fillText("Instruction [31-26]",238,268,120)
    c.beginPath()
    c.moveTo(355,278);  
    c.lineTo(234,278);
    c.lineTo(234,396);
    c.stroke();
    var a=new Arrow(355,283);
}
f();
function h(){
    //instruction 25-21
    c.font = "20px Arial"
    c.fillText("Instruction [25-21]",238,387,120)
    c.beginPath()
    c.moveTo(234,396);  
    c.lineTo(395,396);
    c.stroke();
    var dot = new Dot(234,397)
    var a=new Arrow(393,401);
}
h();
function i(){
//instruction 20-16
c.font = "20px Arial"
c.fillText("Instruction [20-16]",238,427,120)
c.beginPath()
    c.moveTo(233,433);  
    c.lineTo(394,433);
    c.stroke();
    var dot = new Dot(233,433)
    var a=new Arrow(394,437);
}
i();
function j(){
//instruction 15-11
c.font = "20px Arial"
c.fillText("Instruction [15-11]",238,505,120)
    c.beginPath()
    c.moveTo(234,515);  
    c.lineTo(355,515);
    c.stroke();
    var dot = new Dot(234,515)
    var a=new Arrow(355,520);
}
j();
function k(){
    //instruction 15-0
    c.font = "20px Arial"
    c.fillText("Instruction [15-0]",238,612,120)
    
    c.fillText("16",427,606,120)
    c.beginPath()
    c.moveTo(424,616);
    c.lineTo(435,628);
    c.moveTo(233,622);  
    c.lineTo(445,622);
    c.stroke();
    var dot = new Dot(233,622)
    var a=new Arrow(445,627);
}
k();
function l(){
    //line combine instrctions in ID
    c.beginPath();
    c.moveTo(234,396);
    c.lineTo(234,622);
    c.stroke();
}
l();
function m(){
    //from instruction 20-16 to mux in IF
    c.beginPath();
    c.moveTo(330,435);
    c.lineTo(330,466);
    c.lineTo(356,465);
    c.stroke();
    var dot = new Dot(330,434)
    var a=new Arrow(356,470);
    
}
m();
function o(){
    //mux in IF
    c.beginPath();
    c.arc(380,464,14,Math.PI,false)
    c.lineTo(394,520)
    c.moveTo(366,464)
    c.lineTo(366,518)
    c.arc(380,517,14,Math.PI,Math.PI*2,true)
    c.font = "18px Arial";
    c.fillText("0",372,484-14,10)
    c.fillText("M",374,501-14,10)
    c.fillText("u",374,514-14,10)
    c.fillText("x",374,529-14,10)
    c.fillText("1",372,543-14,10)
    
    c.stroke();
    var a=new Arrow(396,489);
}
o();
function controll(){
    c.font = "18px Arial"
    c.fillText("Controll",365,285,60)
    c.moveTo(427,277)
    c.ellipse(396,285,33,78,0,Math.PI*2,false);
    c.stroke();
}
controll();
function signExtend(){
    c.beginPath();
    c.moveTo(513,622)
    c.ellipse(484,622,29,48,0,Math.PI*2,false)
    c.font = "15px Arial"
    c.fillText("Sign-",467,617)
    c.fillText("extend",463,637)
    c.stroke();
    
}
signExtend();
function p(){
    //line from sign extend to shift
    c.beginPath();
    c.lineTo(567,621)
    c.lineTo(567,195)
    c.lineTo(571,195)
    c.moveTo(531,614);
    c.lineTo(543,628)
    c.moveTo(568,622)
    c.lineTo(515,622)
    c.font = "20px Arial"
    c.fillText("32",532,608,120)
    c.fillText("RegWrite",442,351,60)
    c.stroke()
    var d=new Arrow(572,200)
}
p();
function linep(){
    c.moveTo(566,535);
    c.lineTo(580,535);
    c.stroke();
    var arrow=new Arrow(580,540);
    var dot=new Dot(566,535);
}
linep();
function readData1(){
//line from register in ID to ALU IN ex
    c.beginPath();
    c.moveTo(541,421);
    c.lineTo(627,421);
    c.stroke();
    var arrow=new Arrow(627,425);
}
readData1();
function rectangleID(){
    c.beginPath();
    c.rect(404,373,138,187)
    c.font="15px Arial";
    c.fillText("Read",417,393,36);
    c.fillText("register 1",417,408,63);
    c.fillText("Read",417,439,36);
    c.fillText("register 2",417,454,65);
    c.fillText("Write",417,486,35);
    c.fillText("register",417,502,49);
    c.fillText("Read",496,480,35);
    c.fillText("data2",489,498,42);
    c.fillText("Write",416,533,36);
    c.fillText("data",416,550,29);
    c.fillText("Registers",462,552,71);
    c.fillText("Read",496,415,36)
    c.fillText("data1",496,432,40)
    
    c.stroke();
}
rectangleID();
function liney(){
    //line from mux to control in IF
    c.font="18px Arial";
    c.fillText("RegDst",442,210,120)
    c.beginPath();
    c.moveTo(382,530);
    c.lineTo(382,546);
    c.lineTo(225,546)
    c.lineTo(225,168)
    c.lineTo(430,168)
    c.lineTo(430,216)
    c.lineTo(414,216)
    
    c.stroke()
}
liney();
function read2(){
    //line from register to mux(from ID TO EX)
    c.beginPath();
    c.moveTo(541,485)
    c.lineTo(580,485)
    
    c.stroke()
    var arrow = new Arrow(580,490)
    
}
read2();
function lineb(){
    c.moveTo(413,355);
    c.lineTo(473,355);
    c.lineTo(473,371)

    c.stroke();
}
lineb();
function linec(){
    //instruction 5-0
    c.beginPath()
    c.font = "20px Arial"
    c.fillText("Instruction [5-0]",417,698,120)
    c.moveTo(408,622)
    c.lineTo(408,705)
    c.lineTo(580,706)
    c.lineTo(580,631)
    c.lineTo(589,631)
    c.stroke();
    var arrow = new Arrow(589,635)
    var x=new Dot(408,622);
    c.font = "20px Arial"
    c.fillText("Instruction [5-0]",417,698,120)
    

}
linec();
function linet(){
    //line ALUOp from control to ALUcontrol
    c.font = "18px Arial"
    c.fillText("ALUOp",442,292,60);
    c.beginPath();
    c.moveTo(633,678)
    c.lineTo(633,719)
    c.lineTo(558,719)
    c.lineTo(557,296)
    c.lineTo(432,296)
    c.stroke()
}
linet();


function rectangleMEM(){
    c.beginPath();
    //rect
    c.strokeRect(758,433,112,167);
    c.font="20px Arial";
    c.fillText("Address ",767,484,57);
    c.fillText("Read ",828,466,35)
    c.fillText("data ",834,490,29)
    c.fillText("Write ",767,553,35)
    c.fillText("data ",767,575,28)
    c.fillText("Data ",821,546,32)
    c.fillText("memory ",807,565,60)
    c.stroke()
}
rectangleMEM();


function arrowMEMRectangle(){
   //arrow and line from reisterfile in mem to multiplexer
    c.beginPath();
    c.moveTo(871,480);
    c.lineTo(889,480);
    //the above is the line before the arrow
    
    c.stroke()
    var arrow = new Arrow(890,485)
}
arrowMEMRectangle();

function multiplexerMEM(){
    //multiplexer
    c.beginPath()
    c.moveTo(902,477);
    c.lineTo(902,534);
    c.moveTo(928,477)
    c.lineTo(928,534)
    c.arc(915,480,13,0,Math.PI,true);
    c.arc(915,534,13,Math.PI,Math.PI*2,true);
    c.font="15px Arial";
    c.fillText("1",908,482,15);
    c.fillText("0 ",907,545,15);
    c.fillText("M ",910,498,15);
    c.fillText("U ",910,515,15);
    c.fillText("X ",910,530,15);
    c.stroke();
}
multiplexerMEM();

function lineToRegisterfilefromMEM(){

    //line to registerfile FROM MEM MULTIPLEXER
    c.beginPath();
    c.moveTo(928,506)
    c.lineTo(939,506)
    c.lineTo(939,727)
    c.lineTo(392,727)
    c.lineTo(392,537)
    c.lineTo(395,537)
    c.moveTo(396,534);
    c.lineTo(404,535);
    
    c.stroke();
    var arrow = new Arrow(395,540)
}
lineToRegisterfilefromMEM();




function ALU_Control(){

    c.beginPath()
    c.ellipse(632,629,29,48,0,Math.PI*2,false)
    c.moveTo(679,514);
    c.lineTo(679,631);
    c.lineTo(661,631);
    c.font="20px Arial";
    c.fillText("ALU",617,625,30);
    c.fillText("control",606,643,52)
    c.stroke();
}
ALU_Control();

function MUX1(){
    //aside alu control
    c.beginPath();
    c.arc(602,482,13,0,Math.PI,true);
    c.stroke();
    c.beginPath();
    c.arc(602,537,13,0,Math.PI,false);
    c.stroke();
    c.beginPath();
    c.moveTo(615,537);
    c.lineTo(615,482);
    c.stroke();
    c.beginPath();
    c.moveTo(589,537);
    c.lineTo(589,482);
    c.stroke();
    c.font="15px Arial";
    c.fillText("0", 595, 485, 120);
    c.fill();
    c.fillText("M", 595, 498, 120);
    c.fill();
    c.fillText("U", 595, 515, 120);
    c.fill();
    c.fillText("X", 595, 530, 120);
    c.fill();
    c.fillText("1", 595, 545, 120);
}
MUX1();
function arrowMuxToAluInEX(){

    c.beginPath();
    c.moveTo(615,507);
    c.lineTo(628,507);
    c.stroke();
    var arrow = new Arrow(628,512);
}
arrowMuxToAluInEX()
function ALUInEX(){
    c.beginPath();
    c.moveTo(637,403);
    c.lineTo(637,450);
    c.lineTo(649,465);
    c.lineTo(637,483);
    c.lineTo(637,532);
    c.lineTo(727,495);
    c.lineTo(727,434);
    c.lineTo(637,403);
    c.stroke();
    c.beginPath();
    c.font="20px Arial";
    c.fillText("ALU",655,467,140);
    c.fill();
    c.beginPath();
    c.font="15px Arial";
    c.fillText("ALU",691,480,140);
    c.fillText("result", 683,493,140);
    c.font="17px Arial";
    c.fillText("Zero", 689,449,150);
    c.fill();
}
ALUInEX();
function x(){
    c.beginPath();
    c.moveTo(727,481);
    c.lineTo(750,480);
    c.stroke();
    
    var arrow = new Arrow(746,485);

}
x();
function y(){
    //from the registerfile in MEM TO CONTROL
    c.beginPath();
    c.moveTo(812,434);
    c.lineTo(811,313);
    c.lineTo(429,313);
    c.stroke();
}
y();
function z(){
    //MEM write to CONTROL
    c.beginPath();
    c.font="18px Arial";
    c.fillText("MemWrite",442,309,120);
    c.fill();
}
z();

function a(){
    //MEMTOREG to CONTROL
    c.beginPath();
    c.moveTo(915,465);
    c.lineTo(915,276);
    c.lineTo(431,275);
    c.stroke();
    c.beginPath();
    c.fillText("MemtoReg",442,270,120);
    c.fill();
}
a();
function b(){
    //ALUSrc from CONTROL to MUX
    c.beginPath();
    c.moveTo(602,469);
    c.lineTo(602,335);
    c.lineTo(422,335);
    c.stroke();
    c.beginPath();
    c.fillText("ALUSrc",442,330,120);
    c.fill();
}
b();
function d(){
    //from ALU IN EX to AND
    c.beginPath();
    c.moveTo(726,446);
    c.lineTo(741,446);
    c.lineTo(741,232);
    c.lineTo(753,232);
    c.stroke();
}
d();
function and(){
    c.beginPath();
    c.moveTo(726,446);
    c.lineTo(741,446);
    c.lineTo(741,232);
    c.lineTo(753,232);
    c.stroke();
    c.beginPath();
    c.arc(774,220,24,0.5*Math.PI, 1.5*Math.PI,true);
    c.moveTo(774,196);
    c.lineTo(753,196);
    c.lineTo(753,244);
    c.lineTo(774,244);

    c.stroke();
}
and();
function lineToAnd(){
    //line from control to and
    c.moveTo(752,210);
    c.lineTo(712,210);
    c.lineTo(712,235);
    c.lineTo(427,235);
    c.stroke();
    c.beginPath();
    c.fillText("Branch",442,229,120 );
    c.fill();
}
lineToAnd();

function n(){
    //from ALU IN EX TO MUX IN MEM
    c.beginPath();
    c.moveTo(738,481);
    c.lineTo(738,614);
    c.lineTo(883,614);
    c.lineTo(883,532);
    c.lineTo(894,532);
    c.stroke();
    var arrow = new Arrow(894,538);
}
n();
function q(){
    //from REGISTERFILE IN EX to REG MEM(WRITE DATA)
    c.beginPath();
    c.moveTo(550,485);
    c.lineTo(550,567);
    c.lineTo(750,567);
    c.stroke();
    var arrow = new Arrow(750,572);
    var nab = new Dot(550,485);
}
q();
function s(){
    //MEMREAD FROM CONTROL 
    c.beginPath();
    c.moveTo(813,601);
    c.lineTo(813,630);
    c.lineTo(956,630);
    c.lineTo(955,256);
    c.lineTo(431,256);
    c.stroke();
    c.beginPath();
    c.fillText("MemRead",442,252,120);
    c.fill();
}
s();

//Line1
function line1a(){
    c.beginPath();
    c.moveTo(52,407);
    c.lineTo(46,407);
    c.lineTo(46,20);
    c.lineTo(833,20);
    c.lineTo(833,113);
    c.lineTo(812,113);
    c.strokeStyle = 'black';
    c.stroke();
    var dd=new Arrow(52,412);
}
line1a();


//PC
function PC(){
    c.beginPath();
    c.rect(60,355,31,101);
    c.font = "15px Arial";
    c.fillText("PC",66,410);
    c.stroke();
}
PC();

//Dot1
// Dot(100,406);
//Line2(instruction fetch line)
function instructionfetchline(){
    c.beginPath();
    c.moveTo(92,406);
    c.lineTo(100,406);
    c.moveTo(100,406);
    c.lineTo(107,406);
    c.stroke();
    var a=new Arrow(107,411);
}
instructionfetchline();
function PC4line(){
    c.beginPath();
    c.moveTo(100,406);
    c.lineTo(100,73);
    c.lineTo(155,73);
    c.stroke();
    var b=new Arrow(155,78);
    var ee=new Dot(100,406)
}
PC4line();
// //ALU1
function PC4ALU(){
    c.beginPath();
    c.moveTo(164,49);
    c.lineTo(164,96);
    c.lineTo(180,113);
    c.lineTo(167,130);
    c.lineTo(167,178);
    c.lineTo(221,145);
    c.lineTo(221,82);
    c.lineTo(164,49);
    c.font = "15px Arial";
    c.fillText("Add", 185, 120);
    c.stroke();
    
    
    
}
PC4ALU();
function addArrow(){
    c.beginPath();
    c.moveTo(140,154);
    c.lineTo(158,154);
    c.stroke();
    c.font = "15px Arial";
    c.fillText("4",128,158.5);
    var v=new Arrow(158,159.5);
}
addArrow();
//ALU PC4 result
function PC4result(){
    c.beginPath();
    c.moveTo(221,113);
    c.lineTo(545,113);
    c.lineTo(545,102);
    c.stroke();
    
    c.beginPath();
    c.moveTo(545,102);
    c.lineTo(545,77);
    c.lineTo(776,77);
    c.stroke();
    var ss=new Arrow(776,81.5);
    var xx=new Dot(545,102);
    
}
PC4result();

// MUX1
function BranchMUX(){
    c.beginPath();
    c.arc(798,77,13,Math.PI,0,false);
    c.stroke();
    c.beginPath();
    c.arc(798,151,13,Math.PI,0,true);
    c.stroke();
    c.beginPath();
    c.moveTo(785,77);
    c.lineTo(785,151);
    c.stroke();
    c.beginPath();
    c.moveTo(811,75);
    c.lineTo(811,151);
    c.stroke();
    c.fillText("0", 794,81);
    c.fillText("1",794,154);
    c.fillText("M",792,100);
    c.fillText("U",792,115);
    c.fillText("X",792,130);
}
BranchMUX();
function addALU(){
    c.beginPath();
    
    
    
    c.beginPath();
    c.moveTo(651,90);
    c.lineTo(650,136);
    c.lineTo(664,153);
    c.lineTo(650,170);
    c.lineTo(650,218);
    c.lineTo(742,182);
    c.lineTo(742,123);
    c.lineTo(651,90);
    c.stroke();
    c.font = "15px Arial";
    c.fillText("Add", 667,157);
    c.font = "15px Arial";
    c.fillText("ALU",703,145);
    c.font = "15px Arial";
    c.fillText("result", 702,160);
    
    c.stroke();
    
    
}
addALU();
function fromALU(){
    c.beginPath();
    c.moveTo(742,152);
    c.lineTo(777,152);
    c.stroke();
    var f=new Arrow(777,157);
}
fromALU();
function lineToALU(){
    c.beginPath();
    c.moveTo(545,102);
    c.lineTo(643,102);
    c.stroke();
    var a=new Arrow(643,107);
}
lineToALU()
function shift(){
    c.beginPath();
    c.moveTo(632,194);
    c.lineTo(642,194);
    c.stroke();
    
    c.beginPath();
    c.ellipse(606,194,25,33,Math.PI*2,0,Math.PI*2,false);
    c.stroke();
    c.font = "15px Arial";
    c.fillText("Shift", 590,185);
    c.font = "15px Arial";
    c.fillText("left 2", 590,210);

    var t=new Arrow(642,199);
}
shift();

function rectIF(){
        c.beginPath();
        c.rect(120,385,96,141);
        c.moveTo(216,463);
        c.lineTo(234,463)
        c.stroke();
        c.fillText("Read",128,402,36);
        c.fillText("address",128,418,55);
        c.fillText("Instruction",135,457,72);
        c.fillText("[31-0]",165,479,42);
        c.fillText("Instruction",127,500,81);
        c.fillText("memory",138,517,59);
        var bb=new Dot(234,463)
}
rectIF();
