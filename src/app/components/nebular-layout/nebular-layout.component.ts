import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-nebular-layout',
  templateUrl: './nebular-layout.component.html',
  styleUrls: ['./nebular-layout.component.scss']
})
export class NebularLayoutComponent implements OnInit {

  isCollapsed = false;
  isAcceptAndDismiss = true;

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit(): void {

    this.sidebarService.expand('left')
  }


  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

  onAcceptAndDismiss() {
    this.isAcceptAndDismiss = false
  }
  // toggle() {

  //   this.sidebarService.collapse('left');
  //   this.isCollapsed = !this.isCollapsed
  // }
}
