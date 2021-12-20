import tokenAPI from '../pages/api/token'
import { AxiosClient } from '../modules/request';

test('tokenAPI', async()=>{
    const axios = AxiosClient();
    await expect(axios.post('token', {params: "rr"})).rejects.toMatch("err");
})


