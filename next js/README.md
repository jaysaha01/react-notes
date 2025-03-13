<h1>Typescript</h1>

<h3>Follow Typescript + React Cheetsheep</h3>
https://react-typescript-cheatsheet.netlify.app/docs/basic/setup

---

<h1>Write component in Typescript</h1>

if you want to write js coponnent the create Button.tsx

## Button.tsx

import React from "react"

const MyButton: React.FC=()=>{

//This is a type of fuctioinal componenet it is not return anything then it will give error
retrun <button></button>;
}
export default MyButton

=======================================================================================

<MyButton text="click me">

<h1>Props component in Typescript</h1>

if you want to write js coponnent the create Button.tsx

## Button.tsx

import React from "react"

const MyButton=(props: {text: string})=>{
retrun <button>{props.text}</button>;
}
export default MyButton

(or)

## Button.tsx

import React from "react"

interface MyButtonProps{
text:string;
}

const MyButton: React.FC<MyButtonProps>=(props)=>{

//React.FC me jo bhai hum type deta he like this<MyButtonProps> vo props k type me inject ho jatahe.

retrun <button>{props.text}</button>;
}
export default MyButton

<MyButton onClick={()=>alert("okay")} text="click me again">

## Button.tsx

<MyButton onClick={()=>alert("okay")} text="click me again">

import React from "react"

interface MyButtonProps{
text: string | number | Boolear;
text:string;
onClick?:()=> void (if you put "?" then you can or cannot pass the functin)
}

const MyButton: React.FC<MyButtonProps>=(props)=>{
retrun <button onClick={props.onClick}>{props.text}</button>;
}
export default MyButton

=======================================================================================

<h1>Hooks in  Typescript</h1>

## Button.tsx

import React from "react"

const [value, setValue]= useState<string>("a");//💹1

const MyButton: React.FC<MyButtonProps>=(props)=>{
retrun <button onClick={()=> setValue("b")}>{value}</button>; //💹2
}
export default MyButton

---

set object to the usestate

import React from "react"

interface Book {
name: string;
price:number
}

const [value, setValue]= useState<Book>({
name:"one",
price:10
});

const MyButton: React.FC<MyButtonProps>=(props)=>{
retrun (
<>
<h3>Name {value.name}</h3>
</>
);
}
export default MyButton

=======================================================================================

Handelling Form ----------------

import React from 'react'

const Myform = () => {

const [value, setValue]= useState <string | undefined> ()

const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
}

const handleSubmit=(e: React.FormEvent<HTMLInputElement>)=>{
    //hove on the onSubmit={e=> {}} coppy the event name form there
    e.preventDefault();
    console.log(e)
}

return (
<div>
<form onSubmit={handleSubmit}>
<input onChange={handleChange} type="text" placeholder="Enater your name">
<h1>{value}</h1>
</form>
</div>
)

}

export default Myform

=======================================================================================

Context in Typescript ---------------

Provider > Counter.tsx

import React, {createContext} from 'react'

interface CounterProviderProps{
    children: React.ReactNode;
}

interface CounterContextValue{
    value:number;
    setCount: (number)=> void
}

const CounterContext= createContext<CounterContextValue | null>(null);

export const counterProvider: React.FC=(props)=>{

    const [count, setCount]= useState<number>(1);

    return(

        <createContext.Provider value={{
            value:count,
            setCount,
        }}>
        {props.children}
        </createContext.Provider>

    )
    
}















































<h4>Extentions for TS</h4>
<ul>
<li>Javascript and Typescript Nightly</li>
<li>Pretty TypeSCript Errors</li>
</ul>

//koiv javascript ka code Typecript me valid he . jo TS k hisab se galat he uss me TS Error dega par vo galat ko v JS me convert kark dedega.

<code>
> npm i typescript -g 
</code>

<h2>Enable TS config file</h2>

<code>
> tsc --init
</code>
or
<code>
> npx tsc --init
</code>
or
<code>
> tsc app.ts --watch
> node app.js
</code>

<h2>Small work Flow</h2>
app.ts<br/>

