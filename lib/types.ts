import { z } from "zod";

export const Z_Link = z.object({
    label: z.string(),
    link: z.string(),
});

export type T_Link = z.infer<typeof Z_Link>;

export const Z_Image = z.object({
    url: z.string(),
    alt: z.string(),
});

export type T_Image = z.infer<typeof Z_Image>;
