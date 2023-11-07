import { sign } from "./jwt/sign";
import { verify } from "./jwt/verify";

verify({token :sign({
    exp:Date.now() + (24 * 60 * 60 * 1000),
    data:{
        sub: 'alcristi',
        roles: ['admin','user']
    },
    secret:''
}),secret:''})
