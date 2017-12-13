var x, txt;
var i;
var ans = Math.floor((Math.random() * 99 )  +1 );
var a = 1; b = 100;
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

         x = parseInt(x) 
         i = parseInt(i) 
      
    if( isNaN(i) && x != ans  )
          {
             if(x < ans)
              {
                 txt = "正確數字介於 " + x + " 至100之間。" ;
               }   
             else  if(x > ans) 
               {
                 txt = "正確數字介於 1 至 " + x +" 之間。" ;
                }
             else
                {
                  txt = "輸入有誤！ "   ;
                  }

             i =  x;
           }
        else if( x != ans && i != 0)
          {
             if(x < ans && i < ans && i <= x)
              {
                 txt = "正確數字介於 " + x + " 至100之間。" ;
               }
             else if(x < ans && i < ans && i > x)
               {
                 txt = "正確數字介於 " + i + " 至100之間。" ;
                }            
             else if(x < ans && i > ans )
               {
                 txt = "正確數字介於 "+ x + " 至 " + i +" 之間。"  ;
                }
             else if(x > ans && i > ans && i >= x)
               {
                 txt = "正確數字介於 1 至 " + x +" 之間。" ;
                }       

             else if(x > ans && i > ans && i < x)
               {
                 txt = "正確數字介於 1 至 " + i +" 之間。" ;
                }
             else  if(x > ans && i < ans ) 
               {
                 txt = "正確數字介於 " + i + " 至 " + x +" 之間。" ;
                }
             else
                {
                  txt = "輸入有誤！ "   ;
                  }

             i = 0+ x;
           }   
          else
           {
              txt = "恭喜猜對了！ " ;
            }      
    }
    catch(err) {
        txt = "輸入有誤！ " + err;
    }
    finally { 
         document.getElementById("demo").innerHTML = txt;
     
                }
}
