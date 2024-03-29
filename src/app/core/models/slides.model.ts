export interface Slides {
  id: number;
  name: string;
  description: string;
  image: string;
  order: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface SlideState {
  loading: boolean;
  loadingOneSlide: boolean;
  sliders: Slides[];
  one_slider: Slides
}

