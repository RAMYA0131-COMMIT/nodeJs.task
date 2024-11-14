const nodemailer = require('nodemailer')

const sendMailToUser =async (mailData)=>{
  const transporter =nodemailer.createTransport({
        
    service:'gmail',
    auth:{
        user:process.env.EMAIL_ID,
        pass:process.env.PASS_KEY,
    },
  });
  
 await transporter.sendMail(mailData);
}

const mailSend =async (email, Name, password)=>{
    try{
      
  let mailOptions = {
    from:process.env.EMAIL_ID,
    to:email,
    subject:"WELCOME to our website",
    text:`HELLO ${Name}. This is your password: ${password}`
  };

  await sendMailToUser(mailOptions)
      console.log("Mail sended...");
      
    }catch(error){
      console.log(error.message);
      
    }
};

module.exports=mailSend;