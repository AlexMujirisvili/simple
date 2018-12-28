import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/NewsService';
import { New } from '../models/New';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private newsService: NewsService) { }


  news: New[];

  ngOnInit() {
    this.get();
  }

  get(): void {
    this.news = [];
    this.newsService.get().subscribe(news => this.news = news);
  }

  edit(): void{
    alert("მოცემული სერვისი დროებით მიუწვდომელია")
  }

  add(): void{
    alert("მოცემული სერვისი დროებით მიუწვდომელია")
  }

}
