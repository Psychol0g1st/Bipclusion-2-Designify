import { Injectable, inject, signal } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable, from } from 'rxjs';
import { WisdomInterface } from 'src/interfaces/wisdom.interface';

@Injectable({
  providedIn: 'root',
})
export class WisdomService {
  firestore = inject(Firestore);
  wisdomsSignal = signal<WisdomInterface[] | null | undefined>(undefined);

  getWisdoms(): Observable<any> {
    const ref = collection(this.firestore, `wisdoms`);
    const promise = collectionData(ref);
    return from(promise);
  }
}