<code>
Write your TS Code
</code>

<span>For Compiling</span>
<code>
tsc
</code>
or
<code>
tsc --watch
</code>

<hr>

<h1>Basics of TS</h1>

<h3>Datatypes of TS</h3>
<ul>
<li>Number = 123455</li>
<li>Charecter = R</li>
<li>String = Ranajay Saha</li>
<li>Boolean = True or False</li>
<li>Arrays</li>
<li>Tuples= <code>arr: [string, number] = ["harsh", 22]</code> (Tuples means fixed size and array me konsi than me kaya aiga vo batadena he )</li>
<li>Enums (Enumerations is like Object) =

enum UserRoles{
ADMIN= "Admin",
GUEST= "Guest",
SUPER_ADMIN= "Super_admin"
}

UserRoles.ADMIN

</li>
<li>let a; (jab app varible me type ya koi valu na do to use any kahetahe)</li>

<li>let a: number; (We define the type of the variable. But byefatult the value will be any if you not give any value to the variable. Hame ensure karnahe varible ki type any na ho)</li>

<li>Unknown= (app variable me jo bhai value dalna he dallo par jab app kam karoga tab type check kark karna parega)

let a: unknown
a= 12;
a= "harsh";

if(typepf a === "string"){
a.toUpperCase()
}

</li>

<li>
Void = (Asa function jahape aap return nahi karte ho waha void use hotahe. void matlab kuch bahi return nahi karrahahe.)
<code>
function abcd(): void{
    console.log("Hey")
}
</code>
agar retrun kartato

<code>
function abcd(): number{
    return 12
}
</code>

</li>

<li>Null= (Agar app kucu duntaho nahi milta he tab hota he Null)
<code>
let a = null
let a: null = null 
</code>

</li>

<li>Undefined= (agar js me app kuch value nahi doga  to vo undefined hoga)

let a: Undefined

</li>

<li>Never= (jo kuch bhai return nahi karte waha Never use karte he)

function abcd(): never{
while(true)
}

abcd()

</li>

</ul>

<h3>Premetive & Referance</h3>
[] {} () agar ya inme teen bracket laggai to uska type hota he Referance . Referance me koi bahi changes karoge to vo parent me honge. agar usme (){}() nahi hoga to use hum kahatehe premitive.<br><br> 
 
<code>
var a = 12; <br>
var b = a ; (You cancoppy a to b)
</code>
<br><br>
<code>
var a = [1,12,45,6]; <br>
var b = a ; (b ki value a he a ka vlue coppy nahi huya he. yaha b me kuchu change huya to a me bhai change hoga)
</code><br/><br/>

Ts me agar variable me kuch type pahale define kardiya to vo baad me app uska type change nahi kar sakte ho.
<code>
let a= 12;
a="string" (aap abb ya nahi kar sagkte ho kuk app datatype change kar deraheho)
</code>

<h1>Type Inference & Type Annotations</h1>

> <b>Type Inference</b>= Jab variable ko app na bataye ki type kaya he and TS Value ko dekh k bolde isska type too use hum type inferance kahehe
> ex: <code>
> let a= 12
> </code>

> <b>Type Anotation</b>=
> ex: <code>
> let a: number;
> </code>

<br/>
<h1>Introduction to Interfaces & Type Aliases</h1>

<h2>Interfaces</h2>
<pre>
function abcd(a:number, b:string){
    a.toUpperCase() //a. jab likhoge to tab sirf a ka hi methords dekhenge and same as b
}

---

interface User{
name:string,
email:string,
password:string
}

function getDataOfUser(obj:User){
obj me kaya hoga name, email, ya passwornd yahi bolna atahe interface. interface obj ksa hoga ya uska shakal kasa hoga ya boltahe. and use functin me bhai pass karna hotahe.

    obj.name

}
getDataOfUser({name:"Harsh", email:"email@gmail.com", password:"Passwordfdsf"}) ✅
getDataOfUser({name:"Harsh", email:"email@gmail.com", password:"Passwordfdsf", age:12})❌

---

interface User{
name:string,
email:string,
password:string
}

