const { createTransport } = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
const { GOOGLE_ID,GOOGLE_REFRESH,GOOGLE_SECRET,GOOGLE_URL,GOOGLE_USER,BACK_URL } = process.env

function createClient() {
    return new OAuth2(
        GOOGLE_ID,
        GOOGLE_SECRET,
        GOOGLE_URL
    )
}

function getTransport(client) { 
    const accessToken = client.getAccessToken() 
    return createTransport({
        service: 'gmail',   
        auth: {             
            user: GOOGLE_USER,
            type: 'OAuth2',
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls: { rejectUnauthorized: false }
    })
}

function getEmailBody(mail,code,host) { 
    return `
    <!DOCTYPE html>
    <!-- saved from url=(0044)file:///C:/Users/crist/Downloads/motorX.html -->
    <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
    
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>motorX</title>
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
      <link href="./motorX3_files/css" rel="stylesheet" type="text/css">
      <link href="./motorX3_files/css(1)" rel="stylesheet" type="text/css"><!--<![endif]-->
      <style>
        * {
          box-sizing: border-box
        }
    
        body {
          margin: 0;
          padding: 0
        }
    
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important
        }
    
        #MessageViewBody a {
          color: inherit;
          text-decoration: none
        }
    
        p {
          line-height: inherit
        }
    
        .desktop_hide,
        .desktop_hide table {
          mso-hide: all;
          display: none;
          max-height: 0;
          overflow: hidden
        }
    
        @media (max-width:670px) {
          .social_block.desktop_hide .social-table {
            display: inline-block !important
          }
    
          .image_block img.big,
          .row-content {
            width: 100% !important
          }
    
          .mobile_hide {
            display: none
          }
    
          .stack .column {
            width: 100%;
            display: block
          }
    
          .mobile_hide {
            min-height: 0;
            max-height: 0;
            max-width: 0;
            overflow: hidden;
            font-size: 0
          }
    
          .desktop_hide,
          .desktop_hide table {
            display: table !important;
            max-height: none !important
          }
        }
      </style>
    </head>
    
    <body style="background-color:#fff;margin:0;padding:0;-webkit-text-size-adjust:none;text-size-adjust:none">
      <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
        style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff">
        <tbody>
          <tr>
            <td>
              <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0"
                        role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:650px"
                        width="650">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%"
                              style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0">
                              <table class="text_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0"
                                role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                <tbody>
                                  <tr>
                                    <td class="pad">
                                      <div style="font-family:sans-serif">
    
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0"
                        role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:650px"
                        width="650">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%"
                              style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:0;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0">
                              <div class="spacer_block" style="height:20px;line-height:20px;font-size:1px"> </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                role="presentation"
                style="mso-table-lspace:0;mso-table-rspace:0;background-color:#000;background-image:url(https://s3.eu-west-1.amazonaws.com/images-editor-acmb/images/acumba/pattern.png);background-position:top center;background-repeat:repeat">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0"
                        role="presentation"
                        style="mso-table-lspace:0;mso-table-rspace:0;background-color:#000;color:#000;width:650px"
                        width="650">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%"
                              style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:15px;border-top:0;border-right:0;border-bottom:0;border-left:0">
                              <table class="text_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0"
                                role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                <tbody>
                                  <tr>
                                    <td class="pad"
                                      style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:30px">
                                      <div style="font-family:&#39;Trebuchet MS&#39;,Tahoma,sans-serif">
                                        <div class=""
                                          style="font-size:12px;font-family:Montserrat,&#39;Trebuchet MS&#39;,&#39;Lucida Grande&#39;,&#39;Lucida Sans Unicode&#39;,&#39;Lucida Sans&#39;,Tahoma,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2">
                                          <p
                                            style="margin:0;font-size:12px;text-align:center;mso-line-height-alt:14.399999999999999px">
                                            <span style="font-size:48px;"><strong><span
                                                  style="font-size:48px;">WELCOME</span></strong></span>
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="divider_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0"
                                role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                <tbody>
                                  <tr>
                                    <td class="pad"
                                      style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:15px">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="15%"
                                          style="mso-table-lspace:0;mso-table-rspace:0">
                                          <tbody>
                                            <tr>
                                              <td class="divider_inner"
                                                style="font-size:1px;line-height:1px;border-top:10px solid #cef10a">
                                                <span> </span>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="text_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0"
                                role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                <tbody>
                                  <tr>
                                    <td class="pad"
                                      style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:5px">
                                      <div style="font-family:&#39;Trebuchet MS&#39;,Tahoma,sans-serif">
                                        <div class=""
                                          style="font-size:12px;font-family:Montserrat,&#39;Trebuchet MS&#39;,&#39;Lucida Grande&#39;,&#39;Lucida Sans Unicode&#39;,&#39;Lucida Sans&#39;,Tahoma,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2">
                                          <p style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:16.8px">
                                            <span style="font-size:20px;"><strong>Thanks for signing up!</strong>
                                            </span><br>
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="text_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0"
                                role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                <tbody>
                                  <tr>
                                    <td class="pad"
                                      style="padding-bottom:20px;padding-left:25px;padding-right:25px;padding-top:5px">
                                      <div style="font-family:sans-serif">
                                        <div class=""
                                          style="font-size:12px;mso-line-height-alt:21.6px;color:#555;line-height:1.8;font-family:Lato,Tahoma,Verdana,Segoe,sans-serif">
                                          <p style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:28.8px">
                                            <span style="font-size:16px;"><span style="font-size:16px;">Welcome to MotorX!
                                                We are excited to have you as part of our community. To get started, we need
                                                you to verify your email
                                                address. Please click the button below to complete the verification process.
                                                Once you've done that, you'll be able to
                                                enjoy all the benefits and features that MotorX has to offer. We hope you
                                                enjoy your time with us!
                                              </span><span style="font-size:16px;"> learn more about what
                                                <strong>MotorX.com</strong> can do for you.</span></span>
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0"
                        role="presentation"
                        style="mso-table-lspace:0;mso-table-rspace:0;background-color:#000;color:#000;width:650px"
                        width="650">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%"
                              style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0">
                              <table class="image_block block-1" width="100%" border="0" cellpadding="15" cellspacing="0"
                                role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                <tbody>
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center" style="line-height:10px"><img class="big"
                                          src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/IJ7CWTDIPFAUXA4WKIVVHTQMTI.jpg"
                                          style="display:block;height:auto;border:0;width:620px;max-width:100%" width="620"
                                          alt="Image" title="Image"></div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0"
                        role="presentation"
                        style="mso-table-lspace:0;mso-table-rspace:0;background-color:#000;color:#000;width:650px"
                        width="650">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%"
                              style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0">
                              <table class="text_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0"
                                role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                <tbody>
                                  <tr>
                                    <td class="pad" style="padding-bottom:5px;padding-left:10px;padding-top:5px">
                                      <div style="font-family:&#39;Trebuchet MS&#39;,Tahoma,sans-serif">
    
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="text_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0"
                                role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                <tbody>
                                  <tr>
                                    <td class="pad">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="button_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0"
                                role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                <tbody>
                                  <tr>
                                    <td class="pad"
                                      style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:15px;text-align:center">
                                      <div class="alignment" align="center">
                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:42px;width:191px;v-text-anchor:middle;" arcsize="12%" strokeweight="1.5pt" strokecolor="#CEF10A" fill="false"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#cef10a; font-family:Tahoma, Verdana, sans-serif; font-size:14px"><![endif]-->
                                        <div
                                          style="text-decoration:none;display:inline-block;color:#cef10a;background-color:transparent;border-radius:5px;width:auto;border-top:2px solid #cef10a;font-weight:400;border-right:2px solid #cef10a;border-bottom:2px solid #cef10a;border-left:2px solid #cef10a;padding-top:5px;padding-bottom:5px;font-family:Lato,Tahoma,Verdana,Segoe,sans-serif;font-size:14px;text-align:center;mso-border-alt:none;word-break:keep-all">
                                          <span
                                            style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal;"><span
                                              style="word-break: break-word;"><span style="line-height: 28px;"
                                                data-mce-style=""><a style="color:#cef10a;text-decoration: none;"
                                                  href="${host}/api/auth/verify/${code}">Verify here</a>
                                              </span></span></span>
                                        </div><!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f9f9f9">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0"
                        role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:650px"
                        width="650">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%"
                              style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0">
                              <table class="divider_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0"
                                role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                <tbody>
                                  <tr>
                                    <td class="pad" style="padding-bottom:15px">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"
                                          style="mso-table-lspace:0;mso-table-rspace:0">
                                          <tbody>
                                            <tr>
                                              <td class="divider_inner"
                                                style="font-size:1px;line-height:1px;border-top:1px solid #eeeded">
                                                <span> </span>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="text_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0"
                                role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                <tbody>
                                  <tr>
                                    <td class="pad">
                                      <div style="font-family:sans-serif">
                                        <div class=""
                                          style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Lato,Tahoma,Verdana,Segoe,sans-serif">
                                          <p style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:16.8px">
                                            <strong>© 2022 MotorX Inc.</strong> All rights reserved
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f9f9f9">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0"
                        role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:650px"
                        width="650">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%"
                              style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:15px;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0">
                              <div class="spacer_block" style="height:20px;line-height:20px;font-size:1px"> </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0"
                        role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:650px"
                        width="650">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%"
                              style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0">
                              <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0"
                                role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                                <tbody>
                                  <tr>
                                    <td class="pad" style="width:100%;padding-right:0;padding-left:0;padding-top:30px">
                                      <div class="alignment" align="center" style="line-height:10px"></div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table><!-- End -->
    </body>
    
    </html>
    `
}

const accountVerificationEmail = async (mailOfNewUser,codeCalculedWithCrypto) => {
    const client = createClient() 
    client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH }) 
    const transport = getTransport(client) 
    const mailOptions = {
        from: GOOGLE_USER,
        to: mailOfNewUser,
        subject: 'Verify your new account in MotorX',
        html: getEmailBody(mailOfNewUser,codeCalculedWithCrypto,BACK_URL)
    }
    await transport.sendMail(
        mailOptions,
        (error, response) => {
            if (error) {
                console.error(error)
                return
            }
            console.log('Email sent!')
        }
    )
}

module.exports = accountVerificationEmail