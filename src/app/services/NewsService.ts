import { Injectable, OnInit } from '@angular/core';
import { New } from '../models/New';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService implements OnInit {


  /**
   *
   */
  constructor() {
    this.news.push(new New(new Date('2016-01-17'), 'First app', 'At this time first app was created'));
    this.news.push(new New(new Date('2016-02-17'), 'Second app', 'At this time second app was created'));
  }
  private news: New[] = [];

  ngOnInit(): void {

  }

  get(): Observable<New[]> {
    return of(this.news);
  }

  add(date: Date, header: string, body: string): void {
    this.news.push(new New(date, header, body));
  }

}
