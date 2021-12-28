import {  tokenInspection } from "../modules/tokenInspection";
import { destroyCookie, setCookie, parseCookies } from 'nookies';
jest.mock('nookies');

const userinfo={id: 3, 
                user_name: 'どらみちゃん', 
                icon: 'https://bandai-hobby.net/images/153_2137_s_jffkbtrjngzm31u1nwpvhz7lu12y.jpg', 
                p_token: 'cookie'}

const userinfo2={id: 4, 
                user_name: 'どどらみちゃん', 
                icon: 'https://bandai-hobby.net/images/153_2137_s_jffkbtrjngzm31u1nwpvhz7lu12y.jpg', 
                p_token: 'Q2FsdGVkX1/bQRto4wzczqWps/ygpSSYsOnnTRgOCNmftbA0sBw4QupoKANMwZTV'}
const options= {
                //30日間保存 
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
                }


// beforeEach(()=>{
//     (setCookie as jest.Mock).mockClear();
//     (destroyCookie as jest.Mock).mockClear();
// })

test("have right token", ()=>{
    (parseCookies as jest.Mock)=jest.fn().mockReturnValue(`'{${userinfo.p_token}}'`)
    return tokenInspection().then(data =>{
        expect(data).toEqual(userinfo);
    })
})

test("have false token ", ()=>{
    setCookie(null, 'cookie', userinfo2.p_token, options)
    return tokenInspection().then(data =>{
        expect(data).toBeNull();
    })
})

test("no token", ()=>{
    destroyCookie(null,'cookie', {path: "/"});
    return tokenInspection().then(data =>{
        expect(data).toBeNull();
})
})