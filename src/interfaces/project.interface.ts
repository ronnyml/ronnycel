export interface Project {
    title: string;
    description: string;
    image: string;
    github: string;
    url: string;
}

export interface ProjectCategory {
    [key: string]: Project[];
}