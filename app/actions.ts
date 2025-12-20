"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: { name: string; email: string; message: string }) {
    if (!formData.email || !formData.email.includes('@')) {
        return { success: false, error: "Invalid email address provided." };
    }
    try {
        const { data, error } = await resend.emails.send({
            from: 'Marmor Slab Contact <contact@marmorslab.dev>',
            to: [process.env.CONTACT_EMAIL || ''],
            subject: `New Business Inquiry from ${formData.name}`,
            replyTo: formData.email,
            text: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
        });
        console.log("Email send response:", data, error);
        console.log("Using CONTACT_EMAIL:", process.env.CONTACT_EMAIL);

        if (error) {
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (err) {
        return { success: false, error: "Failed to send email" };
    }
}