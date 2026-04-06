import { RAW_SIDE_DISHES_BATCH_01 } from "@/data/side-dishes-batch-01-raw";
import type { DishData } from "@/lib/menu-data";
import { convertRawDishesToDishData } from "@/data/dish-converter";

export const SIDE_DISHES_BATCH_01_CONVERTED: DishData[] =
  convertRawDishesToDishData(RAW_SIDE_DISHES_BATCH_01, "side");