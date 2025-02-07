declare module "tailwindcss/lib/util/flattenColorPalette" {
    import { Color } from "tailwindcss/types/config";
    const flattenColorPalette: (colors: Record<string, Color>) => Record<string, string>;
    export default flattenColorPalette;
  }
  