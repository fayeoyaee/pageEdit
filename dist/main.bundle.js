webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// My components
















// My services




// import routing

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_user_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_user_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_page_page_list_page_list_component__["a" /* PageListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_24__app_routing__["a" /* Routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_20__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_21__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_22__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_23__services_widget_service_client__["a" /* WidgetService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
















// Import all other components here
var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    // as we're not implementing server, let's fix :userId etc
    { path: 'user/:userId', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:userId/website', component: __WEBPACK_IMPORTED_MODULE_8__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:userId/website/new', component: __WEBPACK_IMPORTED_MODULE_9__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:userId/website/:websiteId', component: __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:userId/website/:websiteId/page', component: __WEBPACK_IMPORTED_MODULE_5__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:userId/website/:websiteId/page/new', component: __WEBPACK_IMPORTED_MODULE_6__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId', component: __WEBPACK_IMPORTED_MODULE_4__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/new', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/:widgetId', component: __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/:widgetId/header', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/:widgetId/image', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/:widgetId/youtube', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* copy from style.css */\nbody {\n    padding-top: 65px;\n}\n.list-group-item {\n    border: none;\n}\n.thmbnail {\n    position: relative;\n    z-index: 0;\n}\n.icon-header {\n    padding-top: 0%;\n}\n.icon-group {\n    position: absolute;\n    font-size: 20px;\n    top: 0%;\n    right: 0%;\n    z-index: 1;\n    background-color: white;\n}\n.myNavIconLeft {\n    position: absolute;\n    left: 10px;\n}\n.myNavIconRight {\n    position: absolute;\n    right: 10px;\n}\n.myNavIconCenter {\n    position: absolute;\n    left: 40px;\n}\n.myNavIconCenter2 {\n    position: relative;\n    left: 29%;\n}\n.myNavIconCenter3 {\n    position: relative;\n    left: 30%;\n}\n.grid-container {\n    display: grid;\n}\n.text-white {\n    color: white;\n}\n.text-black {\n    color: black;\n}\n.bg-grey {\n    background-color: lightgray;\n}\n/* Portrait */\n@media screen and (orientation:portrait) {\n    /* Portrait styles here */\n    .visibleIfPortrait {\n        visibility: visible;\n    }\n    .visibleIfLandscape {\n        visibility: hidden;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 1;\n        grid-row: 1;\n    }\n}\n/* Landscape */\n@media screen and (orientation:landscape) {\n    /* Landscape styles here */\n    .visibleIfPortrait {\n        visibility: hidden;\n    }\n    .visibleIfLandscape {\n        visibility: visible;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 2 / span 2;\n        grid-row: 1;\n    }\n}\n.myHeader {\n    padding: 0;\n    border: 0;\n    margin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"navbar navbar-fixed-top bg-grey\">\n    <!-- left return to page list -->\n    <a [routerLink]=\"['/user',userId,'website',websiteId,'page']\" class=\"navbar-brand myNavIconLeft text-black\">\n      <span class=\"glyphicon glyphicon-menu-left\"></span>\n    </a>\n    <div class=\"navbar-brand myNavIconCenter text-black\">Edit Page</div>\n    <!-- ok return to page list -->\n    <div class=\"navbar-brand myNavIconRight text-white\">\n      <span class=\"glyphicon glyphicon-ok\" (click)=\"update()\"></span>\n    </div>\n  </div>\n  <form #f=\"ngForm\">\n    <label>Name</label>\n    <input placeholder={{namePh}} name=\"name\" type=\"text\" class=\"form-control\" ngModel required #name=\"ngModel\" />\n    <!-- use local reference to the input field to display a errMsg -->\n    <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n      Please enter name!\n    </span>\n    <label>Description</label>\n    <input placeholder={{descriptionPh}} name=\"description\" type=\"text\" class=\"form-control\" ngModel required #description=\"ngModel\"\n    />\n    <span class=\"help-block\" *ngIf=\"!description.valid && description.touched\">\n      Please enter description!\n    </span>\n\n    <button type=\"button\" class=\"btn btn-block btn-danger\" (click)=\"delete()\">Delete</button>\n  </form>\n\n  <div class=\"navbar navbar-fixed-bottom bg-grey text-black\">\n    <span class=\"glyphicon glyphicon-user\"></span>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, router, activateRoute) {
        this.pageService = pageService;
        this.router = router;
        this.activateRoute = activateRoute;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // retrieves userId as path parameter
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
        });
        // user UserService to retrieve the user instance
        this.pageService.findPageById(this.pageId)
            .subscribe(function (data) {
            var page = data;
            _this.namePh = page['name'];
            _this.descriptionPh = page['description'];
        });
    };
    PageEditComponent.prototype.update = function () {
        var _this = this;
        console.log("hi from web edit");
        var name = this.updateForm.value.name;
        var description = this.updateForm.value.description;
        var newPage = { name: name, description: description };
        for (var _i = 0, _a = Object.keys(newPage); _i < _a.length; _i++) {
            var key = _a[_i];
            if (newPage[key] == "") {
                this.errorFlag = true;
                this.errorMsg = "page info incomplete";
                return;
            }
        }
        this.pageService.updatePage(this.pageId, newPage)
            .subscribe(function (data) {
            console.log("page update succeed");
            _this.router.navigate(["/user", _this.userId, "website", _this.websiteId, "page"]);
        }, function (error) {
            console.log("page update error");
        });
    };
    PageEditComponent.prototype.delete = function () {
        var _this = this;
        console.log("hi from page edit delete");
        this.pageService.deletePage(this.pageId)
            .subscribe(function (data) {
            console.log("page delete succeed");
            _this.router.navigate(["/user", _this.userId, "website", _this.websiteId, "page"]);
        }, function (error) {
            console.log("page delete error");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], PageEditComponent.prototype, "updateForm", void 0);
    PageEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-page-edit',
            template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* copy from style.css */\nbody {\n    padding-top: 65px;\n}\n.list-group-item {\n    border: none;\n}\n.thmbnail {\n    position: relative;\n    z-index: 0;\n}\n.icon-header {\n    padding-top: 0%;\n}\n.icon-group {\n    position: absolute;\n    font-size: 20px;\n    top: 0%;\n    right: 0%;\n    z-index: 1;\n    background-color: white;\n}\n.myNavIconLeft {\n    position: absolute;\n    left: 10px;\n}\n.myNavIconRight {\n    position: absolute;\n    right: 10px;\n}\n.myNavIconCenter {\n    position: absolute;\n    left: 40px;\n}\n.myNavIconCenter2 {\n    position: relative;\n    left: 29%;\n}\n.myNavIconCenter3 {\n    position: relative;\n    left: 30%;\n}\n.grid-container {\n    display: grid;\n}\n.text-white {\n    color: white;\n}\n.text-black {\n    color: black;\n}\n.bg-grey {\n    background-color: lightgray;\n}\n/* Portrait */\n@media screen and (orientation:portrait) {\n    /* Portrait styles here */\n    .visibleIfPortrait {\n        visibility: visible;\n    }\n    .visibleIfLandscape {\n        visibility: hidden;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 1;\n        grid-row: 1;\n    }\n}\n/* Landscape */\n@media screen and (orientation:landscape) {\n    /* Landscape styles here */\n    .visibleIfPortrait {\n        visibility: hidden;\n    }\n    .visibleIfLandscape {\n        visibility: visible;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 2 / span 2;\n        grid-row: 1;\n    }\n}\n.myHeader {\n    padding: 0;\n    border: 0;\n    margin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"navbar navbar-fixed-top bg-grey\">\n    <a [routerLink]=\"['/user',userId,'website']\" class=\"navbar-brand myNavIconLeft text-black\">\n      <span class=\"glyphicon glyphicon-menu-left\"></span>\n    </a>\n    <!-- use page 321 for now -->\n    <a [routerLink]=\"['/user/123/website/456/page/321/widget']\" class=\"navbar-brand myNavIconCenter text-black\">Page</a>\n    <a [routerLink]=\"['/user/123/website/456/page/new']\" class=\"navbar-brand myNavIconRight text-black\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n  </div>\n\n  <ul class=\"list-group bg-white text-primary\" *ngFor=\"let page of pages\">\n    <li class=\"list-group-item\">\n      <a [routerLink]=\"['/user', userId,'website',websiteId,'page', page._id,'widget']\" >{{page.name}}</a>\n      <a [routerLink]=\"['/user',userId,'website',websiteId,'page',page._id]\" >\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>\n  </ul>\n  <div class=\"navbar navbar-fixed-bottom bg-grey text-black\">\n    <a [routerLink]=\"['/user', userId]\" class=\"navbar-brand myNavIconRight\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, activateRoute) {
        this.pageService = pageService;
        this.activateRoute = activateRoute;
        this.pages = [{}];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
        });
        this.pageService.findPagesByWebsiteId(this.websiteId)
            .subscribe(function (data) {
            _this.pages = data;
            console.log(_this.pages);
        });
    };
    PageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-page-list',
            template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* copy from style.css */\nbody {\n    padding-top: 65px;\n}\n.list-group-item {\n    border: none;\n}\n.thmbnail {\n    position: relative;\n    z-index: 0;\n}\n.icon-header {\n    padding-top: 0%;\n}\n.icon-group {\n    position: absolute;\n    font-size: 20px;\n    top: 0%;\n    right: 0%;\n    z-index: 1;\n    background-color: white;\n}\n.myNavIconLeft {\n    position: absolute;\n    left: 10px;\n}\n.myNavIconRight {\n    position: absolute;\n    right: 10px;\n}\n.myNavIconCenter {\n    position: absolute;\n    left: 40px;\n}\n.myNavIconCenter2 {\n    position: relative;\n    left: 29%;\n}\n.myNavIconCenter3 {\n    position: relative;\n    left: 30%;\n}\n.grid-container {\n    display: grid;\n}\n.text-white {\n    color: white;\n}\n.text-black {\n    color: black;\n}\n.bg-grey {\n    background-color: lightgray;\n}\n/* Portrait */\n@media screen and (orientation:portrait) {\n    /* Portrait styles here */\n    .visibleIfPortrait {\n        visibility: visible;\n    }\n    .visibleIfLandscape {\n        visibility: hidden;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 1;\n        grid-row: 1;\n    }\n}\n/* Landscape */\n@media screen and (orientation:landscape) {\n    /* Landscape styles here */\n    .visibleIfPortrait {\n        visibility: hidden;\n    }\n    .visibleIfLandscape {\n        visibility: visible;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 2 / span 2;\n        grid-row: 1;\n    }\n}\n.myHeader {\n    padding: 0;\n    border: 0;\n    margin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"navbar navbar-fixed-top bg-grey\">\n    <!-- return to page list -->\n    <a [routerLink]=\"['/user',userId,'website',websiteId,'page']\" class=\"navbar-brand myNavIconLeft text-black\">\n      <span class=\"glyphicon glyphicon-menu-left\"></span>\n    </a>\n    <div class=\"navbar-brand myNavIconCenter text-black\">New Page</div>\n    <div class=\"navbar-brand myNavIconRight text-white\">\n      <span class=\"glyphicon glyphicon-ok\" (click)=\"create()\"></span>\n    </div>\n </div>\n\n  <form #f=\"ngForm\">\n    <label>Name</label>\n    <input placeholder=\"name\" name=\"name\" type=\"text\" class=\"form-control\" ngModel required #name=\"ngModel\" />\n    <!-- use local reference to the input field to display a errMsg -->\n    <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n      Please enter name!\n    </span>\n    <label>Title</label>\n    <input placeholder=\"title\" name=\"description\" type=\"text\" class=\"form-control\" ngModel required #description=\"ngModel\" />\n    <span class=\"help-block\" *ngIf=\"!description.valid && description.touched\">\n      Please enter description!\n    </span>\n  </form>\n\n  <div class=\"navbar navbar-fixed-bottom bg-grey text-black\">\n    <span class=\"glyphicon glyphicon-user\"></span>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, router, activateRoute) {
        this.pageService = pageService;
        this.router = router;
        this.activateRoute = activateRoute;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // retrieves userId as path parameter
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
        });
    };
    PageNewComponent.prototype.create = function () {
        var _this = this;
        console.log("hi from page new create");
        var name = this.newForm.value.name;
        var description = this.newForm.value.description;
        var newPage = { name: name, description: description };
        for (var _i = 0, _a = Object.keys(newPage); _i < _a.length; _i++) {
            var key = _a[_i];
            if (newPage[key] == "") {
                this.errorFlag = true;
                this.errorMsg = "Page info incomplete";
                return;
            }
        }
        this.pageService.createPage(this.websiteId, newPage)
            .subscribe(function (data) {
            console.log("create new website succeed");
            _this.router.navigate(["/user", _this.userId, "website", _this.websiteId, "page"]);
        }, function (error) {
            console.log("register website fail");
            _this.errorFlag = true;
            _this.errorMsg = error;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], PageNewComponent.prototype, "newForm", void 0);
    PageNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-page-new',
            template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* copy from style.css */\nbody {\n    padding-top: 65px;\n}\n.list-group-item {\n    border: none;\n}\n.thmbnail {\n    position: relative;\n    z-index: 0;\n}\n.icon-header {\n    padding-top: 0%;\n}\n.icon-group {\n    position: absolute;\n    font-size: 20px;\n    top: 0%;\n    right: 0%;\n    z-index: 1;\n    background-color: white;\n}\n.myNavIconLeft {\n    position: absolute;\n    left: 10px;\n}\n.myNavIconRight {\n    position: absolute;\n    right: 10px;\n}\n.myNavIconCenter {\n    position: absolute;\n    left: 40px;\n}\n.myNavIconCenter2 {\n    position: relative;\n    left: 29%;\n}\n.myNavIconCenter3 {\n    position: relative;\n    left: 30%;\n}\n.grid-container {\n    display: grid;\n}\n.text-white {\n    color: white;\n}\n.text-black {\n    color: black;\n}\n.bg-grey {\n    background-color: lightgray;\n}\n/* Portrait */\n@media screen and (orientation:portrait) {\n    /* Portrait styles here */\n    .visibleIfPortrait {\n        visibility: visible;\n    }\n    .visibleIfLandscape {\n        visibility: hidden;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 1;\n        grid-row: 1;\n    }\n}\n/* Landscape */\n@media screen and (orientation:landscape) {\n    /* Landscape styles here */\n    .visibleIfPortrait {\n        visibility: hidden;\n    }\n    .visibleIfLandscape {\n        visibility: visible;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 2 / span 2;\n        grid-row: 1;\n    }\n}\n.myHeader {\n    padding: 0;\n    border: 0;\n    margin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- use structural directive *ngIf to display errMsg on top of the page if input credentials not match -->\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n  <!-- add ngSubmit event in form tag to submit form and invold login() function -->\n  <!-- add a local reference to the form using # syntax -->\n  <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n    <!-- add ngModel directive and set name field at each HTML input field or control -->\n    <!-- add validation to check user input by adding required attribute to input fields -->\n    <!-- add dynamically added css classes like input.ngInvalid.ngTouched to highlight invalid input fields -->\n    <input placeholder=\"username\" name=\"username\" type=\"text\" class=\"form-control\" ngModel required #username=\"ngModel\" />\n    <!-- use local reference to the input field to display a errMsg -->\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n    <input placeholder=\"password\" name=\"password\" type=\"password\" class=\"form-control\" ngModel required #password=\"ngModel\" />\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n  </form>\n  <button type=\"submit\" class=\"btn btn-block btn-primary\" (click)=\"login()\" [disabled]=\"!f.valid\">Login</button>\n  <a [routerLink]=\"['/register']\">\n    <button type=\"button\" class=\"btn btn-block btn-success\">Register</button>\n  </a>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // TODO: currently it always route to user/123, no matter what username and password
        // should change it in login()
        // should not allow router if error
        this.userId = "123";
        this.errorMsg = 'Invalid username or password!';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // fetching data from loginForm using @ViewChild reference created in above steps
        console.log("hi from login");
        console.log("userId is ");
        console.log(this.userId);
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (data) {
            console.log("data is ");
            console.log(data);
            _this.userId = data._id;
            console.log("userId is ");
            console.log(_this.userId);
            _this.router.navigate(["/user/" + _this.userId]);
        }, function (error) {
            console.log("error");
            _this.errorFlag = true;
            _this.errorMsg = error;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* copy from style.css */\nbody {\n    padding-top: 65px;\n}\n.list-group-item {\n    border: none;\n}\n.thmbnail {\n    position: relative;\n    z-index: 0;\n}\n.icon-header {\n    padding-top: 0%;\n}\n.icon-group {\n    position: absolute;\n    font-size: 20px;\n    top: 0%;\n    right: 0%;\n    z-index: 1;\n    background-color: white;\n}\n.myNavIconLeft {\n    position: absolute;\n    left: 10px;\n}\n.myNavIconRight {\n    position: absolute;\n    right: 10px;\n}\n.myNavIconCenter {\n    position: absolute;\n    left: 40px;\n}\n.myNavIconCenter2 {\n    position: relative;\n    left: 29%;\n}\n.myNavIconCenter3 {\n    position: relative;\n    left: 30%;\n}\n.grid-container {\n    display: grid;\n}\n.text-white {\n    color: white;\n}\n.text-black {\n    color: black;\n}\n.bg-grey {\n    background-color: lightgray;\n}\n/* Portrait */\n@media screen and (orientation:portrait) {\n    /* Portrait styles here */\n    .visibleIfPortrait {\n        visibility: visible;\n    }\n    .visibleIfLandscape {\n        visibility: hidden;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 1;\n        grid-row: 1;\n    }\n}\n/* Landscape */\n@media screen and (orientation:landscape) {\n    /* Landscape styles here */\n    .visibleIfPortrait {\n        visibility: hidden;\n    }\n    .visibleIfLandscape {\n        visibility: visible;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 2 / span 2;\n        grid-row: 1;\n    }\n}\n.myHeader {\n    padding: 0;\n    border: 0;\n    margin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"navbar navbar-fixed-top bg-primary text-white\">\n    <div class=\"navbar-brand\">Profile</div>\n    <a [routerLink]=\"['/user/01']\" class=\"navbar-brand myNavIconRight\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </a>\n  </div>\n\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <form (ngSubmit)=\"update()\" #f=\"ngForm\">\n    <label>First Name</label>\n    <input placeholder={{firstNamePh}} name=\"firstName\" type=\"text\" class=\"form-control\" ngModel required #firstName=\"ngModel\"\n    />\n\n    <label>Last Name</label>\n    <input placeholder={{lastNamePh}} name=\"lastName\" type=\"text\" class=\"form-control\" ngModel required #lastName=\"ngModel\" />\n\n    <label>User Name</label>\n    <input placeholder={{usernamePh}} name=\"username\" type=\"text\" class=\"form-control\" ngModel required #username=\"ngModel\" />\n\n    <label>Email</label>\n    <input placeholder={{emailPh}} name=\"email\" type=\"text\" class=\"form-control\" ngModel required #email=\"ngModel\" />\n\n    <button type=\"button\" class=\"btn btn-block btn-primary\" (click)=\"update()\">Update Profile</button>\n    <a [routerLink]=\"['/user',userId,'website']\">\n      <button type=\"button\" class=\"btn btn-block btn-success\">Websites</button>\n    </a>\n    <a [routerLink]=\"['/login']\">\n      <button type=\"button\" class=\"btn btn-block btn-danger\">Logout</button>\n    </a>\n  </form>\n\n  <div class=\"navbar navbar-fixed-bottom bg-primary text-white\">\n    <a class=\"navbar-brand myNavIconRight\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, activateRoute) {
        this.userService = userService;
        this.activateRoute = activateRoute;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // retrieves userId as path parameter
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.userService.findUserById(this.userId)
            .subscribe(function (data) {
            _this.user = data;
            _this.usernamePh = _this.user['username'];
            _this.firstNamePh = _this.user['firstName'];
            _this.lastNamePh = _this.user['lastName'];
            _this.emailPh = _this.user['email'];
        });
    };
    ProfileComponent.prototype.update = function () {
        this.username = this.registerForm.value.username;
        this.firstName = this.registerForm.value.firstName;
        this.lastName = this.registerForm.value.lastName;
        this.email = this.registerForm.value.email;
        this.user = { username: this.username, firstName: this.firstName, lastName: this.lastName, email: this.email };
        for (var _i = 0, _a = Object.keys(this.user); _i < _a.length; _i++) {
            var key = _a[_i];
            if (this.user[key] == "") {
                this.errorFlag = true;
                this.errorMsg = "User info incomplete";
                return;
            }
        }
        this.userService.updateUser(this.userId, this.user)
            .subscribe(function (data) {
            console.log("user update succeed");
        }, function (error) {
            console.log("user update error");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], ProfileComponent.prototype, "registerForm", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* copy from style.css */\nbody {\n    padding-top: 65px;\n}\n.list-group-item {\n    border: none;\n}\n.thmbnail {\n    position: relative;\n    z-index: 0;\n}\n.icon-header {\n    padding-top: 0%;\n}\n.icon-group {\n    position: absolute;\n    font-size: 20px;\n    top: 0%;\n    right: 0%;\n    z-index: 1;\n    background-color: white;\n}\n.myNavIconLeft {\n    position: absolute;\n    left: 10px;\n}\n.myNavIconRight {\n    position: absolute;\n    right: 10px;\n}\n.myNavIconCenter {\n    position: absolute;\n    left: 40px;\n}\n.myNavIconCenter2 {\n    position: relative;\n    left: 29%;\n}\n.myNavIconCenter3 {\n    position: relative;\n    left: 30%;\n}\n.grid-container {\n    display: grid;\n}\n.text-white {\n    color: white;\n}\n.text-black {\n    color: black;\n}\n.bg-grey {\n    background-color: lightgray;\n}\n/* Portrait */\n@media screen and (orientation:portrait) {\n    /* Portrait styles here */\n    .visibleIfPortrait {\n        visibility: visible;\n    }\n    .visibleIfLandscape {\n        visibility: hidden;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 1;\n        grid-row: 1;\n    }\n}\n/* Landscape */\n@media screen and (orientation:landscape) {\n    /* Landscape styles here */\n    .visibleIfPortrait {\n        visibility: hidden;\n    }\n    .visibleIfLandscape {\n        visibility: visible;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 2 / span 2;\n        grid-row: 1;\n    }\n}\n.myHeader {\n    padding: 0;\n    border: 0;\n    margin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Register</h1>\n  <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n    <!-- add ngModel directive and set name field at each HTML input field or control -->\n    <!-- add validation to check user input by adding required attribute to input fields -->\n    <!-- add dynamically added css classes like input.ngInvalid.ngTouched to highlight invalid input fields -->\n\n    <label>User Name</label>\n    <input placeholder=\"username\" name=\"username\" type=\"text\" class=\"form-control\" ngModel required #username=\"ngModel\" />\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <label>Password</label>\n    <input placeholder=\"password\" name=\"password\" type=\"password\" class=\"form-control\" ngModel required #password=\"ngModel\" />\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n\n    <label>Verify password</label>\n    <input placeholder=\"verify password\" name=\"password2\" type=\"password\" class=\"form-control\" ngModel required #password2=\"ngModel\"\n    />\n    <span class=\"help-block\" *ngIf=\"!password2.valid && password2.touched \">\n      Please verify password!\n    </span>\n\n    <label>First Name</label>\n    <input placeholder=\"firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" ngModel required #firstName=\"ngModel\" />\n    <span class=\"help-block\" *ngIf=\"!firstName.valid && firstName.touched\">\n      Please enter firstName!\n    </span>\n\n    <label>Last Name</label>\n    <input placeholder=\"lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" ngModel required #lastName=\"ngModel\" />\n    <span class=\"help-block\" *ngIf=\"!lastName.valid && lastName.touched\">\n      Please enter lastName!\n    </span>\n\n    <label>Email</label>\n    <input placeholder=\"email\" name=\"email\" type=\"text\" class=\"form-control\" ngModel required #email=\"ngModel\" />\n    <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\n      Please enter email!\n    </span>\n\n    <button type=\"button\" class=\"btn btn-block btn-primary\" (click)=\"register()\">Register</button>\n    <a [routerLink]=\"['/login']\">\n      <button type=\"button\" class=\"btn btn-block btn-danger\">Cancel</button>\n    </a>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.errorMsg = 'Invalid username or password!';
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.password2 = this.registerForm.value.password2;
        if (this.password != this.password2) {
            this.errorFlag = true;
            this.errorMsg = "Please verify password";
            return;
        }
        this.firstName = this.registerForm.value.firstName;
        this.lastName = this.registerForm.value.lastName;
        this.email = this.registerForm.value.email;
        this.user = { username: this.username, password: this.password, firstName: this.firstName, lastName: this.lastName, email: this.email };
        for (var _i = 0, _a = Object.keys(this.user); _i < _a.length; _i++) {
            var key = _a[_i];
            if (this.user[key] == "") {
                this.errorFlag = true;
                this.errorMsg = "User info incomplete";
                return;
            }
        }
        this.userService.createUser(this.user)
            .subscribe(function (data) {
            console.log("register user succeed");
            _this.userId = data._id;
            _this.router.navigate(["/user/" + _this.userId]);
        }, function (error) {
            console.log("register user fail");
            _this.errorFlag = true;
            _this.errorMsg = error;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* copy from style.css */\nbody {\n    padding-top: 65px;\n}\n.list-group-item {\n    border: none;\n}\n.thmbnail {\n    position: relative;\n    z-index: 0;\n}\n.icon-header {\n    padding-top: 0%;\n}\n.icon-group {\n    position: absolute;\n    font-size: 20px;\n    top: 0%;\n    right: 0%;\n    z-index: 1;\n    background-color: white;\n}\n.myNavIconLeft {\n    position: absolute;\n    left: 10px;\n}\n.myNavIconRight {\n    position: absolute;\n    right: 10px;\n}\n.myNavIconCenter {\n    position: absolute;\n    left: 40px;\n}\n.myNavIconCenter2 {\n    position: relative;\n    left: 29%;\n}\n.myNavIconCenter3 {\n    position: relative;\n    left: 30%;\n}\n.grid-container {\n    display: grid;\n}\n.text-white {\n    color: white;\n}\n.text-black {\n    color: black;\n}\n.bg-grey {\n    background-color: lightgray;\n}\n/* Portrait */\n@media screen and (orientation:portrait) {\n    /* Portrait styles here */\n    .visibleIfPortrait {\n        visibility: visible;\n    }\n    .visibleIfLandscape {\n        visibility: hidden;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 1;\n        grid-row: 1;\n    }\n}\n/* Landscape */\n@media screen and (orientation:landscape) {\n    /* Landscape styles here */\n    .visibleIfPortrait {\n        visibility: hidden;\n    }\n    .visibleIfLandscape {\n        visibility: visible;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 2 / span 2;\n        grid-row: 1;\n    }\n}\n.myHeader {\n    padding: 0;\n    border: 0;\n    margin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"navbar navbar-fixed-top bg-primary\">\n    <!-- left goes back to website list -->\n    <a [routerLink]=\"['/user',userId,'website']\" class=\"navbar-brand myNavIconLeft text-white\">\n      <span class=\"glyphicon glyphicon-menu-left\"></span>\n    </a>\n    <div class=\"navbar-brand myNavIconCenter visibleIfLandscape text-white\">Websites</div>\n    <!-- have access to new website in landscape mode -->\n    <a [routerLink]=\"['/user',userId,'website/new']\" class=\"navbar-brand myNavIconCenter2 visibleIfLandscape text-white\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n    <div class=\"navbar-brand myNavIconCenter3 visibleIfLandscape text-white\">Edit Websites</div>\n    <div class=\"navbar-brand myNavIconCenter visibleIfPortrait text-white\">Edit Websites</div>\n    <!-- ok goes back to website list -->\n    <div class=\"navbar-brand myNavIconRight text-white\">\n      <span class=\"glyphicon glyphicon-ok\" (click)=\"update()\"></span>\n    </div>\n </div>\n  <div class=\"grid-container\">\n    <div class=\"visibleIfLandscape side\">\n      <!-- have access to website lists if landscape -->\n      <ul class=\"list-group bg-white text-primary\" *ngFor=\"let website of websites\">\n        <li class=\"list-group-item\">\n          <a>{{website.name}}</a>\n          <a [routerLink]=\"['/user',userId,'website',website._id]\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"main\">\n      <form #f=\"ngForm\">\n        <label>Name</label>\n        <input placeholder={{namePh}} name=\"name\" type=\"text\" class=\"form-control\" ngModel required #name=\"ngModel\" />\n        <!-- use local reference to the input field to display a errMsg -->\n        <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n          Please enter name!\n        </span>\n        <label>Description</label>\n        <input placeholder={{descriptionPh}} name=\"description\" type=\"text\" class=\"form-control\" ngModel required #description=\"ngModel\"\n        />\n        <span class=\"help-block\" *ngIf=\"!description.valid && description.touched\">\n          Please enter description!\n        </span>\n\n        <button type=\"button\" class=\"btn btn-block btn-danger\" (click)=\"delete()\">Delete</button>\n      </form>\n    </div>\n  </div>\n  <div class=\"navbar navbar-fixed-bottom bg-primary text-white\">\n    <!-- delete the router as its not shown on the requirement -->\n    <span class=\"glyphicon glyphicon-user\"></span>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, router, activateRoute) {
        this.websiteService = websiteService;
        this.router = router;
        this.activateRoute = activateRoute;
        this.websites = [{}];
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
        });
        this.websiteService.findWebsiteById(this.websiteId)
            .subscribe(function (data) {
            _this.website = data;
            _this.namePh = _this.website['name'];
            _this.descriptionPh = _this.website['description'];
        });
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (data) {
            _this.websites = data;
        });
    };
    WebsiteEditComponent.prototype.update = function () {
        var _this = this;
        console.log("hi from web edit");
        var name = this.updateForm.value.name;
        var description = this.updateForm.value.description;
        var newWebsite = { name: name, description: description };
        for (var _i = 0, _a = Object.keys(newWebsite); _i < _a.length; _i++) {
            var key = _a[_i];
            if (newWebsite[key] == "") {
                this.errorFlag = true;
                this.errorMsg = "Web info incomplete";
                return;
            }
        }
        this.websiteService.updateWebsite(this.websiteId, newWebsite)
            .subscribe(function (data) {
            console.log("web update succeed");
            _this.router.navigate(["/user", _this.userId, "website"]);
        }, function (error) {
            console.log("web update error");
        });
    };
    WebsiteEditComponent.prototype.delete = function () {
        console.log("hi from web edit delete");
        this.websiteService.deleteWebsite(this.websiteId)
            .subscribe(function (data) {
            console.log("web delete succeed");
        }, function (error) {
            console.log("web delete error");
        });
        this.router.navigate(["/user", this.userId, "website"]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], WebsiteEditComponent.prototype, "updateForm", void 0);
    WebsiteEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-website-edit',
            template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* copy from style.css */\nbody {\n    padding-top: 65px;\n}\n.list-group-item {\n    border: none;\n}\n.thmbnail {\n    position: relative;\n    z-index: 0;\n}\n.icon-header {\n    padding-top: 0%;\n}\n.icon-group {\n    position: absolute;\n    font-size: 20px;\n    top: 0%;\n    right: 0%;\n    z-index: 1;\n    background-color: white;\n}\n.myNavIconLeft {\n    position: absolute;\n    left: 10px;\n}\n.myNavIconRight {\n    position: absolute;\n    right: 10px;\n}\n.myNavIconCenter {\n    position: absolute;\n    left: 40px;\n}\n.myNavIconCenter2 {\n    position: relative;\n    left: 29%;\n}\n.myNavIconCenter3 {\n    position: relative;\n    left: 30%;\n}\n.grid-container {\n    display: grid;\n}\n.text-white {\n    color: white;\n}\n.text-black {\n    color: black;\n}\n.bg-grey {\n    background-color: lightgray;\n}\n/* Portrait */\n@media screen and (orientation:portrait) {\n    /* Portrait styles here */\n    .visibleIfPortrait {\n        visibility: visible;\n    }\n    .visibleIfLandscape {\n        visibility: hidden;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 1;\n        grid-row: 1;\n    }\n}\n/* Landscape */\n@media screen and (orientation:landscape) {\n    /* Landscape styles here */\n    .visibleIfPortrait {\n        visibility: hidden;\n    }\n    .visibleIfLandscape {\n        visibility: visible;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 2 / span 2;\n        grid-row: 1;\n    }\n}\n.myHeader {\n    padding: 0;\n    border: 0;\n    margin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"navbar navbar-fixed-top bg-primary \">\n    <!-- go back to corresponding user fetched from url -->\n    <a [routerLink]=\"['/user',userId]\" class=\"navbar-brand myNavIconLeft text-white\">\n      <span class=\"glyphicon glyphicon-menu-left\"></span>\n    </a>\n    <!-- use the page of the first website -->\n    <a [routerLink]=\"['/user', userId,'website',websites[0]._id,'page']\" class=\"navbar-brand myNavIconCenter text-white\">Website</a>\n    <a [routerLink]=\"['/user',userId,'website','new']\" class=\"navbar-brand myNavIconRight text-white\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n  </div>\n  <!-- iterate over collection of websites  -->\n  <ul class=\"list-group bg-white text-primary\" *ngFor=\"let website of websites\">\n    <li class=\"list-group-item\">\n      <a [routerLink]=\"['/user', userId,'website',website._id,'page']\" >{{website.name}}</a>\n      <a [routerLink]=\"['/user',userId,'website',website._id]\" >\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>\n  </ul>\n  <div class=\"navbar navbar-fixed-bottom bg-primary text-white\">\n    <a [routerLink]=\"['/user', userId]\" class=\"navbar-brand myNavIconRight\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activateRoute) {
        this.websiteService = websiteService;
        this.activateRoute = activateRoute;
        this.websites = [{}];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // retrieves userId as path parameter
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
        });
        // user websiteService to retrieve the user instance
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (data) {
            _this.websites = data;
        }, function (error) {
            console.log(error);
        });
    };
    WebsiteListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-website-list',
            template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* copy from style.css */\nbody {\n    padding-top: 65px;\n}\n.list-group-item {\n    border: none;\n}\n.thmbnail {\n    position: relative;\n    z-index: 0;\n}\n.icon-header {\n    padding-top: 0%;\n}\n.icon-group {\n    position: absolute;\n    font-size: 20px;\n    top: 0%;\n    right: 0%;\n    z-index: 1;\n    background-color: white;\n}\n.myNavIconLeft {\n    position: absolute;\n    left: 10px;\n}\n.myNavIconRight {\n    position: absolute;\n    right: 10px;\n}\n.myNavIconCenter {\n    position: absolute;\n    left: 40px;\n}\n.myNavIconCenter2 {\n    position: relative;\n    left: 29%;\n}\n.myNavIconCenter3 {\n    position: relative;\n    left: 30%;\n}\n.grid-container {\n    display: grid;\n}\n.text-white {\n    color: white;\n}\n.text-black {\n    color: black;\n}\n.bg-grey {\n    background-color: lightgray;\n}\n/* Portrait */\n@media screen and (orientation:portrait) {\n    /* Portrait styles here */\n    .visibleIfPortrait {\n        visibility: visible;\n    }\n    .visibleIfLandscape {\n        visibility: hidden;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 1;\n        grid-row: 1;\n    }\n}\n/* Landscape */\n@media screen and (orientation:landscape) {\n    /* Landscape styles here */\n    .visibleIfPortrait {\n        visibility: hidden;\n    }\n    .visibleIfLandscape {\n        visibility: visible;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 2 / span 2;\n        grid-row: 1;\n    }\n}\n.myHeader {\n    padding: 0;\n    border: 0;\n    margin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"navbar navbar-fixed-top bg-primary \">\n    <!-- always return to corresponding website so always needs to fetch the parameters above -->\n    <a [routerLink]=\"['/user',userId,'website']\" class=\"navbar-brand myNavIconLeft text-white\">\n      <span class=\"glyphicon glyphicon-menu-left\"></span>\n    </a>\n    <div class=\"navbar-brand myNavIconCenter visibleIfLandscape text-white\">Websites</div>\n    <a [routerLink]=\"['/user',userId,'website']\" class=\"navbar-brand myNavIconCenter2 visibleIfLandscape text-white\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n    <div class=\"navbar-brand myNavIconCenter3 visibleIfLandscape text-white\">New Websites</div>\n    <div class=\"navbar-brand myNavIconCenter visibleIfPortrait text-white\">New Websites</div>\n    <div class=\"navbar-brand myNavIconRight text-white\">\n      <span class=\"glyphicon glyphicon-ok\" (click)=\"create()\"></span>\n    </div>\n  </div>\n\n  <div class=\"grid-container\">\n    <div class=\"visibleIfLandscape side\">\n      <!-- have access to website lists if landscape -->\n      <ul class=\"list-group bg-white text-primary\" *ngFor=\"let website of websites\">\n        <li class=\"list-group-item\">\n          <a>{{website.name}}</a>\n          <a [routerLink]=\"['/user',userId,'website',website._id]\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"main\">\n      <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n        {{errorMsg}}\n      </div>\n      <form #f=\"ngForm\">\n        <label>Name</label>\n        <input placeholder=\"name\" name=\"name\" type=\"text\" class=\"form-control\" ngModel required #name=\"ngModel\" />\n        <!-- use local reference to the input field to display a errMsg -->\n        <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n          Please enter name!\n        </span>\n        <label>Description</label>\n        <input placeholder=\"description\" name=\"description\" type=\"text\" class=\"form-control\" ngModel required #description=\"ngModel\"\n        />\n        <span class=\"help-block\" *ngIf=\"!description.valid && description.touched\">\n          Please enter description!\n        </span>\n      </form>\n    </div>\n  </div>\n\n  <div class=\"navbar navbar-fixed-bottom bg-primary text-white\">\n    <!-- delete the router as its not shown on the requirement -->\n    <span class=\"glyphicon glyphicon-user\"></span>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, router, activateRoute) {
        this.websiteService = websiteService;
        this.router = router;
        this.activateRoute = activateRoute;
        this.websites = [{}];
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // retrieves userId as path parameter
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
        });
        // use websiteService to retrieve the user instance
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (data) {
            _this.websites = data;
        });
    };
    WebsiteNewComponent.prototype.create = function () {
        var _this = this;
        console.log("hi from web new create");
        var name = this.newWebsiteForm.value.name;
        var description = this.newWebsiteForm.value.description;
        var newWebsite = { name: name, description: description };
        for (var _i = 0, _a = Object.keys(newWebsite); _i < _a.length; _i++) {
            var key = _a[_i];
            if (newWebsite[key] == "") {
                this.errorFlag = true;
                this.errorMsg = "Website info incomplete";
                return;
            }
        }
        this.websiteService.createWebsite(this.userId, newWebsite)
            .subscribe(function (data) {
            console.log("create new website succeed");
            _this.router.navigate(["/user", _this.userId, "website"]);
        }, function (error) {
            console.log("register website fail");
            _this.errorFlag = true;
            _this.errorMsg = error;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], WebsiteNewComponent.prototype, "newWebsiteForm", void 0);
    WebsiteNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-website-new',
            template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* copy from style.css */\nbody {\n    padding-top: 65px;\n}\n.list-group-item {\n    border: none;\n}\n.thmbnail {\n    position: relative;\n    z-index: 0;\n}\n.icon-header {\n    padding-top: 0%;\n}\n.icon-group {\n    position: absolute;\n    font-size: 20px;\n    top: 0%;\n    right: 0%;\n    z-index: 1;\n    background-color: white;\n}\n.myNavIconLeft {\n    position: absolute;\n    left: 10px;\n}\n.myNavIconRight {\n    position: absolute;\n    right: 10px;\n}\n.myNavIconCenter {\n    position: absolute;\n    left: 40px;\n}\n.myNavIconCenter2 {\n    position: relative;\n    left: 29%;\n}\n.myNavIconCenter3 {\n    position: relative;\n    left: 30%;\n}\n.grid-container {\n    display: grid;\n}\n.text-white {\n    color: white;\n}\n.text-black {\n    color: black;\n}\n.bg-grey {\n    background-color: lightgray;\n}\n/* Portrait */\n@media screen and (orientation:portrait) {\n    /* Portrait styles here */\n    .visibleIfPortrait {\n        visibility: visible;\n    }\n    .visibleIfLandscape {\n        visibility: hidden;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 1;\n        grid-row: 1;\n    }\n}\n/* Landscape */\n@media screen and (orientation:landscape) {\n    /* Landscape styles here */\n    .visibleIfPortrait {\n        visibility: hidden;\n    }\n    .visibleIfLandscape {\n        visibility: visible;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 2 / span 2;\n        grid-row: 1;\n    }\n}\n.myHeader {\n    padding: 0;\n    border: 0;\n    margin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"navbar navbar-fixed-top bg-grey\">\n    <!-- left return to widget list -->\n    <a [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget']\"  class=\"navbar-brand myNavIconLeft text-black\">\n      <span class=\"glyphicon glyphicon-menu-left\"></span>\n    </a>\n    <div class=\"navbar-brand myNavIconCenter text-black\">Widget Choose</div>\n    <!-- ok return to widget list -->\n    <a [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget']\"  class=\"navbar-brand myNavIconRight text-black\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </a>\n  </div>\n\n  <ul class=\"list-group bg-white text-primary\">\n    <li class=\"list-group-item\">\n      <a [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget',headerId,'header']\">Header</a>\n    </li>\n    <li class=\"list-group-item\">\n      <a>Label</a>\n    </li>\n    <li class=\"list-group-item\">\n      <a>HTML</a>\n    </li>\n    <li class=\"list-group-item\">\n      <a>Text input</a>\n    </li>\n    <li class=\"list-group-item\">\n      <a>Link</a>\n    </li>\n    <li class=\"list-group-item\">\n      <a>Button</a>\n    </li>\n    <li class=\"list-group-item\">\n      <a [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget',imageId,'image']\" >Image</a>\n    </li>\n    <li class=\"list-group-item\">\n      <a [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget', youtubeId, 'youtube']\" >Youtube</a>\n    </li>\n    <li class=\"list-group-item\">\n      <a>Data table</a>\n    </li>\n    <li class=\"list-group-item\">\n      <a>Repeater</a>\n    </li>\n  </ul>\n  <div class=\"navbar navbar-fixed-bottom bg-grey text-black\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(widgetService, activateRoute, sanitizer) {
        this.widgetService = widgetService;
        this.activateRoute = activateRoute;
        this.sanitizer = sanitizer;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        // retrieves userId as path parameter
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
        });
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (data) {
            var widgets = data;
            console.log(widgets);
            for (var x = 0; x < widgets.length; x++) {
                var widget = widgets[x];
                console.log(widget);
                console.log(widget['widgetType']);
                if (widget['widgetType'] == "IMAGE") {
                    _this.imageId = widget['_id'];
                }
                if (widget['widgetType'] == "HEADING") {
                    _this.headerId = widget['_id'];
                }
                if (widget['widgetType'] == "YOUTUBE") {
                    _this.youtubeId = widget['_id'];
                }
            }
            console.log(_this.imageId);
            console.log(_this.headerId);
            console.log(_this.youtubeId);
        });
    };
    WidgetChooserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-widget-chooser',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* copy from style.css */\nbody {\n    padding-top: 65px;\n}\n.list-group-item {\n    border: none;\n}\n.thmbnail {\n    position: relative;\n    z-index: 0;\n}\n.icon-header {\n    padding-top: 0%;\n}\n.icon-group {\n    position: absolute;\n    font-size: 20px;\n    top: 0%;\n    right: 0%;\n    z-index: 1;\n    background-color: white;\n}\n.myNavIconLeft {\n    position: absolute;\n    left: 10px;\n}\n.myNavIconRight {\n    position: absolute;\n    right: 10px;\n}\n.myNavIconCenter {\n    position: absolute;\n    left: 40px;\n}\n.myNavIconCenter2 {\n    position: relative;\n    left: 29%;\n}\n.myNavIconCenter3 {\n    position: relative;\n    left: 30%;\n}\n.grid-container {\n    display: grid;\n}\n.text-white {\n    color: white;\n}\n.text-black {\n    color: black;\n}\n.bg-grey {\n    background-color: lightgray;\n}\n/* Portrait */\n@media screen and (orientation:portrait) {\n    /* Portrait styles here */\n    .visibleIfPortrait {\n        visibility: visible;\n    }\n    .visibleIfLandscape {\n        visibility: hidden;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 1;\n        grid-row: 1;\n    }\n}\n/* Landscape */\n@media screen and (orientation:landscape) {\n    /* Landscape styles here */\n    .visibleIfPortrait {\n        visibility: hidden;\n    }\n    .visibleIfLandscape {\n        visibility: visible;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 2 / span 2;\n        grid-row: 1;\n    }\n}\n.myHeader {\n    padding: 0;\n    border: 0;\n    margin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  widget-edit works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent() {
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
    };
    WidgetEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-widget-edit',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* copy from style.css */\nbody {\n    padding-top: 65px;\n}\n.list-group-item {\n    border: none;\n}\n.thmbnail {\n    position: relative;\n    z-index: 0;\n}\n.icon-header {\n    padding-top: 0%;\n}\n.icon-group {\n    position: absolute;\n    font-size: 20px;\n    top: 0%;\n    right: 0%;\n    z-index: 1;\n    background-color: white;\n}\n.myNavIconLeft {\n    position: absolute;\n    left: 10px;\n}\n.myNavIconRight {\n    position: absolute;\n    right: 10px;\n}\n.myNavIconCenter {\n    position: absolute;\n    left: 40px;\n}\n.myNavIconCenter2 {\n    position: relative;\n    left: 29%;\n}\n.myNavIconCenter3 {\n    position: relative;\n    left: 30%;\n}\n.grid-container {\n    display: grid;\n}\n.text-white {\n    color: white;\n}\n.text-black {\n    color: black;\n}\n.bg-grey {\n    background-color: lightgray;\n}\n/* Portrait */\n@media screen and (orientation:portrait) {\n    /* Portrait styles here */\n    .visibleIfPortrait {\n        visibility: visible;\n    }\n    .visibleIfLandscape {\n        visibility: hidden;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 1;\n        grid-row: 1;\n    }\n}\n/* Landscape */\n@media screen and (orientation:landscape) {\n    /* Landscape styles here */\n    .visibleIfPortrait {\n        visibility: hidden;\n    }\n    .visibleIfLandscape {\n        visibility: visible;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 2 / span 2;\n        grid-row: 1;\n    }\n}\n.myHeader {\n    padding: 0;\n    border: 0;\n    margin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"navbar navbar-fixed-top bg-grey\">\n    <!-- left goes back to widget list -->\n    <a [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget']\" class=\"navbar-brand myNavIconLeft text-black\">\n      <span class=\"glyphicon glyphicon-menu-left\"></span>\n    </a>\n    <div class=\"navbar-brand myNavIconCenter text-black\">Widget Edit</div>\n    <!-- ok goes back to widget list -->\n    <div class=\"navbar-brand myNavIconRight text-white\">\n      <span class=\"glyphicon glyphicon-ok\" (click)=\"update()\"></span>\n    </div>\n </div>\n\n\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label>Type</label>\n      <input [(ngModel)]=\"widgettype\" name=\"widgettype\" id=\"widgettype\" type=\"text\" class=\"form-control\" placeholder={{typePh}}>\n    </div>\n    <div class=\"form-group\">\n      <label>Text</label>\n      <input [(ngModel)]=\"widgettext\" name=\"widgettext\" id=\"widgettext\" type=\"text\" class=\"form-control\" placeholder={{textPh}}>\n    </div>\n    <div class=\"form-group\">\n      <label>Size</label>\n      <input [(ngModel)]=\"widgetsize\" name=\"widgetsize\" id=\"widgetsize\" type=\"number\" class=\"form-control\" placeholder={{sizePh}}>\n    </div>\n  </form>\n    <!-- delete goes back to widget list -->\n    <a [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget']\">\n      <button type=\"button\" (click)=\"delete()\" class=\"btn btn-block btn-danger\">Delete</button>\n    </a>\n  <div class=\"navbar navbar-fixed-bottom bg-grey text-black\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, router, activateRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activateRoute = activateRoute;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // retrieves userId as path parameter
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
            _this.widgetId = params['widgetId'];
        });
        // user UserService to retrieve the user instance
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (data) {
            var widget = data;
            _this.typePh = widget['widgetType'];
            _this.textPh = widget['text'];
            _this.sizePh = widget['size'];
        });
    };
    WidgetHeaderComponent.prototype.update = function () {
        var _this = this;
        console.log("hi from web edit");
        var type = this.updateForm.value.widgettype;
        var text = this.updateForm.value.widgettext;
        var size = this.updateForm.value.widgetsize;
        var newWidget = { widgetType: type, text: text, size: size };
        for (var _i = 0, _a = Object.keys(newWidget); _i < _a.length; _i++) {
            var key = _a[_i];
            if (newWidget[key] == "") {
                this.errorFlag = true;
                this.errorMsg = "widget info incomplete";
                return;
            }
        }
        this.widgetService.updateWidget(this.widgetId, newWidget)
            .subscribe(function (data) {
            console.log("widget update succeed");
            _this.router.navigate(["/user", _this.userId, "website", _this.websiteId, "page", _this.pageId, "widget"]);
        }, function (error) {
            console.log("widget update error");
        });
    };
    WidgetHeaderComponent.prototype.delete = function () {
        var _this = this;
        console.log("hi from widget edit delete");
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) {
            console.log("widget delete succeed");
            _this.router.navigate(["/user", _this.userId, "website", _this.websiteId, "page", _this.pageId, "widget"]);
        }, function (error) {
            console.log("widget delete error");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], WidgetHeaderComponent.prototype, "updateForm", void 0);
    WidgetHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-widget-header',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* copy from style.css */\nbody {\n    padding-top: 65px;\n}\n.list-group-item {\n    border: none;\n}\n.thmbnail {\n    position: relative;\n    z-index: 0;\n}\n.icon-header {\n    padding-top: 0%;\n}\n.icon-group {\n    position: absolute;\n    font-size: 20px;\n    top: 0%;\n    right: 0%;\n    z-index: 1;\n    background-color: white;\n}\n.myNavIconLeft {\n    position: absolute;\n    left: 10px;\n}\n.myNavIconRight {\n    position: absolute;\n    right: 10px;\n}\n.myNavIconCenter {\n    position: absolute;\n    left: 40px;\n}\n.myNavIconCenter2 {\n    position: relative;\n    left: 29%;\n}\n.myNavIconCenter3 {\n    position: relative;\n    left: 30%;\n}\n.grid-container {\n    display: grid;\n}\n.text-white {\n    color: white;\n}\n.text-black {\n    color: black;\n}\n.bg-grey {\n    background-color: lightgray;\n}\n/* Portrait */\n@media screen and (orientation:portrait) {\n    /* Portrait styles here */\n    .visibleIfPortrait {\n        visibility: visible;\n    }\n    .visibleIfLandscape {\n        visibility: hidden;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 1;\n        grid-row: 1;\n    }\n}\n/* Landscape */\n@media screen and (orientation:landscape) {\n    /* Landscape styles here */\n    .visibleIfPortrait {\n        visibility: hidden;\n    }\n    .visibleIfLandscape {\n        visibility: visible;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 2 / span 2;\n        grid-row: 1;\n    }\n}\n.myHeader {\n    padding: 0;\n    border: 0;\n    margin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"navbar navbar-fixed-top bg-grey\">\n    <a [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget']\" class=\"navbar-brand myNavIconLeft text-black\">\n      <span class=\"glyphicon glyphicon-menu-left\"></span>\n    </a>\n    <div class=\"navbar-brand myNavIconCenter text-black\">Widget Edit</div>\n    <div class=\"navbar-brand myNavIconRight text-white\">\n      <span class=\"glyphicon glyphicon-ok\" (click)=\"update()\"></span>\n    </div>\n </div>\n\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label>Type</label>\n      <input [(ngModel)]=\"widgettype\" name=\"widgettype\" id=\"widgettype\" type=\"text\" class=\"form-control\" placeholder={{typePh}}>\n    </div>\n    <div class=\"form-group\">\n      <label>URL</label>\n      <input [(ngModel)]=\"widgeturl\" name=\"widgeturl\" id=\"widgeturl\" type=\"text\" class=\"form-control\" placeholder={{urlPh}}>\n    </div>\n    <div class=\"form-group\">\n      <label>Width</label>\n      <input [(ngModel)]=\"widgetwidth\" name=\"widgetwidth\" id=\"widgetwidth\" type=\"text\" class=\"form-control\" placeholder={{widthPh}}>\n    </div>\n    <div class=\"form-group\">\n      <label>Upload</label>\n      <input type=\"file\" class=\"form-control\" placeholder=\"3\">\n    </div>\n  </form>\n\n    <a [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget']\" >\n      <button type=\"button\" class=\"btn btn-block btn-primary\">Upload Image</button>\n    </a>\n    <a [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget']\" >\n      <button type=\"button\" (click)=\"delete()\" class=\"btn btn-block btn-danger\">Delete</button>\n    </a>\n  <div class=\"navbar navbar-fixed-bottom bg-grey text-black\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, router, activateRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activateRoute = activateRoute;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // retrieves userId as path parameter
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
            _this.widgetId = params['widgetId'];
        });
        // user UserService to retrieve the user instance
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (data) {
            var widget = data;
            _this.typePh = widget['widgetType'];
            _this.widthPh = widget['width'];
            _this.urlPh = widget['url'];
        });
    };
    WidgetImageComponent.prototype.update = function () {
        var _this = this;
        console.log("hi from web edit");
        var type = this.updateForm.value.widgettype;
        var url = this.updateForm.value.widgeturl;
        var width = this.updateForm.value.widgetwidth;
        var newWidget = { widgetType: type, url: url, width: width };
        for (var _i = 0, _a = Object.keys(newWidget); _i < _a.length; _i++) {
            var key = _a[_i];
            if (newWidget[key] == "") {
                this.errorFlag = true;
                this.errorMsg = "widget info incomplete";
                return;
            }
        }
        this.widgetService.updateWidget(this.widgetId, newWidget)
            .subscribe(function (data) {
            console.log("widget update succeed");
            _this.router.navigate(["/user", _this.userId, "website", _this.websiteId, "page", _this.pageId, "widget"]);
        }, function (error) {
            console.log("widget update error");
        });
    };
    WidgetImageComponent.prototype.delete = function () {
        var _this = this;
        console.log("hi from widget edit delete");
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) {
            console.log("widget delete succeed");
            _this.router.navigate(["/user", _this.userId, "website", _this.websiteId, "page", _this.pageId, "widget"]);
        }, function (error) {
            console.log("widget delete error");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], WidgetImageComponent.prototype, "updateForm", void 0);
    WidgetImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-widget-image',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* copy from style.css */\nbody {\n    padding-top: 65px;\n}\n.list-group-item {\n    border: none;\n}\n.thmbnail {\n    position: relative;\n    z-index: 0;\n}\n.icon-header {\n    padding-top: 0%;\n}\n.icon-group {\n    position: absolute;\n    font-size: 20px;\n    top: 0%;\n    right: 0%;\n    z-index: 1;\n    background-color: white;\n}\n.myNavIconLeft {\n    position: absolute;\n    left: 10px;\n}\n.myNavIconRight {\n    position: absolute;\n    right: 10px;\n}\n.myNavIconCenter {\n    position: absolute;\n    left: 40px;\n}\n.myNavIconCenter2 {\n    position: relative;\n    left: 29%;\n}\n.myNavIconCenter3 {\n    position: relative;\n    left: 30%;\n}\n.grid-container {\n    display: grid;\n}\n.text-white {\n    color: white;\n}\n.text-black {\n    color: black;\n}\n.bg-grey {\n    background-color: lightgray;\n}\n/* Portrait */\n@media screen and (orientation:portrait) {\n    /* Portrait styles here */\n    .visibleIfPortrait {\n        visibility: visible;\n    }\n    .visibleIfLandscape {\n        visibility: hidden;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 1;\n        grid-row: 1;\n    }\n}\n/* Landscape */\n@media screen and (orientation:landscape) {\n    /* Landscape styles here */\n    .visibleIfPortrait {\n        visibility: hidden;\n    }\n    .visibleIfLandscape {\n        visibility: visible;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 2 / span 2;\n        grid-row: 1;\n    }\n}\n.myHeader {\n    padding: 0;\n    border: 0;\n    margin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"navbar navbar-fixed-top bg-grey\">\n    <a [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget']\" class=\"navbar-brand myNavIconLeft text-black\">\n      <span class=\"glyphicon glyphicon-menu-left\"></span>\n    </a>\n    <div class=\"navbar-brand myNavIconCenter text-black\">Widget Edit</div>\n    <div class=\"navbar-brand myNavIconRight text-white\">\n      <span class=\"glyphicon glyphicon-ok\" (click)=\"update()\"></span>\n    </div>\n  </div>\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label>Type</label>\n      <input [(ngModel)]=\"widgettype\" name=\"widgettype\" id=\"widgettype\" type=\"text\" class=\"form-control\" placeholder={{typePh}}>\n    </div>\n    <div class=\"form-group\">\n      <label>URL</label>\n      <input [(ngModel)]=\"widgeturl\" name=\"widgeturl\" id=\"widgeturl\" type=\"text\" class=\"form-control\" placeholder={{urlPh}}>\n    </div>\n    <div class=\"form-group\">\n      <label>Width</label>\n      <input [(ngModel)]=\"widgetwidth\" name=\"widgetwidth\" id=\"widgetwidth\" type=\"text\" class=\"form-control\" placeholder={{widthPh}}>\n    </div>\n  </form>\n\n  <a [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget']\">\n    <button type=\"button\" (click)=\"delete()\" class=\"btn btn-block btn-danger\">Delete</button>\n  </a>\n  <div class=\"navbar navbar-fixed-bottom bg-grey text-black\">\n    <span class=\"glyphicon glyphicon-user\"></span>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, router, activateRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activateRoute = activateRoute;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // retrieves userId as path parameter
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
            _this.widgetId = params['widgetId'];
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (data) {
            var widget = data;
            _this.typePh = widget['widgetType'];
            _this.widthPh = widget['width'];
            _this.urlPh = widget['url'];
        });
    };
    WidgetYoutubeComponent.prototype.update = function () {
        var _this = this;
        console.log("hi from web edit");
        var type = this.updateForm.value.widgettype;
        var url = this.updateForm.value.widgeturl;
        var width = this.updateForm.value.widgetwidth;
        var newWidget = { widgetType: type, url: url, width: width };
        for (var _i = 0, _a = Object.keys(newWidget); _i < _a.length; _i++) {
            var key = _a[_i];
            if (newWidget[key] == "") {
                this.errorFlag = true;
                this.errorMsg = "widget info incomplete";
                return;
            }
        }
        this.widgetService.updateWidget(this.widgetId, newWidget)
            .subscribe(function (data) {
            console.log("widget update succeed");
            _this.router.navigate(["/user", _this.userId, "website", _this.websiteId, "page", _this.pageId, "widget"]);
        }, function (error) {
            console.log("widget update error");
        });
    };
    WidgetYoutubeComponent.prototype.delete = function () {
        var _this = this;
        console.log("hi from widget edit delete");
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) {
            console.log("widget delete succeed");
            _this.router.navigate(["/user", _this.userId, "website", _this.websiteId, "page", _this.pageId, "widget"]);
        }, function (error) {
            console.log("widget delete error");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], WidgetYoutubeComponent.prototype, "updateForm", void 0);
    WidgetYoutubeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-widget-youtube',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* copy from style.css */\nbody {\n    padding-top: 65px;\n}\n.list-group-item {\n    border: none;\n}\n.thmbnail {\n    position: relative;\n    z-index: 0;\n}\n.icon-header {\n    padding-top: 0%;\n}\n.icon-group {\n    position: absolute;\n    font-size: 20px;\n    top: 0%;\n    right: 0%;\n    z-index: 1;\n    background-color: white;\n}\n.myNavIconLeft {\n    position: absolute;\n    left: 10px;\n}\n.myNavIconRight {\n    position: absolute;\n    right: 10px;\n}\n.myNavIconCenter {\n    position: absolute;\n    left: 40px;\n}\n.myNavIconCenter2 {\n    position: relative;\n    left: 29%;\n}\n.myNavIconCenter3 {\n    position: relative;\n    left: 30%;\n}\n.grid-container {\n    display: grid;\n}\n.text-white {\n    color: white;\n}\n.text-black {\n    color: black;\n}\n.bg-grey {\n    background-color: lightgray;\n}\n/* Portrait */\n@media screen and (orientation:portrait) {\n    /* Portrait styles here */\n    .visibleIfPortrait {\n        visibility: visible;\n    }\n    .visibleIfLandscape {\n        visibility: hidden;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 1;\n        grid-row: 1;\n    }\n}\n/* Landscape */\n@media screen and (orientation:landscape) {\n    /* Landscape styles here */\n    .visibleIfPortrait {\n        visibility: hidden;\n    }\n    .visibleIfLandscape {\n        visibility: visible;\n    }\n    .side {\n        grid-column: 1;\n        grid-row: 1;\n    }\n    .main {\n        grid-column: 2 / span 2;\n        grid-row: 1;\n    }\n}\n.myHeader {\n    padding: 0;\n    border: 0;\n    margin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"navbar navbar-fixed-top bg-grey\">\n    <!-- go back to page list -->\n    <a [routerLink]=\"['/user',userId,'website',websiteId, 'page']\" class=\"navbar-brand myNavIconLeft text-black\">\n      <span class=\"glyphicon glyphicon-menu-left\"></span>\n    </a>\n    <div class=\"navbar-brand myNavIconCenter text-black\">Widget List</div>\n    <!-- ok goes to widget chooser -->\n    <a [routerLink]=\"['/user',userId,'website',websiteId, 'page',pageId, 'widget','new']\" class=\"navbar-brand myNavIconRight text-black\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </a>\n  </div>\n\n\n  <div class=\"col-xs-12\" *ngFor=\"let widget of widgets\">\n\n    <div [ngSwitch]=\"widget.widgetType\">\n      <div *ngSwitchCase=\"'HEADING'\">\n        <li class=\"row list-group-item thmnail\">\n          <div class=\"icon-header\">\n            <!-- control heading size using ngstyle -->\n            <h1 [ngStyle]=\"{'font-size': widget.size}\">{{widget.text}}</h1>\n          </div>\n          <div class=\"icon-group\">\n            <a [routerLink]=\"['/user',userId,'website',websiteId, 'page',pageId, 'widget',widget._id,'header']\">\n              <span class=\"glyphicon glyphicon-cog text-primary\"></span>\n            </a>\n            <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n          </div>\n        </li>\n      </div>\n\n      <div *ngSwitchCase=\"'IMAGE'\">\n        <div class=\"row  list-group-item tthumnail\">\n          <!-- TODO: image loading too slow -->\n          <img [ngStyle]=\"{'width': widget.width}\" class=\"img-responsive\" [attr.src]=\"widget.url\" alt=\"image\" />\n          <div class=\"icon-group\">\n            <a [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget',widget._id,'image']\">\n              <span class=\"glyphicon glyphicon-cog text-primary\"></span>\n            </a>\n            <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n          </div>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'YOUTUBE'\">\n        <div class=\"embed-responsive embed-responsive-16by9 thumnail row\">\n          <iframe class=\"embed-responsive-item\" [attr.src]=\"widget.url\" allowfullscreen></iframe>\n          <div class=\"icon-group\">\n            <a [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget',widget._id,'youtube']\">\n              <span class=\"glyphicon glyphicon-cog text-primary\"></span>\n            </a>\n            <span class=\"glyphicon glyphicon-menu-hamburger \"></span>\n          </div>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'HTML'\">\n        <li class=\"list-group-item thmnail row\">\n          <div>\n            <!-- TODO: use angular sanitize module to render html strings -->\n            {{widget.text}}\n          </div>\n          <div class=\"icon-group\">\n            <span class=\"glyphicon glyphicon-cog text-primary\"></span>\n            <span class=\"glyphicon glyphicon-menu-hamburger \"></span>\n          </div>\n        </li>\n      </div>\n\n    </div>\n\n  </div>\n  <div class=\"navbar navbar-fixed-bottom bg-grey\">\n    <a href=\"\" class=\"navbar-brand myNavIconLeft text-black\">\n      <span class=\"glyphicon glyphicon-play\"></span>\n    </a>\n    <a href=\"\" class=\"navbar-brand myNavIconCenter text-black\">\n      <span class=\"glyphicon glyphicon-eye-open\"></span>\n    </a>\n    <!-- return to profile -->\n    <a [routerLink]=\"['/user', userId]\" class=\"navbar-brand myNavIconRight\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, activateRoute, sanitizer) {
        this.widgetService = widgetService;
        this.activateRoute = activateRoute;
        this.sanitizer = sanitizer;
        this.widgets = [{}];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // retrieves userId as path parameter
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
        });
        // user UserService to retrieve the user instance
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (data) {
            _this.widgets = data;
            for (var i = 0; i < _this.widgets.length; i++) {
                if (_this.widgets[i]['url']) {
                    _this.widgets[i]['url'] = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.widgets[i]['url']);
                }
            }
        });
    };
    WidgetListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-widget-list',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // unlock map operator

