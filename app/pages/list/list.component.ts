import { Component, ElementRef, NgZone, OnInit, ViewChild } from "@angular/core";
import { TextField } from "ui/text-field";

import { Grocery } from "../../shared/grocery/grocery";
import { GroceryListService } from "../../shared/grocery/grocery-list.service";

import * as SocialShare from "nativescript-social-share";

@Component({
  selector: "list",
  moduleId: module.id,
  templateUrl: "./list.html",
  styleUrls: ["./list-common.css", "./list.css"],
  providers: [GroceryListService]
})
export class ListComponent implements OnInit {
  
  groceryList: Array<Grocery> = [];
  grocery: string = "";

  @ViewChild("groceryTextField") groceryTextField: ElementRef;

  isLoading:  boolean = true;
  listLoaded: boolean = false;

  constructor(private _groceryListService: GroceryListService,
              private zone:                NgZone) {}

  ngOnInit():void {
    this.isLoading = true;
    this._groceryListService.load()
      .subscribe(loadedGroceries => {
        loadedGroceries.forEach((groceryObject) => {
          this.groceryList.unshift(groceryObject);
        });
        this.isLoading = false;
        this.listLoaded = true;
      });
  }

  add():void {
    if(this.grocery.trim() === "") {
      alert("Enter a grocery item");
      return;
    }

    let textField = <TextField>this.groceryTextField.nativeElement;
    textField.dismissSoftInput();

    this._groceryListService.add(this.grocery)
      .subscribe(
        groceryObject => {
          this.groceryList.unshift(groceryObject);
          this.grocery = "";
        },
        () => {
          alert({
            message: "An error occurred while adding an item to your list.",
            okButtonText: "OK"
          });
          this.grocery = "";
        }
      )
  }

  delete(grocery: Grocery) {
    this._groceryListService.delete(grocery.id)
      .subscribe(() => {
        // Running the array splice in a zone ensures that change detection gets triggered.
        this.zone.run(() => {
          let index = this.groceryList.indexOf(grocery);
          this.groceryList.splice(index, 1);
        });
      });
  }

  share():void {
    let listString = this.groceryList
      .map(grocery => grocery.name)
      .join(", ")
      .trim();
    SocialShare.shareText(listString);    
  }

  
}