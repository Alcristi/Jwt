import { createHmac } from "crypto";

interface IGenerateSignature {
    secret:string;
    payload:string;
    header:string
}

export function generateSignature({
    header,
    payload,
    secret
}:IGenerateSignature){
    const hmac = createHmac('sha256',secret);

    return  hmac.update(`${header}.${payload}`).digest('base64url')

}
