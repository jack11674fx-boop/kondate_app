import { RAW_SOUP_DISHES_BATCH_01 } from "@/data/soup-dishes-batch-01-raw";
import type { DishData } from "@/lib/menu-data";
import { convertRawDishesToDishData } from "@/data/dish-converter";

export const SOUP_DISHES_BATCH_01_CONVERTED: DishData[] =
  convertRawDishesToDishData(RAW_SOUP_DISHES_BATCH_01, "soup");