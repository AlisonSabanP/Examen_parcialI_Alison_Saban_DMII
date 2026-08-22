import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Libro } from "../models/libro.model";

    @Injectable (
        {providedIn: 'root'}
    )

export class LibroService {
    private readonly http = inject(HttpClient)
    private readonly apiUrl = 
    "https://openlibrary.org/search.json?q=programming&fields=key,title,author_name,first_publish_year,cover_i,edition_count,language,subject&limit=20"

    getBooks(): Observable<Libro[]> {
        return this.http.get<Libro[]>(this.apiUrl)
    }  
}
