function forLoop(a) {
   for (let i = 0; i < 25; i++) {
   a.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
   }
   return a
 }

function whileLoop(n){
  while (n>0){
    console.log(n)
    n--
}
return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

 function doWhileLoop(a) {
   do {
     a.pop()
   }
   while (a.length > 0 && maybeTrue())
   return a
}
