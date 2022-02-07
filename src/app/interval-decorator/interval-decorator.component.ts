import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AutoUnsubscribe } from '../unsubscribe.decorator';

@Component({
  selector: 'app-interval-decorator',
  templateUrl: './interval-decorator.component.html',
})
export class IntervalDecoratorComponent implements OnInit {
  @AutoUnsubscribe()
  $observable: Observable<unknown> | undefined;

  ngOnInit(): void {
    console.log('HI');
    this.$observable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.$observable.subscribe(
      (data: unknown) => console.log('Observable data', data),
      (error: unknown) => console.log('Observable error', error),
      () => console.log('Observable complete')
    );
  }
}
