import { trigger, transition, style, animate, state } from '@angular/animations';

export const Fading = trigger('window', [
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(10px)',
      }),
      animate(100, style({
        opacity: 1,
        transform: 'translateY(0)',
      }))
    ]),
    transition(':leave', [
      style({
        opacity: 1,
        transform: 'translateY(0)',
      }),
      animate(100, style({
        opacity: 0,
        transform: 'translateY(-10px)',
      }))
    ])
  ])