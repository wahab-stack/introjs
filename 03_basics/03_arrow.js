
//+++++++++ this +++++++++++


const user = {
    username: "abdul",
    price: 999,
    
    welcomeMessage : function () {
        console.log(`${this.username} , welcome to website`)   // this keyword refer the current context in this USER object
        console.log(this);
        
    }
}

user.welcomeMessage()    // output : values of te current context 

user.username = "sami"   // output : sami welocme to website  (Context changed)
user.welcomeMessage()

console.log(this);

/*
abdul , welcome to website
{
  username: 'abdul',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
sami , welcome to website
{
  username: 'sami',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/