var PageService = /** @class */ (function () {
    function PageService(_http) {
        this._http = _http;
        // TODO: find env baseUrl
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createPage': this.createPage,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage,
            'findPageById': this.findPageById,
            'findPagesByWebsiteId': this.findPagesByWebsiteId,
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        return this._http.post('api/website/' + websiteId + "/page", page);
    };
    PageService.prototype.updatePage = function (pageId, page) {
        return this._http.put('api/page/' + pageId, page);
    };
    PageService.prototype.deletePage = function (pageId) {
        return this._http.delete('api/page/' + pageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        return this._http.get('api/page/' + pageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PageService.prototype.findPagesByWebsiteId = function (websiteId) {
        return this._http.get('api/website/' + websiteId + "/page")
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // unlock map operator

var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        // TODO: find env baseUrl
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createUser': this.createUser,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredentials': this.findUserByCredentials,
        };
    }
    UserService.prototype.createUser = function (user) {
        return this._http.post('api/user', user)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this._http.put('api/user/' + userId, user)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this._http.delete('api/user/' + userId, userId);
    };
    UserService.prototype.findUserById = function (userId) {
        // map the received response in a standard format
        return this._http.get(this.baseUrl + 'api/user/' + userId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserByUsername = function (userName) {
        return this._http.get('api/user?username=' + userName)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserByCredentials = function (userName, password) {
        return this._http.get('api/user?username=' + userName + '&password=' + password)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // unlock map operator

var WebsiteService = /** @class */ (function () {
    function WebsiteService(_http) {
        this._http = _http;
        // TODO: find env baseUrl
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.websites = [
            { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
            { _id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },
            { _id: "456", name: "Gizmodo", developerId: "123", description: "Lorem" },
            { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
            { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
            { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
            { _id: "789", name: "Chess", developerId: "234", description: "Lorem" },
        ];
        this.api = {
            'createWebsite': this.createWebsite,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite,
            'findWebsiteById': this.findWebsiteById,
            'findWebsitesByUser': this.findWebsitesByUser,
        };
    }
    // TODO: catch error
    WebsiteService.prototype.createWebsite = function (userId, website) {
        return this._http.post('api/user/' + userId + "/website", website)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        return this._http.put('api/website/' + websiteId, website)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        return this._http.delete('api/website/' + websiteId);
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this._http.get('api/website/' + websiteId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this._http.get('/api/user/' + userId + "/website")
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // unlock map operator

var WidgetService = /** @class */ (function () {
    function WidgetService(_http) {
        this._http = _http;
        // TODO: find env baseUrl
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createWidget': this.createWidget,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget,
            'findWidgetById': this.findWidgetById,
            'findWidgetsByPageId': this.findWidgetsByPageId,
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        return this._http.post('api/page/' + pageId + "/widget", widget);
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        return this._http.put('api/widget/' + widgetId, widget);
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        return this._http.delete('api/widget/' + widgetId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this._http.get('api/widget/' + widgetId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this._http.get('api/page/' + pageId + "/widget")
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: ""
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map