import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
import { BookCardComponent } from '../components/book-card/book-card.component';
import { LibroService } from '../services/libro.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
    private readonly userService = inject(LibroService)
    books: any[] = [];
    ngOnInit() {
    this.userService.getBooks().subscribe(data => console.log(this.books = data)); 
    }
}
