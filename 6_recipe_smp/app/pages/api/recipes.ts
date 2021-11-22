import { NextApiRequest, NextApiResponse } from 'next';
import { sqlExecuter } from '../../modules/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const recipeData = await sqlExecuter.any(
   'select r.id, r.recipe_name, r.cooking_time, r.explain, r.insert_date, r.img, u.user_name, u.user_introduction, u.icon, c.category_name, f.favorite_count from recipes as r left outer join users as u on r.user_id = u.id left outer join category as c on r.category= c.category_id left outer join (select recipe_id, count(recipe_id) as favorite_count from favorites group by recipe_id) as f on r.id=f.recipe_id order by r.id;');
//   console.log(recipeData, "recipeDatas");

  res.status(200).json({
    recipeData
  });
};