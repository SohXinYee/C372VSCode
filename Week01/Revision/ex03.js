const payments = [
    { petName: "Chester", amount: 50, status: "Approved" },
    { petName: "Mochi", amount: 80, status: "Pending" },
    {petName: "Mira", amount: 40, status: "Declined " },  


]

const mochiPayment = 
payments.find(payment =>
payment.petName === "Mochi");
console.log("Mochi's payment status: "+ payments[1].status);

for (let i = 0; i < payments.length; i++) {
  const payment = payments[i];

  if (payment.status === "APPROVED") {
    console.log(`Pet-care service for ${payment.petName} confirmed`);
  } else if (payment.status === "PENDING") {
    console.log(`Payment for ${payment.petName} is being processed`);
  } else if (payment.status === "DECLINED") {
    console.log(`Payment for ${payment.petName} unsuccessful`);
  }
}
