let bars_con = document.getElementById("bars_container")
let bubble = document.getElementById("BubbleSort")
let unsortedArray=new Array(80);
let insertion = document.getElementById("InsertionSort")
let selection = document.getElementById("SelectionSort")
let random = document.getElementById("Random")
let speed = document.getElementById("myRange")
let numbers = document.getElementById("Numbers")
let slider = document.getElementById("myRange")
max =100;
min=5;
let bars = document.getElementById("Bars")
bars.addEventListener("change",barsischecked)
numbers.addEventListener("change",numebersischecked)
var totallength = 5;

slider.oninput = function(){
  if(bars.checked==true){
totallength = Math.floor(slider.value/10)+5
randomize()
}
else{
totallength = Math.floor(slider.value/(30))+5
console.log(totallength)
randomize()
}

}

function barsischecked(){
if(numbers.checked==true){
  numbers.checked=false;
}
}
function numebersischecked(){
  if(bars.checked==true){
    bars.checked=false;
  }
  }
random.addEventListener("click",randomizer)
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
function randomize(){
let bar = document.getElementsByClassName("bar")
let box = document.getElementsByClassName("box")
if(bars.checked==true)
for(let i =bar.length; i<totallength;i++){
    unsortedArray[i]=Math.floor((Math.random() * (max - min + 1) + min))
    console.log("HEY")
    console.log(totallength)
}else{
  for(let i =box.length; i<totallength;i++){
    unsortedArray[i]=Math.floor((Math.random() * (max - min + 1) + min))
}
}
renderbars(unsortedArray)
}

function randomizer(){
  if(bars.checked==true)
  for(let i =0; i<totallength;i++){
      unsortedArray[i]=Math.floor((Math.random() * (max - min + 1) + min))
      console.log("HEY")
      console.log(totallength)
  }else{
    for(let i =0; i<totallength;i++){
      unsortedArray[i]=Math.floor((Math.random() * (max - min + 1) + min))
  }
  }
  renderbars(unsortedArray)
  }

bubble.addEventListener("click",bubbleSort)
function renderbars(){
  let bar = document.getElementsByClassName("bar")
  let box = document.getElementsByClassName("box")
  bars_container.innerHTML = "";
  if(bars.checked==true){
    console.log(totallength)
    if(totallength<=20){
      for(let i =0; i<totallength;i++){
      let bars = document.createElement("div");
      bars.classList.add("bar");
      bars.style.height=unsortedArray[i]*5+"px"
      bars.innerHTML=unsortedArray[i]*5
      bars.style.width="35px"
      bars_con.append(bars)}
    }
   else if(totallength>=60){
      for(let i =0; i<totallength;i++){
        let bars = document.createElement("div");
        bars.classList.add("bar");
        bars.style.height=unsortedArray[i]*5+"px"
        bars.style.width="5px"
        bars_con.append(bars)
      }
    }else{
    for(let i =0; i<totallength;i++){
        let bars = document.createElement("div");
        bars.classList.add("bar");
        bars.style.height=unsortedArray[i]*5+"px"
        bars_con.append(bars)
    }
  }
  }else if(numbers.checked==true){
    for(let i =0; i<totallength;i++){
      let bars = document.createElement("div");
      bars.classList.add("box");
      bars.innerHTML=unsortedArray[i]
      bars_con.append(bars)
  }
  
  }
}


async function bubbleSort(){
  console.log("HEYEYE")
    let array = unsortedArray;
    let bar = document.getElementsByClassName("bar")
    let box = document.getElementsByClassName("box")
    if(bars.checked==true){
    console.log(bar.length)
    for (let i = 0; i < bar.length-1; i++) {
        for (let j = 0; j < bar.length-i-1; j++) {
            if (array[j] > array[j + 1]) {
                bar[j].style.backgroundColor = "red";
                bar[j + 1].style.backgroundColor = "red";
                await sleep(speed.max-speed.value);
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                let tmp = bar[j].style.height;
                let tmps = bar[j].innerHTML;
                bar[j].style.height = bar[j+1].style.height;
                bar[j].innerHTML = bar[j+1].innerHTML;
                bar[j + 1].style.height = tmp;
                bar[j + 1].innerHTML = tmps;
               await sleep(speed.max-speed.value);
               bar[j].style.backgroundColor = "black";
               bar[j + 1].style.backgroundColor = "black";
            }
        }
        for(let f=0;f<bar.length;f++){
          bar[f].style.backgroundColor="#adc4ed"
        }
    }}
    else{
      for (let i = 0; i < box.length-1; i++) {
        for (let j = 0; j < box.length-i-1; j++) {
            if (array[j] > array[j + 1]) {
                box[j].style.border= "3px solid red";
                box[j + 1].style.border= "3px solid red";
                await sleep(speed.max-speed.value);
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                let tmp = box[j].innerHTML;
                box[j].innerHTML = box[j+1].innerHTML;
                box[j + 1].innerHTML = tmp;
               await sleep(speed.max-speed.value);
               box[j].style.border= "3px solid black";
               box[j + 1].style.border= "3px solid black";
            }
        }
        for(let f=0;f<bar.length;f++){
          bar[f].style.backgroundColor="#adc4ed"
        }
    }
  }
    return bar;

};

