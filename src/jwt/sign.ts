import {createHmac} from 'node:crypto'
import { generateSignature } from './generateSignature'

interface ISignOptions{
    data:Record<string,any>,
    exp:number,
    secret:string,
}

export function sign({data,exp,secret}: ISignOptions){
    // Header
    const header = {
        alg:'HS256',
        typ:'JWT',
    }

    //Payload
    const payload = {
        ...data,
        iat: Date.now(),
        exp: exp,
    }

    const base64EncodeHeader = Buffer
    .from(JSON.stringify(header))
    .toString('base64url');

    const base64EncodedPayload = Buffer
    .from(JSON.stringify(payload))
    .toString('base64url');
    //Signature



    const signature = generateSignature({
        header: base64EncodeHeader,
        payload: base64EncodedPayload,
        secret:secret
    })

    return `${base64EncodeHeader}.${base64EncodedPayload}.${signature}`
}
