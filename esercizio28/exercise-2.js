const order = {};

if (order?.customer?.address && !order?.customer?.address?.city) {
  console.log('City is required');
}

//per avere un feedback in caso negativo lo modificherei così

/*
if (order?.customer?.address && !order?.customer?.address?.city) {
  console.log('City is required');
} else {
  console.log('Missing data');
}

*/