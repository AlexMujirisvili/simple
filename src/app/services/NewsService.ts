import { Injectable } from '@angular/core';
import { New } from '../models/New';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NewsService{


     private news: New[] = [];

     get(): Observable<New[]>{

        this.news.push(new New(new Date("2016-01-17"), "First app", "At this time first app was created"));
        this.news.push(new New(new Date("2016-02-17"), "First app", "At this time second app was created"));

        return of(this.news);
     }

}
