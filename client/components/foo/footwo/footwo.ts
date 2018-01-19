import {Component, OnInit} from '@angular/core';

/**
 * Component providing an example of a secondary-level page. This component is
 * loaded via the router and so does not include a selector.
 */
@Component({
  moduleId: module.id,
  templateUrl: './footwo.ng.html',
  styleUrls: ['./footwo.css'],
})
export class FooTwo implements OnInit {
  constructor() {
    this.init();
  }

  private init() {}

  /**
   * Initializes the component after data-bound properties have been set.
   */
  ngOnInit() {}
}
