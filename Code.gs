function onFormSubmit(e) {
  const sheet = e.source.getActiveSheet();
  const row = e.range.getRow();
  
  const name = sheet.getRange(row, 2).getValue();
  const email = sheet.getRange(row, 3).getValue();
  const message = sheet.getRange(row, 4).getValue();

  const subject = "We received your request";
  const body = `
Hi ${name},

Thanks for submitting the form.
We have received the following message:

"${message}"

We’ll get back to you shortly.

Best regards,
Automation Demo
`;

try {
  MailApp.sendEmail(email, subject, body);
  sheet.getRange(row, 5).setValue("Sent");
} catch (err) {
  sheet.getRange(row, 5).setValue("Failed - Check Email");  // For invalid email formats
}

}
