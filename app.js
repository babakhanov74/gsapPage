const tl = gsap.timeline();


tl.from('.wrapper .sircle .one', 2 , {
    y:'100%',
    rotation:'360deg',
   
    
})
.from('.wrapper .sircle .two', 2.5, {
    y:'100%',
    rotation:'360deg',
    

},
'-=2.5')
tl.to('.wrapper .sircle .one', 2 , {
   
    rotation:'360deg',
    repeat:'-1',
    
   
    
})
.to('.wrapper .sircle .two', 2.5, {

    rotation:'360deg',
    repeat:'-1',
  
    

},
'-=2.5')
tl.to('.wrapper .sircle .one', 3, {
   x:'340px',
    rotation:'360deg',

  
    
   
    
})
.to('.wrapper .sircle .two', 3, {
    x:'340px',
    rotation:'360deg',
    delay:'0.3'

  
    

},
'-=3');
tl.to('.black',2, {
    height:'0px'
});
tl.from('.left_desc',3,{
    opacity:'0',
    y:'10px'
})
.from('.navbar',3,{
    opacity:'0',
    y:'10px'
},'-=3')
.from('.right_desc',3,{
    opacity:'0',
    y:'10px'
},'-=3')


