Telwind CSS 4

// what is Telwind CSS

//✅ Telwind css with CDN -------

Go to telwindcss => get started => play cdn => coppy the code and paste =>

🧃 install telwind css intelliSense in vs code (It works only on CLI)

---

<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </body>
</html>

✅ Telwind css componets : Dasiui UI, Flow bite, Sadcn UI , Telblocks

---

✅ How telwind CSS Works

<div class="container flex flex-col justify-between">
<div class="text-white bg-red-600 hover:bg-zinc-900"></div>
</div>

---

✅ Colors

<p class="text-blue-50">Text Color</p>
<p class="bg-blue-50">Background Color</p>
<p class="border-green-50 border-4">Border</p>
<p class="outline-green-50 outline-4">Outline</p>

//white and black have no shade.shade is between 50 - 950

---

✅ Margin Padding

<h1 class="p-10">Padding</h1>//you can write any padding number because it can get any type of range. in telwind css 3 there has some limitations to not use custom range of padding

<h1 class="px-10">Vartically Padding (left and right )</h1>
<h1 class="px-[2px]">Padding in Pixcels</h1>
<h1 class="py-10">Horizotally Padding (top and bottom)</h1>
<h1 class="pt-10"> Padding Top </h1>
<h1 class="pl-10"> Padding left </h1>
<h1 class="pr-10"> Padding right </h1>
<h1 class="pb-10"> Padding bottom </h1>

<h1 class="m-56">Margin</h1>

---

✅ width

width has no range

<div class="w-50"> width </div>
<div class="max-w-50"> Max width </div>
<div class="min-w-100"> Min width </div>
<div class="w-full"> Width Full </div>
<div class="w-1/2"> width take half of the screen </div>
<div class="w-1/3"> width take half of the screen </div>
<div class="w-1/4"> width take half of the screen </div>
<div class="w-1/5"> width take half of the screen </div>

---

✅ Hight

<div class="h-30">Hight</div>

<div class="h-screen">//it's allow you to use h-full and hight % wise
<div class="h-full">Hight</div>
<div class="h-1/2">Hight</div>
<div class="h-1/3">Hight</div>
<div class="h-1/4">Hight</div>
<div class="h-1/5">Hight</div>
<div class="max-h-50 h-10">Hight</div>
<div class="min-h-50 h-50">Hight</div>
</div>

---

✅ Size

<div class="size-95"></div>

<div class="h-screen">
<div class="size-1/2">Screen</div>
<div class="size-1/2 hover:size-1/4">Screen</div>
<div class="size-[130px]">Size in pixcel</div>
</div>

---

✅ Positions

<div class="relative">
<div class="absolute bottom-0 right-0"><div>
<div class="absolute top-0 left-0"><div>
</div>

<div class="size-50">
<h1 class="fixed z-20">Headng</h1>
</div>

---

✅ Container

<div class="container mx-auto"></div>

---

✅ background Classess & Shadows

<div class="bg-[url(funny-monkey.png)] bg-no-repeat bg-center bg-cover"></div>

<div class="gradient bg-gradient-to-t to-blue-500 from-red-500  size-96"></div>
<div class="gradient bg-gradient-to-b to-blue-500 from-red-500 size-96"></div>
<div class="gradient bg-gradient-to-l to-blue-500 from-red-500 size-96"></div>
<div class="gradient bg-gradient-to-tr to-blue-500 from-red-500 size-96"></div>
<div class="shadow-orange-400 shadow-2xl"></div>
<div class="shadow shadow-inner shadow-orange-400"></div>

---

✅ Filters

<img class="blur" src="funny-monkey.png">
<img class="blur-sm" src="funny-monkey.png">
<img class="blur-md" src="funny-monkey.png">
<img class="blur-3xl" src="funny-monkey.png">

<img class="brightness-50" src="funny-monkey.png">
<img class="brightness-100" src="funny-monkey.png">
<img class="brightness-125" src="funny-monkey.png">

<img class="contrast-0" src="funny-monkey.png">
<img class="contrast-50" src="funny-monkey.png">
<img class="contrast-100" src="funny-monkey.png">

<img class="grayscale-100" src="funny-monkey.png">
<img class="invert" src="funny-monkey.png">

---

✅ Interactivity

<button class="blue-bg-500 rounded p-2 m-4 hover:bg-blue-800">Click Me</button>
<button class="blue-bg-500 rounded p-2 m-4 focus:bg-blue-8000">Click Me</button>
<button class="blue-bg-500 rounded p-2 m-4 active:bg-blue-8000">Click Me</button>

group hover

---

✅ Brackpoints

🧠 Tailwind CSS Breakpoints কী?

