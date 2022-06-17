export interface ITodo {
  id: number;
  description: string;
  category: ICategory;
  lastModified: Date;
}

export interface ICategory {
  id: number;
  name: string;
  color: string;
}
