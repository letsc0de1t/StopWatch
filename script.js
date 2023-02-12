var sec = document.getElementById("seconds")
var min = document.getElementById("minutes")
var hr = document.getElementById("hours")
var counter = 0
var start = false
var interval

const startWatch = () =>{
   start = true
   interval = setInterval(updateWatch,1000)
}
const stopWatch = () =>{
    start = false
    clearInterval(interval)
}
const resetWatch = () =>{
    counter = 0 
    start = false
    updateWatch()
    clearInterval(interval)
}
const updateWatch = () =>{
    var s = counter % 60
    var m = Math.floor( counter / 60) % 60
    var h = Math.floor(counter / 3600) 
    sec.innerText = String(s).length==1 ?'0'+s:s
    min.innerText = String(m).length==1?'0'+m:m
    hr.innerText =  String(h).length==1?'0'+h:h
    counter++
}



