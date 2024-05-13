const nodemailer=require('nodemailer');
const config=require('./config');
const {google}=require('googleapis');
const sendMail= async function(){
    const CLIENT_ID='CLIENT_ID';
    const CLIENT_SECRET='CLIENT_SECRET';
    const REDIRECT_URI='https://developers.google.com/oauthplayground';
    const REFRESH_TOKEN='REFRESH_TOKEN';
    const oAuth2Client=new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI);
    oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});
    const accessToken=await oAuth2Client.getAccessToken();
    var transport = nodemailer.createTransport({
        service:"gmail",
        auth:{
          type:"OAuth2",
          user:'example@gmail.com',
          clientId:CLIENT_ID,
          clientSecret:CLIENT_SECRET,
          refreshToken:REFRESH_TOKEN,
          accessToken:accessToken
        }
      });
      return transport;
}
module.exports=sendMail;