function cal(){

  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("op").value;

  alert(a);
  alert(b);
  alert(c);

  
  if (op == "+"){
    r=parseInt(a)+ parseInt(b);

  }
  if (op == "-"){
    r=parseInt(a) - parseInt(b);
  } 
  
  if (op == "/"){
      r=parseInt(a) /  parseInt(b);
  
  }
  
  if (op == "*"){
    r=parseInt(a) * parseInt(b);
     
   }
   alert(r);

  val = document.getElementById(res).innerHTML = r;
  console.log(val);
  
      


}