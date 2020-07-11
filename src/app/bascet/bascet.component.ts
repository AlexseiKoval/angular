import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service'

@Component({
  selector: 'app-bascet',
  templateUrl: './bascet.component.html',
  styleUrls: ['./bascet.component.css']
})
export class BascetComponent implements OnInit {

  ngOnInit(): void {
  }

  closeResult = '';

  constructor(private modalService: NgbModal, public dataService: DataService) { }

  public bascetClear = true
  returnBascet() {
    const bascetLength = this.dataService.bascet.reduce((acum, row) => acum + 1, 0)
    this.bascetClear = !bascetLength
    return `(${bascetLength || "Clear"})`
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
