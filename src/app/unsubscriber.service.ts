import {Injectable, OnDestroy} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class UnsubscriberService implements OnDestroy {
  public readonly destroy$ = new Subject<void>()

  public readonly takeUntilDestroy = <T>(origin: Observable<T>): Observable<T> => origin.pipe(takeUntil(this.destroy$))

  public ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
