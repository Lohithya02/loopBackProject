import {Entity, model, property} from '@loopback/repository';

@model()
export class Category extends Entity {
  @property({
    type: 'number', // or 'string' depending on your database setup
    id: true,
    generated: true, // Set to `true` if the ID should be auto-generated
  })
  id: number;
  
  @property({
    type: 'string',
    required: true,
    id: true,
    generated: true
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;


  constructor(data?: Partial<Category>) {
    super(data);
  }
}

export interface CategoryRelations {
  // describe navigational properties here
}

export type CategoryWithRelations = Category & CategoryRelations;
