import { NgModule } from "@angular/core";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list"
import { MatSnackBarModule } from '@angular/material/snack-bar';

//export { MatSidenavModule } from "@angular/material/sidenav";

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatMenuModule,
        MatListModule,
        MatGridListModule,
        MatSnackBarModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatMenuModule,
        MatListModule,
        MatGridListModule,
        MatSnackBarModule
    ]
})

export class MaterialModule {}