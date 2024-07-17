package com.Evaport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
@Controller
public class ContactControllerPort {
    @Autowired
    private JavaMailSender mailSender;

    @GetMapping({"/", "/evaport/contact"})
    public String showContactForm(Model model) {
        model.addAttribute("contactForm", new ContactForm());
        System.out.println("success");
        return "contactForm";
    }

    @PostMapping("/evaport/contact")
    public ResponseEntity<String> submitContactForm(@RequestBody ContactForm contactForm) {
        // E-posta gönderme işlemleri
        SimpleMailMessage message = new SimpleMailMessage();
        //e-postanin gonderilecegi adres
        message.setTo("info@evaport.pt");
        message.setSubject(contactForm.getSubject());
        message.setText("Email: "+contactForm.getEmail() +"\n\n"+"Name: " + contactForm.getName() + "\n\n" + contactForm.getBody());
        System.out.println("success");
        mailSender.send(message);
//        // Kullanıcıya onay e-postası gönder
//        SimpleMailMessage confirmationMessage = new SimpleMailMessage();
//        confirmationMessage.setTo(contactForm.getEmail());
//        confirmationMessage.setSubject("Your request has been received by us.");
//        confirmationMessage.setText("Mr./Mrs. " + contactForm.getName() + ",\n\n your request has been received by us. We will get back to you as soon as possible.\n\nRegards,\nEvaport Team");
//        mailSender.send(confirmationMessage);

        // Başarı bildirimi için HTTP 200 durumu ile birlikte view adını döndür
        return ResponseEntity.ok("{\"message\":\"success\"}");
    }
}
