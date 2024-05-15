import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable, catchError, of } from "rxjs";

export interface Student{
    name: string;
    surname: string;
    group: string;
}

@Injectable({providedIn:'root'})
export class DataService {
    constructor(private http: HttpClient) { }

    getStudents(): Observable<Array<Student>> {
        return this.http.get<Array<Student>>('assets/data.json')  //вот тут у data если написать чота то ошибка будет 
        .pipe(
            catchError(err => {
                console.log(err);
                return of([]);
            })
        )
    }
}