📏 Tailwind CSS-এর Default Breakpoints:

নাম স্ক্রিন সাইজ (min-width)
sm 640px
md 768px
lg 1024px
xl 1280px
2xl 1536px

<div class="text-sm md:text-lg lg:text-xl">
  এই টেক্সটের সাইজ ছোট স্ক্রিনে `sm`, মাঝারি স্ক্রিনে `lg`, বড় স্ক্রিনে `xl` হবে।
</div>

<p class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
  Responsive Text
</p>

<div class="block md:hidden">ছোট স্ক্রিনে দেখা যাবে, বড় স্ক্রিনে লুকানো</div>
<div class="hidden md:block">বড় স্ক্রিনে দেখা যাবে, ছোট স্ক্রিনে লুকানো</div>

---

✅ Columns

//we have 12 columns

<div class="columns-12 lg:columns-4 md:columns-3 sm:columns-2">
<div>DIV</div>
<div>DIV</div>
<div>DIV</div>
<div>DIV</div>
<div>DIV</div>
<div>DIV</div>
<div>DIV</div>
<div>DIV</div>
</div>

<div class="columns-3xs gap-0 gap-1">
<div>DIV</div>
<div>DIV</div>
<div>DIV</div>
<div>DIV</div>
<div>DIV</div>
<div>DIV</div>
<div>DIV</div>
<div>DIV</div>
</div>

---

Flex

<body class="h-screen">

<div class="bg-gray-200 size-full flex flex-col flex-wrap content-start items-center jusify-center jusify-between sm:flex-row">
<div>DIV</div>
<div>DIV</div>
<div>DIV</div>
<div>DIV</div>
<div>DIV</div>
<div>DIV</div>
<div>DIV</div>
<div>DIV</div>
</div>
</body>

---

Grid

<div class="grid grid-cols-2 gap-1 md:grid-cols-4 ">
<div class="col-span-2">DIV</div> 
<div>DIV</div>
<div class="row-span-2">DIV</div>
<div>DIV</div>
<div>DIV</div>
<div>DIV</div>
<div>DIV</div>
<div>DIV</div>
</div>
</body>

---

Transition & Transform

<button class="transition duration-1000 hover:opacity-5">Click Me</button>

---

Animation

<div class="rounded-fully animate-bounce"></div>
<div class="rounded-fully animate-spin"></div>
<div class="rounded-fully animate-ping"></div>
<div class="rounded-fully animate-pulse"></div>

---

Dark Mode (with operating system)

<div class="dark:bg-slate-800"></div>

---

Dark Mode (with button-click)

## telwind.config.js

module.exports={
✅ darkMode:"class"
}

## index.html

<html class="">

<script>

  function changeMdoe(){
    let el= document.getElementById('root').className
    if(el.className="dark"){
      document.getElementById('root').className="light"
    }else{
       document.getElementById('root').className="dark"
    }
  }
</script>

<button onClick="changeMdoe()">Apply Dark</button>

</html>

===============================================================================================

Custom Class
----------------

<div class="btn-primary hover:bg-background-blue">Button</div>

@layer component{

  .btn-primary{
    @apply bg-blue-500 rounded text-white p-2 hover:bg-blue-700
  }

  .bg-background-blue{
    @apply bg-blue-600 p-2 m-2
  }
}

===============================================================================================

Google font
---------------

Chosr font from google font => @import the font => style.css -> 

@import url("your font url");

@theme{
  --font-moonDance:"mondance", cursice
}

customfont.html
-------------------

<div class="font-moonDance">
<h1>Hellow Wolrd</h1>
</div>

===============================================================================================

Install Telwind in React
---------------------------

install telwind in react -> (installation) -> Vite -> Follow the documentation

===============================================================================================

HTML with Telwind (CLI)
-----------------
Ceate Folder => npm init -y => npm i -D tailwindcss , npx tailwindcss init => Crate css / input.css => 
package.json
-------------

"script":{
  "build:"npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch"
}

npm run build

===============================================================================================

Daisy UI Tutoriyal
----------------------

===============================================================================================

Project 
--------------

setup your own primary color
------------------------------
telwind.config.js
---------------------

module.exports={
  theme:{
    extends:{
      colors:{
        'primary':'#099485'
      }
    }
  }
}

<h1 class="text-primary">Text Color</h1>


Add font
--------

style.css
----------
imported link of font 

telwind.config.js
---------------------

module.exports={
  theme:{
    extends:{
      colors:{
        'primary':'#099485'
      },
      fontFamily:{
        'anj-font':['inter', 'sans-seirf']
      }
    }
  }
}

<h1 class="font-anj-font">Text Color</h1>

