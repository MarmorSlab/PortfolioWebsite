"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: { name: string; email: string; message: string }) {

    if (!formData.email || !formData.email.includes('@')) {
        return { success: false, error: "Invalid email address provided." };
    }

    try {
        const { data, error } = await resend.emails.send({
            
            from: 'MarmorSlab Inquiries <inquires@marmorslab.dev>',
            to: ['info@marmorslab.dev'],
            subject: `[New Lead] Business Inquiry from ${formData.name}`,
            replyTo: formData.email,
            text: `
MARMORSLAB PROJECT INQUIRY
---------------------------
Recipient: Agustin Marmor
Legal Entity: Individual (Agustin Marmor)

CLIENT DETAILS
Name: ${formData.name}
Email: ${formData.email}

MESSAGE CONTENT
${formData.message}

---------------------------
Technical Notice: This inquiry was generated via marmorslab.dev 
and is being handled personally by Agustin Marmor.
            `,
        });

        if (error) {
            console.error("Resend Error:", error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (err) {
        console.error("Server Action Error:", err);
        return { success: false, error: "Failed to send email" };
    }
}