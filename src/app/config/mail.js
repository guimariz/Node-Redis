export default {
  host: prcess.env.MAIL_HOST,
  port: prcess.env.MAIL_PORT,
  auth: {
    user: prcess.env.MAIL_USER,
    pass: prcess.env.MAIL_PASS,
  },
};
