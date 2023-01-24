
let title = document.querySelector('.title');
let turn = 'X';
let squar = [];

function end(num1,num2,num3){
    title.innerHTML = `${squar[num1]} winner`;
    document.getElementById('item'+num1).style.background = '#000';
    document.getElementById('item'+num2).style.background = '#000';
    document.getElementById('item'+num3).style.background = '#000';



    setInterval(function(){
        title.innerHTML += '.';
        setTimeout(function(){location.reload()},4000)

    },1000)
}
 


//2 المقارناتfunction
function winner(){
    for(let i = 1; i<10;i++){
        squar[i] = document.getElementById('item'+i).innerHTML;

    }

    //2      المقارنات بي العرض
    if(squar[1] == squar[2] && squar[2] == squar[3] && squar[1]!= '' ){

        end(1,2,3)
   
        
    }

    else  if(squar[4] == squar[5] && squar[5] == squar[6] && squar[5]!= '' ){
        end(4,5,6)

        
    }
    else  if(squar[7] == squar[8] && squar[8] == squar[9] && squar[9]!= '' ){
        end(7,8,9)

        
    }





   //2      المقارنات بي الطول
    else  if(squar[1] == squar[4] && squar[4] == squar[7] && squar[7]!= '' ){
        end(1,4,7)


       
    }
    else  if(squar[2] == squar[5] && squar[5] == squar[8] && squar[8]!= '' ){
        end(2,5,8)


        
    }
    else  if(squar[3] == squar[6] && squar[6] == squar[9] && squar[9]!= '' ){
        end(3,6,9)


      
    }





    // الزوايه
  else  if(squar[1] == squar[5] && squar[5] == squar[9] && squar[5]!= '' ){
    end(1,5,9)

        
    }
    else  if(squar[3] == squar[5] && squar[5] == squar[7] && squar[7]!= '' ){
        end(3,5,7)

       
    }

}




// 1    كيفيه تغيير العنصر من عنصر الى اخر
function game(id){
    let element = document.getElementById(id);
    if(turn === 'X' && element.innerHTML == ''){
        element.innerHTML = 'X';
        turn = 'O';
        title.innerHTML = 'O'
    }
    else if(turn === 'O' && element.innerHTML == ''){
        element.innerHTML = 'O'
        turn = 'X'
        title.innerHTML = 'X'


    }
    winner();
}
