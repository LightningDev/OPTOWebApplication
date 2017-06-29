import {Component, Input, Output, EventEmitter} from '@angular/core';

import 'style-loader!./baMenuItem.scss';

@Component({
  selector: 'ba-menu-item',
  templateUrl: './baMenuItem.html'
})
export class BaMenuItem {

  @Input() menuItem:any;
  @Input() child:boolean = false;
  

  @Output() itemHover = new EventEmitter<any>();
  @Output() toggleSubMenu = new EventEmitter<any>();
  @Output() hideMenuItem = new EventEmitter<any>();

  public onHoverItem($event):void {
    this.itemHover.emit($event);
  }

  public onToggleSubMenu($event, item):boolean {
    $event.item = item;
    this.toggleSubMenu.emit($event);
    return false;
  }

  public collaspedMenu($event):void{
    this.hideMenuItem.emit($event);
  }
}
