let add = document.getElementById('add');
         add.addEventListener('click',function(){
           if(document.getElementById('input_task').value!=""){

            let input1= document.getElementById('input1').value; 
            let input_task= document.getElementById('input_task').value;
            let p = document.createElement('p');
            p.innerHTML='<h4>'+input1+'</h4>'+'<span>'+input_task+'</span>'+'<i class="fas fa-edit"></i>'+'<i class="fas fa-trash-alt"></i>'+'</br>'+'</br>'+' <i class="far fa-heart"></i>'+'<i class="far fa-comment"></i>'+'<i class="far fa-share-square"></i>'
             console.log(input_task);
            console.log(p.children[2]);
            document.getElementById('task').appendChild(p); 
            p.children[2].addEventListener('click',function(){
                 p.remove();
                 console.log(p);

             })
             p.children[1].addEventListener('click',function(){
                 p.children[0].style.backgroundColor="grey";
                  p.children[0].contentEditable = true;
                 console.log(p);
             })
             document.getElementById('input_task').value="";
            }
            else{
                alert("please add a task");
            }
         })
