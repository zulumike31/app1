import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WinthebetSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [WinthebetSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [WinthebetSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WinthebetSharedModule {
  static forRoot() {
    return {
      ngModule: WinthebetSharedModule
    };
  }
}
