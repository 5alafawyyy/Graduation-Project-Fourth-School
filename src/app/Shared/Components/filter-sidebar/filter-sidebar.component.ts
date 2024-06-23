import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.sass'],
})
export class FilterSidebarComponent implements OnInit, OnDestroy {
  //#region Fields
  @Input() showFilter = false;
  @Output() showFilterChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Input() filterContent: TemplateRef<any> | undefined;
  //#endregion
  constructor() {}
  ngOnInit(): void {}
  setBodyOverflow(value: string) {
    document.body.style.overflow = value;
  }
  ngOnDestroy(): void {}
}
