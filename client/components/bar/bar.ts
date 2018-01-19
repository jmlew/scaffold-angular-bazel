import {Component, OnInit} from '@angular/core';

import {BazService} from '../../services/baz/baz';

/**
 * Component providing an example of a root-level page which contains no child
 * components and accesses a shared service to provide data to the view. This
 * component is loaded via the router and so does not include a selector.
 */
@Component({
  moduleId: module.id,
  templateUrl: './bar.ng.html',
  styleUrls: ['./bar.css'],
})
export class Bar implements OnInit {
  /** The app name provides an example of retrieving data from a service. */
  appName: string;

  constructor(private readonly bazService: BazService) {}

  /**
   * Initializes the component before data-bound properties have been set.
   */
  init() {
    this.appName = this.bazService.getName();
  }

  /**
   * Initializes the component after data-bound properties have been set.
   */
  ngOnInit() {}
}
