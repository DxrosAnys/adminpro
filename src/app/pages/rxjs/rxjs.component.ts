import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscriber, Subscription} from 'rxjs';
import {filter, map, retry} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  constructor() {
    // this.regresaObservable().pipe(
    //   retry(2)
    // )
    this.subscription = this.regresaObservable().subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error en el obs', error),
      () => console.log('El observador ha terminado!')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {
      let contador = 0;
      const intervalo = setInterval( () => {
        contador += 1;

        const salida  = {
          valor: contador
        };

        observer.next(salida);
       /* if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }*/
        // if (contador === 2) {
        //   // clearInterval(intervalo);
        //   observer.error('Auxilio');
        // }
      }, 1000);
    }).pipe(
      map( resp => resp.valor),
      filter((valor, index) => {
        if ( (valor % 2) === 1 ) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
