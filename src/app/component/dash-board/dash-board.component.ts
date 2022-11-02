import { Component, OnInit } from '@angular/core';
import { AddressBookService } from 'src/app/Service/address-book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
})
export class DashBoardComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'Zip',
    'Number',
    'Action',
  ];

  ELEMENT_DATA = [
    {
      position: 'Raj',
      name: '1-2',
      weight: 'korutla',
      symbol: 'telangana',
      Zip: 505326,
      Number: 123456,
      Action: '',
    },
  ];
  dataSource: any;
  constructor(private service: AddressBookService, private router: Router) {}

  ngOnInit(): void {
    this.getAddressBook();
  }

  getAddressBook() {
    this.service.getAddressBookData().subscribe((data) => {
      console.log(data);
      this.dataSource = data.data;
      console.log(this.dataSource);
    });
  }

  removeData(id: number) {
    this.service.deleteData(id).subscribe(() => {
      this.getAddressBook();
    });
  }

  onUpdate(id: number) {
    this.router.navigate(['/edit', id]);
  }
}
