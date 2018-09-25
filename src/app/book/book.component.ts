import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe(
        (books: any[]) => {
          this.books = books['content'];
        },
        (error) => console.log(error)
      );
  }
}