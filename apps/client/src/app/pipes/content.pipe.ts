import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Pipe({
  name: 'content'
})
export class ContentPipe implements PipeTransform {
  private contentUrl = 'assets/content/content.json';
  private contentCache: any = null;

  constructor(private http: HttpClient) {}

  transform(key: string): Observable<string> {
    if (this.contentCache) {
        return of(this.contentCache[key]);
    } else {
      return this.http.get<any>(this.contentUrl).pipe(
        map((contentData) => {
          this.contentCache = contentData;
          return this.contentCache[key];
        }),
        catchError(() => {
          console.error(`Failed to fetch content for key: ${key}`);
          return of('');
        })
      );
    }
  }
}