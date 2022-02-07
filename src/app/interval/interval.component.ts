import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {UnsubscriberService} from 'src/app/unsubscriber.service';


@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  providers: [UnsubscriberService],
})
export class IntervalComponent implements OnInit {
  $observable: Observable<unknown> | undefined;

  constructor(readonly unsubscribe: UnsubscriberService) {}

  ngOnInit(): void {
    console.log('HI');
    this.$observable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });
    this.$observable.pipe(this.unsubscribe.takeUntilDestroy).subscribe(
      (data: unknown) => console.log('Observable data', data),
      (error: unknown) => console.log('Observable error', error),
      () => console.log('Observable complete')
    );
  }
}
