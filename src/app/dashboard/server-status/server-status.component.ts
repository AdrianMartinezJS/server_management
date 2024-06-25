import { Component, OnDestroy, OnInit, effect, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private interval?: ReturnType<typeof setInterval>;

  constructor() {
    effect(() => {
      // Set a subscription
      console.log('server status', this.currentStatus());
    });
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      const ramdom = Math.random();
      if (ramdom < 0.4) {
        this.currentStatus.set('online');
      } else if (ramdom < 0.7) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
