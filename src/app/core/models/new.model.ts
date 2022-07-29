export interface NewModel{

    id: string;
    name: string;
    slug: string ;
    content: string;
    user_id: string;
    category_id: string;
    image: string;
}

export interface NewsState {
        news:ReadonlyArray<NewModel>
}