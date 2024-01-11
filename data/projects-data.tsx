import { T_Icon, T_Image } from "@/lib/types";

export type T_TechnologyCategory = "frontend" | "backend" | "design" | "marketing" | "other";

export type T_Technology = {
    name: string;
    description: string;
    category: T_TechnologyCategory;
    icon: T_Icon;
};

export type T_ProjectDataCard = {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    thumbnail: T_Image;
    thumbnail2: T_Image;
    client: string;
    clientLogo: T_Image;
};

export type T_ProjectData = T_ProjectDataCard & {
    scope: string;
    strategy: string;
    execution: string;
    results: string;
    images: T_Image[];
    technologies: T_Technology[];
    link?: string;
    github?: string;
};

export type T_ProjectFilter = {
    name: string;
    callback: () => void;
};

export type T_ProjectsPageData = {
    title: string;
    description: string;
    projectsSlider: T_Image[];
    filters: T_ProjectFilter[];
    projects: T_ProjectDataCard[];
};
