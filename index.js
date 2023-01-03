let bars_con = document.getElementById("bars_container")
let bubble = document.getElementById("BubbleSort")
let unsortedArray=new Array(100);
let insertion = document.getElementById("InsertionSort")
let selection = document.getElementById("SelectionSort")
let random = document.getElementById("Random")
let speed = document.getElementById("myRange")
let type = document.getElementById("Type")
max =50;
min=1;
var typeo = document.getElementById("ty")
var output = document.getElementById("demo");
output.innerHTML = speed.value;
typeo.innerHTML= "Numbers"

type.oninput=function(){
  if(type.value==1){
    typeo.innerHTML="Bars"
  }
  else{
    typeo.innerHTML="Numbers"
  }
}

bubble.addEventListener("click",bubbleSort)
speed.oninput = function() {
    output.innerHTML = this.value;
  }
random.addEventListener("click",randomize)
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
function randomize(){
    bars_container.innerHTML = "";
    if(type.value==1)
for(let i =0; i<100;i++){
    unsortedArray[i]=Math.floor((Math.random() * (max - min + 1) + min))
}else{
  for(let i =0; i<35;i++){
    unsortedArray[i]=Math.floor((Math.random() * (max - min + 1) + min))
}
}
renderbars(unsortedArray)
}

function renderbars(){
  if(type.value==1){
    for(let i =0; i<100;i++){
        let bars = document.createElement("div");
        bars.classList.add("bar");
        bars.style.height=unsortedArray[i]*5+"px"
        bars_con.append(bars)
    }
  }else{
    for(let i =0; i<30;i++){
      let bars = document.createElement("div");
      bars.classList.add("box");
      bars.innerHTML=unsortedArray[i]
      bars_con.append(bars)
  }
  
  }
}


async function bubbleSort(){
    let array = unsortedArray;
    let bar = document.getElementsByClassName("bar")
    let box = document.getElementsByClassName("box")
    if(type.value==1){
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
                bar[j].style.height = bar[j+1].style.height;
                bar[j + 1].style.height = tmp;
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
                console.log(box[1].innerHTML)
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
    console.log(arr.length)
    if(type.value==1){
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i]
      let currv = bar[i].style.height;
      let j
      bar[i].style.backgroundColor="red"
      await sleep(speed.max-speed.value)
      bar[i].style.backgroundColor="#adc4ed"
      for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j]
        bar[j + 1].style.height = bar[j].style.height;
        bar[j + 1].style.backgroundColor = "black";
      }
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
    if(type.value==1){
    let array_length = input_Array.length;    
    for(let i = 0; i < array_length; i++) {
        let smallest = i;
        for(let j = i+1; j < array_length; j++){
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
             input_Array[i] = input_Array[smallest];
             bar[i].style.height= bar[smallest].style.height
             input_Array[smallest] = temp_val;
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