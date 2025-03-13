// Racepe Application with next js   

src > app > racepi - list > page.js
// --------------------------------------
page.js

import RecipeList from '@/component/recipe-list';

async function fetchListOfRecipes() {
    try {
        const apiResponse = await fetch("url");
        const data = await apiResponse.json();
        return data?.data
    } catch (err) {
        throw new Error(err)
    }
}

export default function Recipes() {

    const recepieList = await fetchListOfRecipes();
    return <RecipeList recipeList={recepieList} />
}



src > component > racipe - list > index.js
// --------------------------------------------
index.js

export default async function RecipeList({ recipeList }) {

    return <div>
        <h1>Recipe</h1>
        {
            recipeList && recipeList.length > 0 ? recipeList.map((recipe) => {
                return (
                    <>
                        <Link>
                        <Card>
                            <img src={recipe?.img}/>
                        </Card>
                        </Link>
                    </>
                )
            }) :null
        }

    </div>
}



src > app > racipe - list > [details] > page.js
// --------------------------------------------------
page.js

import RecipeDetailsItems from '@/componet/racipe - details'

async function fetchRecipeDetails(currentRecepieId) {
    try{
        const apiResponse = await fetch(`url/${currentRecepieId}`)
        const data = await apiResponse.json()
        return data

    }catch(err){
        throw new Error(err)
    }  
}


export default async function RecipeDetails({params}) {

    const getRecipeDetails= await fetchRecipeDetails(params?.details);

    return <div>
        <RecipeDetailsItems getRecipeDetails={getRecipeDetails}/>
    </div>
}



src > component > racipe - details > index.js
// --------------------------------------------
index.js

export default async function RecipeDetailsItems({getRecipeDetails}) {

    return <div>
        <div>
            <img src={getRecipeDetails?.image}/>
        </div>
    </div>
}



src > app > loading > page.js
// -------------------------------
page.js

export default function Loading() {
    return <h1>Loading...</h1>
}


src > app > layout.js 
// ---------------------

layout.js 

import Loading from '../Loading';
import { Suspense } from 'react'

export default function Rootlayout({children}) {
    return (
       <Suspense fallback={<Loading />}>
               {children}
       </Suspense> 
    )
}



src > app > not - found > page.js
// ------------------------------------
page.js

export default function notFound() {
    return <h1>Not Found</h1>
}

