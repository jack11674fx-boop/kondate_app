import { RAW_MAIN_DISHES_BATCH_01 } from "@/data/main-dishes-batch-01-raw";
import type { DishData } from "@/lib/menu-data";
import { convertRawDishesToDishData } from "@/data/dish-converter";

export const MAIN_DISHES_BATCH_01_CONVERTED: DishData[] =
  convertRawDishesToDishData(RAW_MAIN_DISHES_BATCH_01, "main");