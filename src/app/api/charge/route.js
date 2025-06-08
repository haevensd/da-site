vimport { NextResponse } from 'next/server';
import https from 'https';
import querystring from 'querystring';

export async function POST(req) {
  const data = await req.json();

  const postData = querystring.stringify({
    security_key: process.env.NMI_SECURITY_KEY,  // or use username/password if needed
    ccnumber: data.cardNumber.replace(/\s/g, ''),
    ccexp: data.expiryDate.replace('/', ''),
    cvv: data.cvv,
    amount: data.amount,
    first_name: data.firstName,
    last_name: data.lastName,
    address1: data.address,
    city: data.city,
    state: data.state,
    zip: data.zipCode,
    email: data.email,
    type: 'sale'
  });

  const options = {
    hostname: 'secure.nmi.com',
    path: '/api/transact.php',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  try {
    const result = await new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let body = '';
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => resolve(body));
      });

      req.on('error', (e) => reject(e));
      req.write(postData);
      req.end();
    });

    const parsed = Object.fromEntries(new URLSearchParams(result));
    if (parsed.response === '1') {
      return NextResponse.json({ success: true, transactionId: parsed.transactionid });
    } else {
      return NextResponse.json({ success: false, error: parsed.responsetext }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
