import { Z_Image, Z_Link } from "@/lib/types";
import { z } from "zod";

export const Z_HeroData = z.object({
    title: z.string(),
    subtitle: z.string(),
    valueProposition: z.string(),
    image: Z_Image,
    ctaBtn: Z_Link,
    floatingIcons: z.array(Z_Image),
});

export type T_HomeData = z.infer<typeof Z_HeroData>;
