import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { AuthService } from '@core/services/auth.service';


@Directive({ selector: '[appShowAuthed]' })
export class ShowAuthedDirective implements OnInit {
  condition: boolean;

  @Input() set appShowAuthed(condition: boolean) {
    this.condition = condition;
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private auth: AuthService,
    private viewContainer: ViewContainerRef
  ) {
  }

  ngOnInit() {
    this.auth.isAuthenticated.subscribe(
      (isAuthenticated) => {
        this.viewContainer.remove();
        if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        }
      }
    );
  }
}
