import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Book, BookRelations, Author, Category} from '../models';
import {AuthorRepository} from './author.repository';
import {CategoryRepository} from './category.repository';
import { stringify } from 'querystring';

export class BookRepository extends DefaultCrudRepository<
  Book,
  //typeof Book.prototype.bookId,
  //@param.path.number('id') id: string,
  BookRelations
> {

  

  public readonly author: BelongsToAccessor<Author, typeof Book.prototype.id>;

  public readonly category: BelongsToAccessor<Category, typeof Book.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('AuthorRepository') protected authorRepositoryGetter: Getter<AuthorRepository>, @repository.getter('CategoryRepository') protected categoryRepositoryGetter: Getter<CategoryRepository>,
  ) {
    super(Book, dataSource);
    this.category = this.createBelongsToAccessorFor('category', categoryRepositoryGetter,);
    this.author = this.createBelongsToAccessorFor('author', authorRepositoryGetter,);
  }
}
