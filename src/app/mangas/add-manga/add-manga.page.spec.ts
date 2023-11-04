import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMangaPage } from './add-manga.page';

describe('AddMangaPage', () => {
  let component: AddMangaPage;
  let fixture: ComponentFixture<AddMangaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddMangaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
