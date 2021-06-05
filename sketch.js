var plyr , backgroundimg
var count = 0 , incre
var question= []
var answer= []
var c=1
var a1,a2,a3,a4;
var start="yes"
var img=false
var reply=""
var wrongans,rightans

function preload()
{
 player=loadImage("charter.png")
 backgroundimg=loadImage('pixel.jpg')
 a11=loadImage('15.png')
 a12=loadImage('20.png')
 a13=loadImage('eight.png')
 a14=loadImage("625.png")
 wrongans1=loadImage("x.png")
 rightans1=loadImage("check.png")

}



function setup() 
{
  createCanvas(displayWidth-50,displayHeight-100);
 img=false
 plyr=createSprite(50, displayHeight-200, 50, 50);
 rightans=createSprite(200,200)
 wrongans=createSprite()
 plyr.addImage(player)
 wrongans.addImage(wrongans1)
 wrongans.visible=false
 rightans.addImage(rightans1)
 rightans.visible=false

 plyr.scale=0.5
 plyr.setCollider("rectangle",0,20,80,150)
 form= new Form()
 form.display()

 if (count=== 1 )
  {
   textSize(14)
   fill("yellow")
   text(question[count-1],200,200 )
  
  }
}

function draw() 
{
  background(backgroundimg); 
  
  plyr.debug=true
  if (keyDown("UP_ARROW"))
 {
   plyr.y=plyr.y-50
 } 

  
  if (keyDown("DOWN_ARROW"))
  {
    plyr.y=plyr.y+50
  }
        
  if (keyDown("RIGHT_ARROW"))
  {
     plyr.x=plyr.x+50
  }
        
  if (keyDown("LEFT_ARROW"))
  {
    plyr.x=plyr.x-50
  }

      if(count === 1 )
      {
       textSize(20)
       fill("darkblue")
       text("Level 1",50,50 )
      }

//QUESTIONS
question.push("What is the square root of 225 ")
question.push("what is 2 to the power of three")
question.push("what is 7 times 13")
question.push("55+55")
question.push("25 squared")
answer=[[15,16,17,10]]



for( var a in question)
{
 //start of question 1
 if (count=== 1 )
{
 
//QUESTION DISPLAY
textSize(20)
textFont("calibri")
fill("Black")
text(question[count-1],400,100 )

if(start==="yes")
{
  answers()
  start="no"
}



if((plyr.isTouching(a1) || plyr.isTouching(a2)|| plyr.isTouching(a3)||plyr.isTouching(a4))&& img===false)
{
  console.log("1")
  a1.addImage(a11)
  a2.addImage(a12)
  img=true
  plyr.y=displayHeight-200
  plyr.x=50

}
else if(plyr.isTouching(a1) && img===true)
  {
   reply="right"
   
   
  }

 else if(plyr.isTouching(a2)|| plyr.isTouching(a3) || plyr.isTouching(a4))
  {
    
    reply="wrong"
  }

  if(reply==="right")
  {
    rightans.visible=true
    a1.destroy()
    a2.destroy()
    a3.destroy()
    a4.destroy()
    plyr.y=displayHeight-200
    plyr.x=50
    start=("yes")
    rightans.visible=false
    reply=''
    count=2
  }
  else if(reply==="wrong")
  {
    wrongans.visible=true
    plyr.y=displayHeight-200
    plyr.x=50
    reply=" "
  }

}
//end of question

else if (count===2)
{
 //QUESTION DISPLAY
textSize(20)
textFont("calibri")
fill("Black")
text(question[count-1],400,100 )

if(start==="yes")
{
  answers()
  start="no"
}



if((plyr.isTouching(a1) || plyr.isTouching(a2)|| plyr.isTouching(a3)||plyr.isTouching(a4))&& img===false)
{
  console.log("1")
  a1.addImage(a11)
  a2.addImage(a12)
  img=true
  plyr.y=displayHeight-200
  plyr.x=50

}
else if(plyr.isTouching(a1) && img===true)
  {
   reply="right"
   
   
  }

 else if(plyr.isTouching(a2)|| plyr.isTouching(a3) || plyr.isTouching(a4))
  {
    
    reply="wrong"
  }

  if(reply==="right")
  {
    rightans.visible=true
    a1.destroy()
    a2.destroy()
    a3.destroy()
    a4.destroy()
    plyr.y=displayHeight-200
    plyr.x=50
    start=("yes")
    rightans.visible=false
    reply=''
    count=2
  }
  else if(reply==="wrong")
  {
    wrongans.visible=true
    plyr.y=displayHeight-200
    plyr.x=50
    reply=" "
  }





}

//END OF 2

else if(count===3)
{
//QUESTION DISPLAY
textSize(20)
textFont("calibri")
fill("Black")
text(question[count-1],400,100 )

if(start==="yes")
{
  answers()
  start="no"
}



if((plyr.isTouching(a1) || plyr.isTouching(a2)|| plyr.isTouching(a3)||plyr.isTouching(a4))&& img===false)
{
  console.log("1")
  a1.addImage(a11)
  a2.addImage(a12)
  img=true
  plyr.y=displayHeight-200
  plyr.x=50

}
else if(plyr.isTouching(a1) && img===true)
  {
   reply="right"
   
   
  }

 else if(plyr.isTouching(a2)|| plyr.isTouching(a3) || plyr.isTouching(a4))
  {
    
    reply="wrong"
  }

  if(reply==="right")
  {
    rightans.visible=true
    a1.destroy()
    a2.destroy()
    a3.destroy()
    a4.destroy()
    plyr.y=displayHeight-200
    plyr.x=50
    start=("yes")
    rightans.visible=false
    reply=''
    count=2
  }
  else if(reply==="wrong")
  {
    wrongans.visible=true
    plyr.y=displayHeight-200
    plyr.x=50
    reply=" "
  }





}
//END of 3

else if (count===4)
{
  //QUESTION DISPLAY
textSize(20)
textFont("calibri")
fill("Black")
text(question[count-1],400,100 )

if(start==="yes")
{
  answers()
  start="no"
}



if((plyr.isTouching(a1) || plyr.isTouching(a2)|| plyr.isTouching(a3)||plyr.isTouching(a4))&& img===false)
{
  console.log("1")
  a1.addImage(a11)
  a2.addImage(a12)
  img=true
  plyr.y=displayHeight-200
  plyr.x=50

}
else if(plyr.isTouching(a1) && img===true)
  {
   reply="right"
   
   
  }

 else if(plyr.isTouching(a2)|| plyr.isTouching(a3) || plyr.isTouching(a4))
  {
    
    reply="wrong"
  }

  if(reply==="right")
  {
    rightans.visible=true
    a1.destroy()
    a2.destroy()
    a3.destroy()
    a4.destroy()
    plyr.y=displayHeight-200
    plyr.x=50
    start=("yes")
    rightans.visible=false
    reply=''
    count=2
  }
  else if(reply==="wrong")
  {
    wrongans.visible=true
    plyr.y=displayHeight-200
    plyr.x=50
    reply=" "
  }







}

//END of 4

else if (count===5)
{
   //QUESTION DISPLAY
textSize(20)
textFont("calibri")
fill("Black")
text(question[count-1],400,100 )

if(start==="yes")
{
  answers()
  start="no"
}



if((plyr.isTouching(a1) || plyr.isTouching(a2)|| plyr.isTouching(a3)||plyr.isTouching(a4))&& img===false)
{
  console.log("1")
  a1.addImage(a11)
  a2.addImage(a12)
  img=true
  plyr.y=displayHeight-200
  plyr.x=50

}
else if(plyr.isTouching(a1) && img===true)
  {
   reply="right"
   
   
  }

 else if(plyr.isTouching(a2)|| plyr.isTouching(a3) || plyr.isTouching(a4))
  {
    
    reply="wrong"
  }

  if(reply==="right")
  {
    rightans.visible=true
    a1.destroy()
    a2.destroy()
    a3.destroy()
    a4.destroy()
    plyr.y=displayHeight-200
    plyr.x=50
    start=("yes")
    rightans.visible=false
    reply=''
    count=2
  }
  else if(reply==="wrong")
  {
    wrongans.visible=true
    plyr.y=displayHeight-200
    plyr.x=50
    reply=" "
  }








}




//END OF 5


}

  drawSprites();

}

function answers()
{
   a1=createSprite(200,300)
   a2=createSprite(700,250)
   a3=createSprite(200,100)
   a4=createSprite(300,600)
   a1.debug=true
   a2.debug=true
   a3.debug=true
   a4.debug=true
  return a1,a2,a3,a4
}