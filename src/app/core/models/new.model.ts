export interface NewModel{

    id: string;
    name: string;
    slug: string ;
    content: string;
    user_id: string;
    category_id: string;
    image: string;
    created_at: Date;
}

export interface NewsState {
        success: boolean;
        data:ReadonlyArray<NewModel>
}