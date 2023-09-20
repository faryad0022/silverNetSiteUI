import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SocialDTO } from 'src/app/_core/data/social/socialDTO';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() socials:SocialDTO[];
  constructor() { }

  ngOnInit() {
  }

}
