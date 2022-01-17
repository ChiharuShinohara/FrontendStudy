import { AxiosClient } from '../modules/request';

type CheckfavoAxios =
  | {
      user_id: number;
    }[]
  | [];

type favoProps = {
  recipeid: number;
  isFlag: boolean;
}[];

const favoInspection = async (userid, recipeid) => {
  const axios = AxiosClient();
  const res = await axios.get<CheckfavoAxios>('recipe/checkfavo', {
    params: { userid: userid, recipeid: recipeid },
  });
  if (res.data.length) {
    return res.data;
  } else {
    console.log('nocheckfavodata');
    return null;
  }
};

export default favoInspection;
