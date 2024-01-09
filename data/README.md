# Data

Following structure for hardcoded data must be followed

1. The relevant `identifier name` (navigation, projects, etc.) in camelCase + `_data`

```ts
export const relevantIdentifier_data = {};
```

2. A `type` must be declared or used alongside the exported data

```ts
export type T_PetsData = string[];
export const pets_data: T_PetsData = ["Odin", "Kira"];
```

3. No default exports
