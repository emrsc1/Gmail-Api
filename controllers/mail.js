const config=require("../config");
const sendMail=require("../send-mail");

exports.get_send_mail=async function(req,res){
  try{
    res.render('sendmail',{
      title:"Send Mail"
    });
  }
  catch(err){
    console.log(err);
  }
  
}
exports.post_send_mail=async function(req,res){
  const email=req.body.email;
  const subject=req.body.subject; 
  const message=req.body.message; 
  try{
    const mailOptions = {
      from: config.email.from, // emailin kimden geldiği
      to: email, // emailin kime gideceği
      subject: subject, // emailin konusu
      html: message // emailin içeriği
    };
    const transport = await sendMail(); // sendMail fonksiyonunu çağırıyoruz
    const result = await transport.sendMail(mailOptions); // mailOptions objesini kullanarak mail gönderiyoruz
    console.log("Email sent to", email); // emailin gönderildiği kişiyi konsola yazdırıyoruz
    res.redirect('/'); // ana sayfaya yönlendiriyoruz
  }
  catch(err){
    console.log(err);
  }
 

 
}