const obj={
name:"Ranajay",
email:"sahajay@gmail.com",
password:"Passswjornjd@13"
}

---

interface User{
name:string,
email:string,
password:string
gender?:string (Dediya to v thik nahi diya too bahi thik)
}

</pre>

<h2>Extending Interfaces</h2>

```
interface User{
name:string,
email:string,
password:string
}

interface Admin extends User(obj: Admin){
    //Admin pass vo sab he jo User k pass he par admin k pass extra kuch he jo user k pass nahi he
    obj.admin
}

function abcd(obj: Admin){
    obj.admin
}


```

```
interface Abcd{
name:string,
}

interface Abcd{
email:string,
}

function abcd(obj: Abcd){

    // jab do interfaces same hotahe tab vo dono marge hojatahe
    obj.name
    obj.email
}


```

<h2>Type Aliases</h2>

app apli custom type set kar sakte ho

```
type chachanum = string | number | null

let a: chachanum;

```

type abcd= number;
type abcd = number;
(ye app TS me nahi karsakte. This will give you error)

Type ka kam he type banana and interface ka kam he object ko shapre dena

<h1>Introduction to Class & Objects</h1>

```
class Device {
    name:"lg",
    price: 1200,
    catagory:"digital
}

let d1= new Device()
let d2= new Device()

```

<h1>Class & Objects - Inharitance</h1>

```
class HumanMaker{

    age=0; //orr jo by defautl he vo to yaha hoga
    constructor(public name:string, public ishandsone:boolean){
        //jo user se magna he vo constructor me hoga, publick na liko to bhai public hoga.constructor make new new objects.constructor hamesha pahale chaltahe
    }
}

let b1= new HumanMaker("Harsh", true)
b1.name="Marsh" (Change the name)

```

<h1>Class & Objects - this.keyword</h1>

```
class Abcd{
    name="Harch";

    changeName(){
        //class k andar agar app koi v variable ko access kar rahaho to this dena hota he. class k andar agar koi v variable ko hume access karna he jo iss methord k part nahi he hum tab this ko use karte he.

        this.name
        this.changeSomeMoreStaff
    }

    changeSomeMoreStaff(){
        console.log("hey")

        let a = 12
        a
    }
}

```

```
class BottleMaker{
    constructor(public name:string){}
}

let b1= new BottleMaker("Milton");
```

<h1>Class & Objects - Public & Private Access Modifier</h1>

//public => ya property ko puri class me kaibhai change karo
//protected => agar app main class ko inharite kark new class banaya too private name ka variable sirm main wale class tak accessable he issk bahar accessable nahi he.

```
class BottleMaker{
    constructor(private name:string){}
}

class MatalBottleMaker extends BottleMaker{
    constrtor(name:string){
        super(name);
    }

    getValue(){
        console.log(this.name)
    }

}


let b1= new MatalBottleMaker("Milton");
//now you cannot access this.name because it is private. you cannot change the name
```

<h1>Class & Objects - Protected</h1>

//Protected main class me orr uss main class se banahuya dusra class me bhai use/chage ho sakta he. You can change the name into the main or the crated class but you cannot change the varible of the class outside the class

```
class BottleMaker{
   protedted name= "Milton"
}

classes MetalBottleMaker extends BottleMaker{
    public material = "meterial"

    changeName(){
        this.name="some other name"
    }
}

let b1= new MetalBottleMaker();
b1.name="some more names" ❌ You cannot change it from hare

```

<h1>Class & Objects - Read Only</h1>

```
class User{
    constructor(public readonly name:string){}

    changeName(){
        this.name="Hellow"
    }
}

let ul= new User("Harsh");
user.changeName()//❌ You cannot change name because of Read only. it will chnage but TS will just Alert you that's it.

```

<h1>Class & Objects - Getters & Setters</h1>

```




```

<h1>Class & Objects - Static Member</h1>

static bananesa new se instance (donot use new) nahi banake uss class ka methord use karsakte ho

```
class Shery{
    static version=1.0

    static getRendomNumber(){
        return Math.random()
    }
}

> Sherry.getRendomNumber()


```

