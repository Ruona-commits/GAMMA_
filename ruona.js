window.onload=function(){
    const loadingScreen = document.querySelector('.loading-screen');
    const mainContent=document.querySelector('.main-content')

    if(loadingScreen){
         setTimeout(function(){
        loadingScreen.classList.add('hide');
          
        setTimeout(function(){
            loadingScreen.remove();
            mainContent.classList.add('show');
        }, 1000);
         },3000);
        }
    }



    document.querySelector('.user-info-group').addEventListener('submit',
        function(event ){
            event.preventDefault();

            const name =document.getElementById('name').value ;
            const email=document.getElementById('email').value;
            const phone =document.getElementById('phone').value;
            const quote =document.querySelector('.quote2').value;


         localStorage.setItem('name',name);
         localStorage.setItem('email',email);
         localStorage.setItem('phone',phone);
         localStorage.setItem('quote2',quote);


         window.location.href ='./index2.html';
        }); 

    


        const btn= document.querySelector('.btn1').addEventListener
        ('click' ,function(event){
          window.location.href= 'https://metamask.io'
        });        
