import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'property-filter',
  templateUrl: './property-filter.component.html',
  styleUrls: ['./property-filter.component.css']
})

export class PropertyFilterComponent implements OnInit {
    
  listingType: string[] = ["buy", "rent", "share"];
    
  typeHome: string = "bay";

 
  constructor() { }
    
    
    @Output() submitForm = new EventEmitter();

    filter (typeHome) {
        this.submitForm.emit(typeHome);
        //console.log(typeHome);
    }
    
  ngOnInit() {
  }

}
