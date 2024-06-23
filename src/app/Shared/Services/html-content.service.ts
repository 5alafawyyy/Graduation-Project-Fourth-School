import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HtmlContentService {
  private htmlTemplateSubject: BehaviorSubject<TemplateRef<any> | null> =
    new BehaviorSubject<TemplateRef<any> | null>(null);

  setHtmlTemplate(template: TemplateRef<any> | null): void {
    this.htmlTemplateSubject.next(template);
  }

  getHtmlTemplate(): Observable<TemplateRef<any> | null> {
    return this.htmlTemplateSubject.asObservable();
  }
}
