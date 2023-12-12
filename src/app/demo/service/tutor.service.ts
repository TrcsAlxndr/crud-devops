import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tutor } from '../api/tutor.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})

export class TutorService {

    private basePath = "tutor"

    constructor(private db: AngularFireDatabase) { }

    
}
