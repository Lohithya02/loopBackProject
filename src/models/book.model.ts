import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Author} from './author.model';
import {Category} from './category.model';
//import {validate} from '@loopback/validation';

@model()
export class Book extends Entity {
  @property({
    type: 'string', 
    id: true,
    generated: true, 
  })
  id: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema:{
      minLength:1,
    }
    //id: true,
    //generated: true
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'date',
    required: true,
  })
  publicationDate: string;

  @property({
    type: 'number',
    required: true,
    minimum:0,
  })
  price: number;

  @belongsTo(() => Author)
  authorId: number;

  @belongsTo(() => Category)
  categoryId: string;

  constructor(data?: Partial<Book>) {
    super(data);
  }
}

export interface BookRelations {
  // describe navigational properties here
}

export type BookWithRelations = Book & BookRelations;
