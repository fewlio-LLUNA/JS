let cnt = 0

console.log("Hello World")

console.log(document.getElementById("plusButton"))
console.log("ロード前です")



const onload = () => {
    console.log("ロードしました")
    console.log(document.getElementById("plusButton"))

    document.getElementById("plusButton").addEventListener("click", onplus)
    document.getElementById("minusButton").addEventListener("click", onminus)
}

window.addEventListener("load", onload)

const onplus = () => { 
    if(cnt==10){
        return
    }
    cnt++
    console.log("+をクリックしました", cnt)
    cntview()
}

// function onplus() { 
//     if(cnt==10){
//         return
//     }
//     cnt++
//     console.log("+をクリックしました", cnt)
//     cntview()
// }

function onminus() {
    if(cnt==0){
        return
    }
    cnt--
    console.log("-をクリックしました", cnt)
    cntview()
}

function cntview() {
    document.getElementById("view").innerHTML = cnt
}


console.log("JS読み込み完了")