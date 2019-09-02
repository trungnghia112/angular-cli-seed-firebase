import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { WCountriesService } from './w-countries.service';
import { WCountriesComponent } from './w-countries.component';

@NgModule({
  imports: [CommonModule, FormsModule, DropdownModule],
  declarations: [WCountriesComponent],
  exports: [WCountriesComponent],
  providers: [WCountriesService]
})
export class WCountriesModule {
}
