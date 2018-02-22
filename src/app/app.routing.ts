import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./components/user/login/login.component";
import {RegisterComponent} from "./components/user/register/register.component";
import {ProfileComponent} from "./components/user/profile/profile.component";
import {PageEditComponent} from "./components/page/page-edit/page-edit.component";
import {PageListComponent} from "./components/page/page-list/page-list.component";
import {PageNewComponent} from "./components/page/page-new/page-new.component";
import {WebsiteEditComponent} from "./components/website/website-edit/website-edit.component";
import {WebsiteListComponent} from "./components/website/website-list/website-list.component";
import {WebsiteNewComponent} from "./components/website/website-new/website-new.component";
import {WidgetChooserComponent} from "./components/widget/widget-chooser/widget-chooser.component";
import {WidgetListComponent} from "./components/widget/widget-list/widget-list.component";
import {WidgetHeaderComponent} from "./components/widget/widget-edit/widget-header/widget-header.component";
import {WidgetImageComponent} from "./components/widget/widget-edit/widget-image/widget-image.component";
import {WidgetYoutubeComponent} from "./components/widget/widget-edit/widget-youtube/widget-youtube.component";
import {WidgetEditComponent} from "./components/widget/widget-edit/widget-edit.component";
// Import all other components here
const APP_ROUTES : Routes = [
// { path : '', component : HomeComponent},
{ path : '/login' , component: LoginComponent},
{ path : 'register' , component: RegisterComponent },
{ path : 'user/01' , component: ProfileComponent},
{ path : 'user/01/website' , component: WebsiteListComponent},
{ path : 'user/01/website/new' , component: WebsiteNewComponent},
{ path : 'user/01/website/02' , component: WebsiteEditComponent},
{ path : 'user/01/website/02/page' , component: PageListComponent},
{ path : 'user/01/website/02/page/new' , component: PageNewComponent},
{ path : 'user/01/website/02/page/03' , component: PageEditComponent},
{ path : 'user/01/website/02/page/03/widget' , component: WidgetListComponent},
{ path : 'user/01/website/02/page/03/widget/new' , component: WidgetChooserComponent},
{ path : 'user/01/website/02/page/03/widget/04' , component: WidgetEditComponent},
{ path : 'user/01/website/02/page/03/widget/04/header' , component: WidgetHeaderComponent},
{ path : 'user/01/website/02/page/03/widget/04/image' , component: WidgetImageComponent},
{ path : 'user/01/website/02/page/03/widget/04/youtube' , component: WidgetYoutubeComponent},
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);