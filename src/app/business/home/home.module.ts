import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share/share.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { TreeComponent } from './tree/tree.component';
import { FengmapComponent } from './fengmap/fengmap.component';
// import { HnTreeModule } from 'hn-ui/hn-tree';

@NgModule({
  declarations: [HomeComponent, TreeComponent, FengmapComponent],
  imports: [ShareModule, HomeRoutingModule]
})
export class HomeModule {}
