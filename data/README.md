# Data

Following structure for hardcoded data must be followed

1. The relevant `identifier name` (navigation, projects, etc.) in camelCase + `_data`

```ts
export const relevantIdentifier_data = {};
```

2. An existing type must be used or a new `type` must be declared alongside the exported data

```ts
export type T_PetsData = string[];
export const pets_data: T_PetsData = ["Odin", "Kira"];
```

3. No default exports
