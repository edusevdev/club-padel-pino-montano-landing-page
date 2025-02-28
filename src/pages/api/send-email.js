import nodemailer from 'nodemailer';

export async function post(req) {
  const { name, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true para puerto 465, false para otros puertos
    auth: {
      user: 'maddison53@ethereal.email', // Tu correo de Ethereal
      pass: 'jn7jnAPss4f63QBp6D',        // Tu contraseña de Ethereal
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'edusevillano5@gmail.com',
      subject: `Nuevo mensaje de ${name}`,
      text: message,
      html: `<b>Mensaje de ${name}:</b><p>${message}</p>`,
    });

    return new Response('Correo enviado exitosamente', { status: 200 });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new Response('Error al enviar el correo', { status: 500 });
  }
}
