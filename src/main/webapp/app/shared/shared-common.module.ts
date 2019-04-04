import { NgModule } from '@angular/core';

import { PiloteSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [PiloteSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [PiloteSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class PiloteSharedCommonModule {}