async function insertionSort(a) {
    let arr = a;
    let bar = document.getElementsByClassName("bar")
    let box = document.getElementsByClassName("box")
   console.log(bar.length)
    if(bars.checked==true){
    for (let i = 1; i < bar.length; i++) {
     // console.log(bar.length)
      let currentValue = arr[i]
      let currv = bar[i].style.height;
      let currvs = bar[i].innerHTML;
      let j
      bar[i].style.backgroundColor="red"
      await sleep(speed.max-speed.value)
      bar[i].style.backgroundColor="#adc4ed"
      for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j]
        bar[j + 1].innerHTML = bar[j].innerHTML;
        bar[j + 1].style.height = bar[j].style.height;
        bar[j + 1].style.backgroundColor = "black";
      }
      bar[j+1].innerHTML=currvs
      arr[j + 1] = currentValue
      bar[j+1].style.height=currv
      bar[j+1].style.backgroundColor="red"
      await sleep(speed.max-speed.value)
      bar[j+1].style.backgroundColor="black"

    }}else{
      for (let i = 1; i < box.length; i++) {
        let currentValue = arr[i]
        let currv = box[i].innerHTML;
        let j
        box[i].style.border= "3px solid red";
        await sleep(speed.max-speed.value)
        for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
          arr[j + 1] = arr[j]
          box[j + 1].innerHTML = box[j].innerHTML;
          box[j + 1].style.border= "3px solid black";
        }
        arr[j + 1] = currentValue
        box[j+1].innerHTML=currv
        box[j+1].style.border= "3px solid red";
        await sleep(speed.max-speed.value)
        box[j+1].style.border= "3px solid black";
    }
  }
    return arr
  }
  async function selectionSort(input_Array) {
    let bar = document.getElementsByClassName("bar")
    let box = document.getElementsByClassName("box")
    if(bars.checked==true){
    let array_length = input_Array.length;    
    for(let i = 0; i < bar.length; i++) {
        let smallest = i;
        for(let j = i+1; j < bar.length; j++){
            if(input_Array[j] < input_Array[smallest]) {
                smallest=j;
            }
         }
         if (smallest != i) {
          bar[i].style.backgroundColor="red"
          bar[smallest].style.backgroundColor="red"
          await sleep(speed.max-speed.value)
             let temp_val = input_Array[i];
             let temp = bar[i].style.height
             let temps = bar[i].innerHTML
             input_Array[i] = input_Array[smallest];
             bar[i].innerHTML= bar[smallest].innerHTML
             bar[i].style.height= bar[smallest].style.height
             input_Array[smallest] = temp_val;
             bar[smallest].innerHTML= temps;  
             bar[smallest].style.height= temp;   
             bar[i].style.backgroundColor="black"
             bar[smallest].style.backgroundColor="black"   
        }

    }
    for(let f=0;f<bar.length;f++){
      bar[f].style.backgroundColor="#adc4ed"
    }}
    else{
      console.log("HEY")
      let array_length = input_Array.length;    
    for(let i = 0; i < box.length; i++) {
        let smallest = i;
        for(let j = i+1; j < box.length; j++){
            if(input_Array[j] < input_Array[smallest]) {
                smallest=j;
            }
         }
         if (smallest != i) {
          box[i].style.border= "3px solid red";
          console.log()
          box[smallest].style.border= "3px solid red";
          await sleep(speed.max-speed.value)
             let temp_val = input_Array[i];
             let temp = box[i].innerHTML
             input_Array[i] = input_Array[smallest];
             box[i].innerHTML= box[smallest].innerHTML
             input_Array[smallest] = temp_val;
             box[smallest].innerHTML= temp;   
             box[i].style.border= "3px solid black";
             box[smallest].style.border= "3px solid black"; 
        }

    }
    for(let f=0;f<bar.length;f++){
      box[f].style.border= "3px solid black";
    }}

    return input_Array;

}



selection.addEventListener("click",function(){
  selectionSort(unsortedArray)
})
  insertion.addEventListener("click",function(){
    insertionSort(unsortedArray)
    console.log(unsortedArray.length)
})
