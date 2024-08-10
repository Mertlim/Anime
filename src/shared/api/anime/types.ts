export interface ApiAnimeData {
    mal_id: number;
    title: string;
    title_english: string;
    year: number;
    images: {
        jpg: {
            image_url: string;
        };
    };
    episodes: number
}

export interface SimplifiedAnimeData {
    mal_id: number;
    title: string;
    title_english: string;
    year: number;
    image: string;
    episodes: number
}