<h1>Class & Objects - Abstract Classes</h1>

/_
tree is the abstract concept but mango ka pare is the implimentation of it.
_/

```
class CookingEssentials{

    //✅ This is a essential class or base class

    constructor(protected gas:number, public name: string){}
}

class Sabji extends CookingEssentials(){

}

```

<h1> Functions </h1>

```
                (kaya return karega)
function abcd(): string{
    return "Hey"
}

---------------------------------------------------------------

                (kuch bhai nahi return karega)
function abcd(): void{
    return "Hey"
}


-----------------------------------------------------------------------

function abcd(name:string, age:number, cb:(arg:string)=> void){
    cb("Hey")
}

abcd("harsh", 25, (arg: string)=>{
    console.log(arg)
})

----------------------------------------------------------------------------

// Optional parameter

function abcd(name:string, age:number, gender?:string){

}
abcd("harsh", 25, "male")
abcd("ladbatak", 22)


-------------------------------------------------------------------------------


// Default parameter


function abcd(name:string, age:number, gender:string="not to be disclosed"){

}
abcd("harsh", 25, "male")
abcd("ladbatak", 22)


```

<h1>Functions - Rest Parameter</h1>

```
function sum(...arr: number[]){
    console.log(arr[0])
}
sum(1,2,3,4,5,6,7,8,9,10)

```

<h1>Functions - Overloading</h1>

/_ Functions k nam same ho saktahe ya hi ye function overloading_/

```
function abcd(a: string):void;
function abcd(a: string, b:number):number

function abcd(a:any, b?:any){
    if(typeof a === 'string' && b === undefined){
        console.log("Hey")
    }

    if(typeof a === 'string' && b=== "number"){
        return 123
    }

    else throw new Error("Something is wring")
}

abcd("hey")
abcd("hey", 12)

```

<h1>Genetics</h1>

<h2>Genetic Functions</h2>

// Humein ek function bana hei jo ki accept kareagakoi bhai value and usey print karega

```

function logger(a: any){
    //any karna se a. se hum koi v methord call nahi kar payanga kuk type check nahi ho rahahe. any se bach k rahana he.
}
logger("hey")


-----------------------------------------------------------------------

//hum ek function ko use karte waqt bata saktee hai ki funtion arguemnet ko kiss type se treat kare

function abcd<T>(a: T){}
abcd<string>("Harsh")
abcd<number>(12)


-------------------------------------------------------------

function abcd<H>(a: H){}

abcd("Halua")

-------------------------------------------------------------


function log(val: T){ //but when you create function then you have to mention <T> 
    console.log(val)
}
log<string>("het") //when you call then it is not mandatory to call the generics<string>


-----------------------------------------------------------------


typescript "hey" ko string letrel boltahe. ager app return <T>(Generic) type ka karraheho too retrn bhai generic type kagi karna parega



                      (:T is return T type)
function abcd<T>(a:T , b:T):T {

    return a;✅ or return b: ✅
    return "hey" as T; or return <T>"hey"

}

abcd<string>("hey", "hellow")

-------------------------------------------------------------

```

<h2>Genetic Interface</h2>

//jaha pe kuchu bahi ho sakta he waha <T> generic use karo

```
interface Halua<T>{
    name:string;
    age:number;
    key:T
}
                        (key have to spacify the value type when you pass value to the generics <string>)
function abcd(obj: Halua<string>){
    obj.key.
}

abcd({name:"foo", age:25, key:"fdsf"})


```
-------------------------------------------------------------

<h2>Genetic Classes</h2>

```

class BottleMaker<T>{
    constructor(public key:T){}
}

let b1= new BottleMaker<string>("Hey");
let b2= new BottleMaker<number>(12);

```

-------------------------------------------------------------

<h2>Type Accerstation And Type Casting</h2>

//Type asssertion ka matlab batana ts ko ki partucular cheej ka type kaya hai, ya app tab karataho jab app ts sa jaada us value ka type jantaho

let a = Number("12)//This is call type casting

a!.toStirng() //! a null or undifiend too nahi hoga
