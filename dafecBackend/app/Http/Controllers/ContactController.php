<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class ContactController extends Controller
{
    public function sendMail(Request $request){

        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'subject' => 'required',
            'message' => 'required',
        ]);

        $mail = new PHPMailer(true);
   
        try {
   
            $mail->SMTPDebug = 0;
            $mail->isSMTP();
            $mail->Host = env('MAIL_HOST');
            $mail->SMTPAuth = true;
            $mail->Username = env('MAIL_USERNAME');
            $mail->Password = env('MAIL_PASSWORD');
            $mail->SMTPSecure = env('MAIL_ENCRYPTION');
            $mail->Port = env('MAIL_PORT');
   
            
            $mail->addAddress('anassbarik03@gmail.com', 'Anass Barik');
            $mail->addReplyTo($data['email'],$data['name']);
   
            $mail->isHTML(false);
            $mail->Subject = $data['subject'];
            $message = $data['message'];
            $phone = $data['phone'];
            $body = "Message :  $message et telephone : $phone";
            $mail->Body = $body;

        
   
            if( !$mail->send() ) {
                return response()->json(['message' => 'Message could not be sent.'],400);
            }
              
            else {
                return response()->json(['message' => 'Message sent successfully.'],200);
            }
   
        } catch (Exception $e) {
             return response()->json(['message' => "error : $e ."], 400);
        }
    
    }
}
