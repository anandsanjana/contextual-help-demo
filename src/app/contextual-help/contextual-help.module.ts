import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomMaterialModule } from './../custom-material/custom-material.module';
import { ContextualHelpComponent } from './contextual-help/contextual-help.component';
import { HelpDataService } from './help-data.service';

@NgModule({
  declarations: [ContextualHelpComponent],
  entryComponents:[ContextualHelpComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [
  	ContextualHelpComponent
  ],
  providers: [HelpDataService],
})
export class ContextualHelpModule { }
