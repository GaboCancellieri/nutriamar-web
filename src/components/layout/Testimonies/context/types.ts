export interface ITestimony {
  id?: string;
  name: string;
  lastName?: string;
  age: string;
  comment: string;
  imageURL: string;
}

export interface ITestimoniesState {
  isEditingTestimony: boolean;
  selectedTestimony: ITestimony | null;
  testimoniesInfoAux: ITestimony[] | null;
  testimoniesInfo: ITestimony[] | null;
}
