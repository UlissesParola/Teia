import { NgModule } from "@angular/core";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list"
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';


//export { MatSidenavModule } from "@angular/material/sidenav";

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatMenuModule,
        MatListModule,
        MatGridListModule,
        MatSnackBarModule,
        MatDialogModule,
        MatButtonModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatMenuModule,
        MatListModule,
        MatGridListModule,
        MatSnackBarModule,
        MatDialogModule,
        MatButtonModule
    ]
})

export class MaterialModule {}