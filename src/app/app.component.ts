import {Component, inject, InjectionToken} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatError, MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {AuthService} from "./services/auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {CommonModule} from "@angular/common";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet, MatLabel, MatFormField, ReactiveFormsModule, MatHint, MatInput, MatError, MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PLMS';

  http= inject(HttpClient);


}
