export type ShoppingListItem = {
    name: string;
    amount: string;
  };
  
  export type RecipeIngredientItem = {
    name: string;
    amount: string;
  };
  
  export type RecipeIngredientGroup = {
    label: string;
    items: RecipeIngredientItem[];
  };
  
  export type RecipeSteps = {
    mainDishIngredients: RecipeIngredientItem[];
    sideDishIngredients: RecipeIngredientItem[];
    soupIngredients: RecipeIngredientItem[];
    mainDishIngredientGroups?: RecipeIngredientGroup[];
    sideDishIngredientGroups?: RecipeIngredientGroup[];
    soupIngredientGroups?: RecipeIngredientGroup[];
    mainDishSteps: string[];
    sideDishSteps: string[];
    soupSteps: string[];
  };
  
  export type MenuSourceConditions = {
    familySize: string;
    cookingTime: string;
    budgetLevel: string;
    avoidIngredients: string;
    preferredIngredients: string;
    mood: string;
  };
  
  export type MenuItem = {
    id: string;
    title: string;
    mainDish: string;
    sideDish: string;
    soup: string;
    estimatedTime: string;
    budgetComment: string;
    nutritionComment: string;
    reason: string;
    aiReason?: string;
    shoppingList?: ShoppingListItem[];
    createdAt: string;
    memo?: string;
    sourceConditions?: MenuSourceConditions;
  };