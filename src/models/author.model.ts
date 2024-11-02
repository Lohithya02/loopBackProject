import {Entity, model, property} from '@loopback/repository';

@model()
export class Author extends Entity {
  @property({
    type: 'string', 
    id: true,
    generated: true, 
  })
  id: string;

  @property({
    type: 'string',
    required:true,
    jsonSchema:{
      minLength:1,
    }
    //id: true,
    //generated: true,
  })
  name?: string;

  @property({
    type: 'string',
    required: true,
  })
  bio: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;


  constructor(data?: Partial<Author>) {
    super(data);
  }
}

export interface AuthorRelations {
  // describe navigational properties here
}

export type AuthorWithRelations = Author & AuthorRelations;
