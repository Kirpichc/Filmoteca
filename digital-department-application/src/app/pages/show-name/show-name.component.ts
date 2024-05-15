import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-name',
  templateUrl: './show-name.component.html',
  styleUrls: ['./show-name.component.css']
})
export class ShowNameComponent {

  name = "Имя по умолчанию";

  constructor(private activateRouter: ActivatedRoute,
              private router: Router) {
    this.name = activateRouter.snapshot.params['name'];
  }

  goMain(): void {
  //    /proverka вставить надо вместо слеша шоб нотфаунд перешло вместо пейдж 1
    this.router.navigateByUrl('/');
  }
}
