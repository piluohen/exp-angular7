import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share/share.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  declarations: [HomeComponent, TreeComponent],
  imports: [ShareModule, HomeRoutingModule]
})
export class HomeModule {}
