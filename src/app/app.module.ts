import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { DiagramAllModule, SymbolPaletteAllModule } from '@syncfusion/ej2-angular-diagrams';
import { ContextMenuModule, ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { DialogModule, TooltipModule } from '@syncfusion/ej2-angular-popups';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { DropDownListModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule, RadioButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { NumericTextBoxModule, SliderModule, UploaderModule, ColorPickerModule } from '@syncfusion/ej2-angular-inputs';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AccesskeySecretkeyComponent } from './accesskey-secretkey/accesskey-secretkey.component';


@NgModule({
    imports: [
        FormsModule, DiagramAllModule, SymbolPaletteAllModule, ListViewModule,
        NumericTextBoxModule, DropDownButtonModule, ContextMenuModule, SliderModule,
        ToolbarModule, DropDownListModule, ButtonModule, RadioButtonModule, UploaderModule,HttpClientModule,
        DialogModule, CheckBoxModule, MultiSelectAllModule, TooltipModule, ColorPickerModule, BrowserModule, AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        AccesskeySecretkeyComponent,

    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}