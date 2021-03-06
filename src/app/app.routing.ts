import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {PageEditComponent} from './components/page/page-edit/page-edit.component';
import {PageListComponent} from './components/page/page-list/page-list.component';
import {PageNewComponent} from './components/page/page-new/page-new.component';
import {WebsiteEditComponent} from './components/website/website-edit/website-edit.component';
import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {WebsiteNewComponent} from './components/website/website-new/website-new.component';
import {WidgetChooserComponent} from './components/widget/widget-chooser/widget-chooser.component';
import {WidgetListComponent} from './components/widget/widget-list/widget-list.component';
import {WidgetHeaderComponent} from './components/widget/widget-edit/widget-header/widget-header.component';
import {WidgetImageComponent} from './components/widget/widget-edit/widget-image/widget-image.component';
import {WidgetYoutubeComponent} from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import {WidgetEditComponent} from './components/widget/widget-edit/widget-edit.component';
// Import all other components here
const APP_ROUTES: Routes = [
{ path : '', component : LoginComponent},
{ path : 'login' , component: LoginComponent},
{ path : 'register' , component: RegisterComponent },
// as we're not implementing server, let's fix :userId etc
{ path : 'user/:userId' , component: ProfileComponent},
{ path : 'user/:userId/website' , component: WebsiteListComponent},
{ path : 'user/:userId/website/new' , component: WebsiteNewComponent},
{ path : 'user/:userId/website/:websiteId' , component: WebsiteEditComponent},
{ path : 'user/:userId/website/:websiteId/page' , component: PageListComponent},
{ path : 'user/:userId/website/:websiteId/page/new' , component: PageNewComponent},
{ path : 'user/:userId/website/:websiteId/page/:pageId' , component: PageEditComponent},
{ path : 'user/:userId/website/:websiteId/page/:pageId/widget' , component: WidgetListComponent},
{ path : 'user/:userId/website/:websiteId/page/:pageId/widget/new' , component: WidgetChooserComponent},
{ path : 'user/:userId/website/:websiteId/page/:pageId/widget/:widgetId' , component: WidgetEditComponent},
{ path : 'user/:userId/website/:websiteId/page/:pageId/widget/:widgetId/heading' , component: WidgetHeaderComponent},
{ path : 'user/:userId/website/:websiteId/page/:pageId/widget/:widgetId/image' , component: WidgetImageComponent},
{ path : 'user/:userId/website/:websiteId/page/:pageId/widget/:widgetId/youtube' , component: WidgetYoutubeComponent},
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);