import { catchError, throwError } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersListService } from 'src/app/services/users-list.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  userId: number | undefined;
  user: any

  constructor(private route: ActivatedRoute, private usersListService: UsersListService,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = Number(params.get('id'));
      this.usersListService.getUserById(this.userId)
      .pipe(
        catchError(error => {
        alert({'ინფორმაციის წამოღებისას მოხდა შეცდომა:': error});
          return throwError('ინფორმაციის წამოღებისას მოხდა შეცდომა, გთხოვთ სცადოთ თავიდან.');
        })
      )
      .subscribe(user => {
        this.user = user;
      });
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
