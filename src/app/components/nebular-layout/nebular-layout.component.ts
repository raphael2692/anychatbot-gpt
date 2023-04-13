import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbSidebarService } from '@nebular/theme';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-nebular-layout',
  templateUrl: './nebular-layout.component.html',
  styleUrls: ['./nebular-layout.component.scss']
})
export class NebularLayoutComponent implements OnInit {

  isCollapsed = false;
  isAcceptAndDismiss = false;

  constructor(private sidebarService: NbSidebarService, 
    private localStorageService: LocalStorageService,
    private router:Router) { }

  ngOnInit(): void {

    this.sidebarService.expand('left')
    this.isAcceptAndDismiss = this.localStorageService.isValid('termsAccepted')
  }


  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

  onAcceptAndDismiss() {
    this.isAcceptAndDismiss = true
    this.localStorageService.addItem("termsAccepted", "accepted")
  }
  // toggle() {

  //   this.sidebarService.collapse('left');
  //   this.isCollapsed = !this.isCollapsed
  // }
  goLanding(){
    this.router.navigate(["/landing"])
  }
}
