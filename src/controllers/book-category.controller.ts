import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Book,
  Category,
} from '../models';
import {BookRepository} from '../repositories';

export class BookCategoryController {
  constructor(
    @repository(BookRepository)
    public bookRepository: BookRepository,
  ) { }

  @get('/books/{id}/category', {
    responses: {
      '200': {
        description: 'Category belonging to Book',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Category),
          },
        },
      },
    },
  })
  async getCategory(
    //@param.path.number('id') id: typeof Book.prototype.id,
    @param.path.number('id') id: string,

  ): Promise<Category> {
    return this.bookRepository.category(id);
  }
}
