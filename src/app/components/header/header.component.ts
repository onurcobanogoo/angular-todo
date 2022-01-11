import {Component, OnInit} from '@angular/core';
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";
import {Router, Event, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Angular Test App';
  showAddTask!: boolean;
  subscription!: Subscription;
  currentRoute: string;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);

    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;

        if (this.currentRoute === "/" && this.showAddTask) {
          this.addTask();
        }
      }
    });
  }

  ngOnInit(): void {
  }

  addTask() {
    this.uiService.toggleAddTask()
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
