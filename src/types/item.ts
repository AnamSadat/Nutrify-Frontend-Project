export interface Ingredient {
  ingredientName: string;
  ingredientDose: string;
}

export interface DiseaseRate {
  disease: string;
  status: string;
  level: string;
}

export interface Vitamins {
  vitamin_A: number;
  vitamin_B1: number;
  vitamin_B2: number;
  vitamin_B3: number;
  vitamin_B5: number;
  vitamin_B6: number;
  vitamin_B9: number;
  vitamin_B12: number;
  vitamin_C: number;
  vitamin_D: number;
  vitamin_E: number;
  vitamin_K: number;
}

export interface Minerals {
  calcium: number;
  iron: number;
  magnesium: number;
  phosphorus: number;
  potassium: number;
  zinc: number;
}

export interface NutritionTotal {
  calories: number;
  fat: number;
  carbohydrates: number;
  sugar: number;
  protein: number;
  fiber: number;
  cholesterol: number;
  sodium: number;
  water: number;
  vitamins: Vitamins;
  minerals: Minerals;
}

export interface Item {
  _id: string;
  name: string;
  nation: string;
  category: string;
  description: string;
  image: string;
  origin?: string;
  ingredients?: Ingredient[];
  nutrition_total?: NutritionTotal;
  disease_rate?: DiseaseRate[];
  status?: string;
  submittedBy?: string;
  submittedAt?: string;
  reviewedBy?: string;
  reviewedAt?: string;
  isPublic?: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
}

export interface ItemResponse {
  status: string;
  message: string;
  data: Item;
}

export interface ItemListResponse {
  success: boolean;
  data: Item[];
}

export interface IngredientSearchResult {
  _id: string;
  IngredientEn: string;
  IngredientId: string;
}

export interface IngredientListResponse {
  success: boolean;
  data: IngredientSearchResult[];
}

// Interface for creating new items (without _id since it's generated by backend)
export interface CreateItemRequest {
  name: string;
  nation: string;
  category: string;
  description: string;
  image: string;
  origin?: string;
  ingredients?: Ingredient[];
}
