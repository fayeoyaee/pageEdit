import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



// My components
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RegisterComponent } from './user/register/register.component';
import { WebsiteNewComponent } from './website/website-new/website-new.component';
import { WebsiteEditComponent } from './website/website-edit/website-edit.component';
import { WebsiteListComponent } from './website/website-list/website-list.component';
import { PageNewComponent } from './page/page-new/page-new.component';
import { PageEditComponent } from './page/page-edit/page-edit.component';
import { PageListComponent } from './page/page-list/page-list.component';
import { WidgetChooserComponent } from './widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './widget/widget-list/widget-list.component';
import { WidgetHeaderComponent } from './widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './widget/widget-edit/widget-youtube/widget-youtube.component';

// import routing
import { Routing } from './app.routing';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    PageNewComponent,
    PageEditComponent,
    PageListComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetListComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }