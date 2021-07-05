var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: '',
		pass: ''
	}
});

var mailOptions = {};

module.exports = async (from, to, subject, content, callback) => {
	mailOptions.html = content;
	mailOptions.to = to;
    mailOptions.subject = subject;
    mailOptions.from = from;
	await transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			callback(false)
		} else {
			callback(true)
		}
	});
}