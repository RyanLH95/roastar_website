import emailjs from '@emailjs/browser'

const sendCustomEmail = (details) => {
    // initialise using User ID from .env file
    emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID, // The service ID saved in the .env file
        import.meta.env.VITE_EMAIL_TEMPLATE_ID, // The template ID also saved in the .env file
      // Start of the variables defined in the template earlier
      {
        name: details.name,
        email: details.email,
        message: details.message,
      }
    )
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error)
  })
}

export { sendCustomEmail };