export type T_PriceCalcItemCheckbox = {
    type: "checkbox";
};

export type T_PriceCalcItemNumber = {
    type: "number";
    min: number;
    max: number;
};

export type T_PriceCalcItemOption = {
    type: "option";
    options: {
        name: string;
        price: number;
    }[];
};

/**
 * The type of the price calculator item.
 * @example
 * {
 *      name: "Item name",
 *      price: 100,
 *      mandatory: true,
 *      type: "checkbox"
 * } or {
 *      name: "Item name",
 *      price: 100,
 *      mandatory: true,
 *      type: "number",
 *      min: 1,
 *      max: 10
 * } or {
 *      name: "Item name",
 *      price: 100,
 *      mandatory: true,
 *      type: "option",
 *      options: [
 *           { name: "Option name", price: 100 },
 *           { name: "Option name", price: 100 }
 *      ]
 * }
 *
 */
export type T_PriceCalcItem = {
    name: string;
    price: number;
    mandatory?: boolean;
} & (T_PriceCalcItemCheckbox | T_PriceCalcItemNumber | T_PriceCalcItemOption);

export type T_PriceCalculatorProps = {
    title: string;
    description: string;
    items: T_PriceCalcItem[];
};
