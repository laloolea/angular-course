import { EventEmitter, Injectable } from "@angular/core";
import {Subject } from 'rxjs';

@Injectable({providedIn:'root'})
export class USerService{
    activatedEmitter = new Subject<boolean>();
}