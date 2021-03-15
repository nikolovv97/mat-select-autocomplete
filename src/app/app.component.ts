import { SelectAutocompleteComponent } from "select-autocomplete";
import { Component, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild(SelectAutocompleteComponent)
  multiSelect: SelectAutocompleteComponent;

  options = [
    {
      label: "One",
      data: "1"
    },
    {
      label: "Two",
      data: "2"
    },
    {
      label: "Three",
      data: "3"
    },
    {
      label: "Four",
      data: "4"
    },
    {
      label: "Five",
      data: "5"
    },
    {
      label: "Six",
      data: "6"
    }
  ];

  filterButtons = [
    {name: "VM", filterCallback: function(key, value): boolean{ return ['One', 'Two'].indexOf(value) != -1 }},
    {name: "Location", filterCallback: function(key, value): boolean{ return ['Three', 'Four'].indexOf(value) != -1 }},
    {name: "All", filterCallback: function(key, value): boolean{ return true}},
    {name: "Nqkuv longer text", filterCallback: function(key, value): boolean{ return ['Five', 'Six'].indexOf(value) != -1 }}

  ]
  selectedOptions = ["1", "2", "3"];
  selected = this.selectedOptions;
  showError = false;
  errorMessage = "";

  constructor() {}

  onToggleDropdown() {
    this.multiSelect.toggleDropdown();
  }

  resetAll() {
    this.selectedOptions = [];
  }

  getSelectedOptions(selected) {
    console.log(selected);
    this.selected = selected;
  }

  onValidate() {
    this.showError = !this.showError;
    this.errorMessage = "This field is required";
  }
}
