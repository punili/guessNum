
  var x, txt;  
  var ans = Math.floor((Math.random() * 99 )  +1 );
  var min = 1; 
  var max = 100;

  function F5(){
    window.location.reload();    
  }

  function myFunction() {      
      demo.innerHTML = "";
      x = document.getElementById("numb").value;
      try { 
          if(x == "")  throw "數值為空，請輸入數字";
          if(isNaN(x)) throw "請輸入數字";
          x = Number(x);
          if(x > 100)   throw "輸入的數值太大";
          if(x < 1)    throw "輸入的數值太小";

           x = parseInt(x); 
           
          if(x == ans){
            txt = "恭喜猜對了！ " ;
          }else {
              if(x > ans){
                  max = x;
              }else{ //x < ans
                  min = x;
              }
              txt = "正確數字介於 " + min + " 至 "+ max +" 之間。" ;;
          }      
      }
      catch(err) {
          txt = "輸入有誤！ " + err;
      }
      finally { 
           document.getElementById("demo").innerHTML = txt;
       
      }
  }
