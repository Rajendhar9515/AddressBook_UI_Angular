import { Component, OnInit } from '@angular/core';
import { AddressBookService } from 'src/app/Service/address-book.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  citys = ['karimnagar', 'jagithal', 'Worangal'];
  states = ['Telangana', 'Mumbai', 'Chennai', 'Dheli'];

  id: number = 0;

  addressData = new FormGroup({
    fullName: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    zip: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(
    private service: AddressBookService,
    private route: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.findData();
  }

  saveData() {
    if (!this.id) {
      this.service.saveAddressBook(this.addressData.value).subscribe((data) => {
        this.route.navigateByUrl('/dashBoard');
      });
    } else {
      this.service
        .updateData(this.id, this.addressData.value)
        .subscribe((data) => {
          this.route.navigateByUrl('/dashBoard');
        });
    }
  }

  findData() {
    if (!this.id) return;
    this.service.findById(this.id).subscribe((data) => {
      const { fullName, city, state, zip, phoneNumber, address } = data.data;

      this.addressData = new FormGroup({
        fullName: new FormControl(fullName),
        city: new FormControl(city),
        state: new FormControl(state),
        country: new FormControl(''),
        zip: new FormControl(zip),
        phoneNumber: new FormControl(phoneNumber),
        email: new FormControl(''),
        address: new FormControl(address),
      });
    });
  }
}
