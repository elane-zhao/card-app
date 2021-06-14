(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/huanhuan/Desktop/Highspot/card-app/src/main.ts */"zUnb");


/***/ }),

/***/ "5gIc":
/*!***********************************!*\
  !*** ./src/app/loader.service.ts ***!
  \***********************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoaderService {
    constructor() {
        // Behavior Subject to store the current isLoading value
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    cardServiceURL: 'https://api.elderscrollslegends.io/v1/cards'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading/loading.component */ "f/hT");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");





class AppComponent {
    constructor() {
        this.title = 'card-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "WQ49":
/*!*****************************************!*\
  !*** ./src/app/app-http.interceptor.ts ***!
  \*****************************************/
/*! exports provided: AppHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHttpInterceptor", function() { return AppHttpInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.service */ "5gIc");



class AppHttpInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    // set value of the isLoading BehaviorSubject in the http interceptor
    // to add a loading effect when communicating with API
    intercept(req, next) {
        this.loaderService.isLoading.next(true);
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(() => this.loaderService.isLoading.next(false)));
    }
}
AppHttpInterceptor.ɵfac = function AppHttpInterceptor_Factory(t) { return new (t || AppHttpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"])); };
AppHttpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppHttpInterceptor, factory: AppHttpInterceptor.ɵfac });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _card_gallery_card_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-gallery/card-gallery.component */ "vtnr");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loading/loading.component */ "f/hT");
/* harmony import */ var _app_http_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-http.interceptor */ "WQ49");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _card_details_card_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./card-details/card-details.component */ "jXAV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _app_http_interceptor__WEBPACK_IMPORTED_MODULE_8__["AppHttpInterceptor"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _card_gallery_card_gallery_component__WEBPACK_IMPORTED_MODULE_3__["CardGalleryComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _card_details_card_details_component__WEBPACK_IMPORTED_MODULE_11__["CardDetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "eCip":
/*!*********************************!*\
  !*** ./src/app/card.service.ts ***!
  \*********************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CardService {
    constructor(http) {
        this.http = http;
        // Behavior Subject that stores the current word user entered in the search box
        this.searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
    }
    get cardURL() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].cardServiceURL;
    }
    searchCards(name = '', page, pageSize = 20) {
        return this.http.get(`${this.cardURL}?name=${name}&page=${page}&pageSize=${pageSize}`);
    }
}
CardService.ɵfac = function CardService_Factory(t) { return new (t || CardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
CardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CardService, factory: CardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "f/hT":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loader.service */ "5gIc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function LoadingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoadingComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.isLoading = false;
        this.loaderService.isLoading.subscribe((loading) => {
            this.isLoading = loading;
        });
    }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"])); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 1, vars: 1, consts: [["class", "progress-loader", 4, "ngIf"], [1, "progress-loader"], [1, "content"], [1, "loading-spinner", "fa-5x", "d-flex", "justify-content-center"], [1, "fas", "fa-cog", "fa-spin"], [1, "loading-message"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoadingComponent_div_0_Template, 6, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".progress-loader[_ngcontent-%COMP%] {\n  background-color: rgba(219, 118, 35, 0.719);\n  opacity: 0.8;\n  position: fixed;\n  \n  width: 100%;\n  \n  height: 100%;\n  \n  top: 0;\n  left: 0;\n  cursor: progress;\n}\n.progress-loader[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n.progress-loader[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .loading-message[_ngcontent-%COMP%] {\n  font-family: \"EB Garamond\", Open Sans, sans-serif;\n  font-size: 3rem;\n  text-align: center;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQWlCLG1DQUFBO0VBQ2pCLFdBQUE7RUFBYSxzQ0FBQTtFQUNiLFlBQUE7RUFBYyx1Q0FBQTtFQUNkLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFJSjtBQUZJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7QUFJUjtBQUhRO0VBQ0ksaURBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBS1oiLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcy1sb2FkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE5LCAxMTgsIDM1LCAwLjcxOSk7XG4gICAgb3BhY2l0eTogLjg7XG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgY3Vyc29yOiBwcm9ncmVzcztcblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAubG9hZGluZy1tZXNzYWdle1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRUIgR2FyYW1vbmRcIiwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cblxuIl19 */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() {
        this.myId = 'footer';
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 10, vars: 1, consts: [[1, "container-fluid", "footer"], [1, "d-flex", "justify-content-center"], ["src", "../../assets/icon.png", "alt", "footer icon", 1, "footer-icon"], [1, "copyright-text", 3, "id"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Built by Xinyi Zhao for a card game code exercise. Copyright \u00A9 2021 All Rights Reserved by Xinyi Zhao.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "You are 100% allowed to use this webpage for personal purpose.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Have fun playing with the cards!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.myId, "-description");
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  background-color: #333;\n  padding: 3rem 0;\n  font-size: 1rem;\n  color: #e5ece5;\n  font-family: \"EB Garamond\", Open Sans, sans-serif;\n}\n.footer[_ngcontent-%COMP%]   .footer-icon[_ngcontent-%COMP%] {\n  width: 10rem;\n}\n.footer[_ngcontent-%COMP%]   .copyright-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaURBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtBQUVSIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgcGFkZGluZzogM3JlbSAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogI2U1ZWNlNTtcbiAgICBmb250LWZhbWlseTogXCJFQiBHYXJhbW9uZFwiLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XG4gICAgLmZvb3Rlci1pY29uIHtcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xuICAgIH1cbiAgICAuY29weXJpZ2h0LXRleHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "jXAV":
/*!********************************************************!*\
  !*** ./src/app/card-details/card-details.component.ts ***!
  \********************************************************/
/*! exports provided: CardDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDetailsComponent", function() { return CardDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CardDetailsComponent {
    constructor() {
        this.myId = "card-details";
    }
    ngOnInit() { }
}
CardDetailsComponent.ɵfac = function CardDetailsComponent_Factory(t) { return new (t || CardDetailsComponent)(); };
CardDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardDetailsComponent, selectors: [["app-card-details"]], inputs: { card: "card", i: "i" }, decls: 48, vars: 39, consts: [[1, "card-side", "card-front"], [1, "card-img-top", 3, "src", "alt"], [1, "card-body"], [1, "card-title", "text-center", 3, "id"], [1, "card-description", 3, "id"], [1, "card-side", "card-back"], [1, "text-center", 3, "id"], [1, "card-text"], [3, "id"], [1, "card-footer"]], template: function CardDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Card Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Rarity: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cost: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Power: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Health: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Keywords: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Card Set: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Card Type: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.card.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.card.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", ctx.myId, "-card-name-", ctx.i, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", ctx.myId, "-card-text-", ctx.i, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.card.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.card.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.myId, "-card-details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.myId, "-card-rarity-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", ctx.myId, "-card-rarity-", ctx.i, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.rarity || "Unknown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.myId, "-card-cost-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", ctx.myId, "-card-cost-", ctx.i, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.cost || "Unknown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.myId, "-card-power-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", ctx.myId, "-card-power-", ctx.i, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.power || "Unknown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.myId, "-card-health-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", ctx.myId, "-card-health-", ctx.i, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.health || "Unknown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.myId, "-card-keywords-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", ctx.myId, "-card-keywords-", ctx.i, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.keywords || "Unknown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.myId, "-card-set-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", ctx.myId, "-card-set-", ctx.i, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.set.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.myId, "-card-type-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", ctx.myId, "-card-type-", ctx.i, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.type);
    } }, styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::after, *[_ngcontent-%COMP%]::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nbody[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.card-img-top[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.card-body[_ngcontent-%COMP%], .card-footer[_ngcontent-%COMP%] {\n  padding: 10px 30px 15px;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.card-side[_ngcontent-%COMP%] {\n  transition: all 0.8s;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  transform-style: preserve-3d;\n  width: 100%;\n  height: 100%;\n}\n\n.card-front[_ngcontent-%COMP%] {\n  transform: rotateY(0deg);\n}\n\n.card-back[_ngcontent-%COMP%] {\n  transform: rotateY(-180deg);\n  position: absolute;\n  top: 0;\n  background-image: url('card_back.jpeg');\n  border-radius: 0.25rem;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n  .card:hover .card-front {\n  transform: rotateY(-180deg);\n}\n\n  .card:hover .card-back {\n  transform: rotateY(0deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vY2FyZC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCQTs7O0VBR0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ3JCSjs7QUR3QkE7RUFDSSxzQkFBQTtBQ3JCSjs7QUFUQTtFQUNJLFVBQUE7QUFZSjs7QUFUQTtFQUNJLHVCQUFBO0FBWUo7O0FBVEE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFZSjs7QUFUQTtFQUNJLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVlKOztBQVRBO0VBQ0ksd0JBQUE7QUFZSjs7QUFUQTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQVlKOztBQVBRO0VBQ0ksMkJBQUE7QUFVWjs7QUFSUTtFQUNJLHdCQUFBO0FBVVoiLCJmaWxlIjoiY2FyZC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09MT1IgVkFSSUFCTEVTXG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiAjZmZiOTAwO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiAjZmY3NzMwO1xuXG4kY29sb3ItZ3JleS1saWdodC0xOiAjZjdmN2Y3O1xuJGNvbG9yLWdyZXktbGlnaHQtMjogI2VlZTtcbiRjb2xvci1ncmV5LWRhcms6ICM3Nzc7XG4kY29sb3ItZ3JleS1kYXJrLTI6ICM5OTk7XG4kY29sb3ItZ3JleS1kYXJrLTM6ICMzMzM7XG5cbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1ibGFjazogIzAwMDtcblxuLy8gR1JJRCBWQVJJQUJMRVNcbiRncmlkLXdpZHRoOiA4MHJlbTtcblxuLy8gUkVTUE9OU0lWRSBCUkVBS1BPSU5UU1xuJGJwLWxhcmdlc3Q6IDEyMDBweDtcbiRicC1sYXJnZTogOTkycHg7XG4kYnAtbWVkaXVtOiA3NjhweDtcbiRicC1zbWFsbDogNTc2cHg7XG5cbiosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbiIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy5zY3NzJztcbi5jYXJkLWltZy10b3Age1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5jYXJkLWJvZHksIC5jYXJkLWZvb3RlciB7XG4gICAgcGFkZGluZzogMTBweCAzMHB4IDE1cHg7XG59XG5cbi5jYXJkLXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2FyZC1zaWRlIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjhzO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgLy8gc3BlY2lmeSB3aGV0aGVyIG9yIG5vdCB0aGUgYmFjayBmYWNlIG9mIHRoZSByb3RhdGVkIGVsZW1lbnQgc2hvdWxkIGJlIHZpc2libGUgdG8gdGhlIHVzZXJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgLy8gZm9yIFNhZmFyaVxuICAgIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyAvLyBmb3IgRmlyZWZveFxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FyZC1mcm9udCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xufVxuXG4uY2FyZC1iYWNrIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uIHRoZSBiYWNrIGZhY2Ugc28gaXQgY2FuIG1hdGNoIHRoZSBzaXplIG9mIHRoZSBmcm9udCBmYWNlXG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2NhcmRfYmFjay5qcGVnJyk7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbjo6bmctZGVlcCB7XG4gICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICAuY2FyZC1mcm9udCB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtYmFjayB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _card_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card.service */ "eCip");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["searchInput"];
function NavbarComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_span_7_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); _r0.value = ""; return ctx_r2.clearInput(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(cardService) {
        this.cardService = cardService;
        // page Id for navbar component
        this.myId = 'navbar';
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        var _a;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    ngAfterViewInit() {
        // need to be called inside the ngAfterViewInit function, to ensure the searchInput element has already been initialized
        // otherwise if put inside ngOnInit, it will throw Invalid event target error
        this.setSearchTermWithUserInput();
    }
    clearInput() {
        this.cardService.searchTerm.next('');
    }
    setSearchTermWithUserInput() {
        var _a;
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])((_a = this.searchInput) === null || _a === void 0 ? void 0 : _a.nativeElement, 'keyup').pipe(// pipe the event with multiple operators
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(1000), // debounce time is a delay we can add between event subscription, wait until the user stops typing for a second
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((event) => event.target.value), 
        // filter(res => res.length > 0), // event won't be triggered if user input is empty string ''
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])() // if the user input is the same with previous, event won't be triggered
        ).subscribe((searchText) => {
            this.cardService.searchTerm.next(searchText);
        });
    }
    search(input) {
        this.cardService.searchTerm.next(input);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_card_service__WEBPACK_IMPORTED_MODULE_3__["CardService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], viewQuery: function NavbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    } }, decls: 9, vars: 3, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "nav-title", "my-3", "mx-auto", "ml-sm-3"], ["href", "#", 3, "id"], ["id", "navbar", 1, "justify-content-center", "search", "mx-3", "input-group"], ["type", "text", "aria-label", "Search Box", "placeholder", "Enter a Card Name to Search", 1, "search__input", 3, "id", "keyup.enter"], ["searchInput", ""], ["id", "clear", "class", "close d-flex align-items-center", 3, "click", 4, "ngIf"], [1, "header"], ["id", "clear", 1, "close", "d-flex", "align-items-center", 3, "click"], [1, "fa", "fa-times"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Legends Card Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function NavbarComponent_Template_input_keyup_enter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); return ctx.search(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NavbarComponent_span_7_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "header", 7);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "", ctx.myId, "-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "", ctx.myId, "-searchbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.value);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::after, *[_ngcontent-%COMP%]::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nbody[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  font-family: \"EB Garamond\", Open Sans, sans-serif;\n  font-size: 1.25rem;\n  overflow: hidden;\n  background-color: #333;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n  opacity: 0.9;\n  line-height: 1.5rem;\n}\n\n.navbar[_ngcontent-%COMP%]   .nav-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffb900;\n  text-decoration: none;\n  white-space: nowrap;\n}\n\n@media (min-width: 576px) {\n  .navbar[_ngcontent-%COMP%]   .nav-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  margin-right: 0;\n  color: #ffb900;\n  text-transform: uppercase;\n}\n\n@media (min-width: 576px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\n\n.header[_ngcontent-%COMP%] {\n  height: 85vh;\n  background-image: url('image.png');\n  background-size: cover;\n  background-position: top;\n}\n\n.search[_ngcontent-%COMP%] {\n  display: flex;\n  flex-basis: auto;\n  flex-grow: 1;\n}\n\n.search__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1.5rem;\n  transition: transform 250ms ease-in-out;\n  color: #eee;\n  background-color: rgba(0, 0, 0, 0);\n  border-radius: 50px;\n  border: 1px solid #ff7730;\n  transition: all 250ms ease-in-out;\n}\n\n.search__input[_ngcontent-%COMP%]::-moz-placeholder {\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n}\n\n.search__input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n}\n\n.search__input[_ngcontent-%COMP%]::placeholder {\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n}\n\n.search__input[_ngcontent-%COMP%]:hover, .search__input[_ngcontent-%COMP%]:focus {\n  padding: 0.75rem 0;\n  border: 1px solid transparent;\n  border-bottom: 1px solid #ff7730;\n  border-radius: 0;\n  background-position: 100% center;\n  outline: none;\n}\n\n@media (min-width: 992px) {\n  .search__input[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n.search[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin-left: -40px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCQTs7O0VBR0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ3JCSjs7QUR3QkE7RUFDSSxzQkFBQTtBQ3JCSjs7QUFSQTtFQUNJLGlEQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCREVnQjtFQ0RoQixlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBV0o7O0FBUk07RUFDRSxjRGZnQjtFQ2dCaEIscUJBQUE7RUFDQSxtQkFBQTtBQVVSOztBQVJNO0VBTkY7SUFPSSxlQUFBO0VBV047QUFDRjs7QUFUSTtFQUNFLGVBQUE7RUFDQSxjRHpCa0I7RUMwQmxCLHlCQUFBO0FBV047O0FBVk07RUFKRjtJQUtJLHFCQUFBO0VBYU47QUFDRjs7QUFURTtFQUNFLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUFZSjs7QUFUQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFZRjs7QUFYRTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0EsV0Q1Q2U7RUM2Q2Ysa0NBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QUFhTjs7QUFYTTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUFhVjs7QUFmTTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUFhVjs7QUFmTTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUFhVjs7QUFWTTtFQUVJLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0FBV1Y7O0FBUkk7RUF6QkY7SUEwQk0sVUFBQTtFQVdOO0FBQ0Y7O0FBUkU7RUFDRSxrQkFBQTtFQUNBLFdEbkVVO0FDNkVkIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENPTE9SIFZBUklBQkxFU1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogI2ZmYjkwMDtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogI2ZmNzczMDtcblxuJGNvbG9yLWdyZXktbGlnaHQtMTogI2Y3ZjdmNztcbiRjb2xvci1ncmV5LWxpZ2h0LTI6ICNlZWU7XG4kY29sb3ItZ3JleS1kYXJrOiAjNzc3O1xuJGNvbG9yLWdyZXktZGFyay0yOiAjOTk5O1xuJGNvbG9yLWdyZXktZGFyay0zOiAjMzMzO1xuXG4kY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3ItYmxhY2s6ICMwMDA7XG5cbi8vIEdSSUQgVkFSSUFCTEVTXG4kZ3JpZC13aWR0aDogODByZW07XG5cbi8vIFJFU1BPTlNJVkUgQlJFQUtQT0lOVFNcbiRicC1sYXJnZXN0OiAxMjAwcHg7XG4kYnAtbGFyZ2U6IDk5MnB4O1xuJGJwLW1lZGl1bTogNzY4cHg7XG4kYnAtc21hbGw6IDU3NnB4O1xuXG4qLFxuKjo6YWZ0ZXIsXG4qOjpiZWZvcmUge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmJvZHkge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4iLCJAaW1wb3J0ICcuLi8uLi9zdHlsZXMuc2Nzcyc7XG5cbi5uYXZiYXIge1xuICAgIGZvbnQtZmFtaWx5OiBcIkVCIEdhcmFtb25kXCIsIE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleS1kYXJrLTM7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG5cbiAgICAubmF2LXRpdGxlIHtcbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeS1saWdodDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1zbWFsbCkge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICB9XG4gICAgfVxuICAgIC5uYXZiYXItYnJhbmQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgY29sb3I6ICRjb2xvci1zZWNvbmRhcnktbGlnaHQ7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1zbWFsbCkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgaGVpZ2h0OiA4NXZoO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2UucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbn1cblxuLnNlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtYmFzaXM6IGF1dG87XG4gIGZsZXgtZ3JvdzogMTtcbiAgJl9faW5wdXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAuNzVyZW0gMS41cmVtO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgY29sb3I6ICRjb2xvci1ncmV5LWxpZ2h0LTI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1zZWNvbmRhcnktZGFyaztcbiAgICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgIFxuICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgcGFkZGluZzogLjc1cmVtIDA7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1zZWNvbmRhcnktZGFyaztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgY2VudGVyO1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJwLWxhcmdlKSB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICB9XG5cbiAgLmNsb3NlIHtcbiAgICBtYXJnaW4tbGVmdDogLTQwcHg7XG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _card_gallery_card_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-gallery/card-gallery.component */ "vtnr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _card_gallery_card_gallery_component__WEBPACK_IMPORTED_MODULE_1__["CardGalleryComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtnr":
/*!********************************************************!*\
  !*** ./src/app/card-gallery/card-gallery.component.ts ***!
  \********************************************************/
/*! exports provided: CardGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardGalleryComponent", function() { return CardGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _card_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card.service */ "eCip");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader.service */ "5gIc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _card_details_card_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card-details/card-details.component */ "jXAV");






function CardGalleryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Explore the Legends Cards! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx_r0.myId, "-header");
} }
function CardGalleryComponent_app_card_details_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card-details", 9);
} if (rf & 2) {
    const card_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r4)("i", i_r5);
} }
function CardGalleryComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sorry, no cards were found. Please adjust your search criteria and try again. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx_r2.myId, "-no-card-msg");
} }
function CardGalleryComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Please bear with me. I seem to be experiencing technical difficulties. Please try again later. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx_r3.myId, "-error-msg");
} }
class CardGalleryComponent {
    constructor(cardService, loaderService) {
        this.cardService = cardService;
        this.loaderService = loaderService;
        // the cards retrieved from card service to display on the gallery page
        this.cards = [];
        // the current page number
        this.page = 1;
        // the word user entered in search box
        this.searchTerm = "";
        // the total number of cards in the card service API response
        this.totalNumberOfCards = 0;
        // flag used to manage error message display when there is an API error
        this.showErrorMsg = false;
        // page Id for card gallery component
        this.myId = "card-gallery";
        this.isLoading = false;
    }
    ngOnInit() {
        this.subscribeToSearchTerm();
        this.loaderService.isLoading.subscribe((loading) => {
            this.isLoading = loading;
        });
    }
    subscribeToSearchTerm() {
        this.cardService.searchTerm.subscribe((newValue) => {
            this.scrollToViewById(`${this.myId}-header`);
            this.searchTerm = newValue;
            this.resetCards();
            this.loadSearchedCards(this.searchTerm);
        });
    }
    scrollToViewById(id) {
        let el = document.getElementById(id);
        el === null || el === void 0 ? void 0 : el.scrollIntoView();
    }
    loadSearchedCards(searchTerm) {
        this.cardService.searchCards(searchTerm, this.page).subscribe((data) => {
            this.cards = this.cards.concat(data.cards);
            this.totalNumberOfCards = data._totalCount;
        }, (error) => {
            this.showErrorMsg = true;
            console.error(`Error occurred when retrieving data from card service.`, error);
        });
    }
    resetCards() {
        this.page = 1;
        this.totalNumberOfCards = 0;
        this.cards = [];
        this.showErrorMsg = false;
    }
    onScroll() {
        if (this.cards.length === this.totalNumberOfCards) {
            return;
        }
        this.page++;
        this.loadSearchedCards(this.searchTerm);
    }
    trackByCardId(index, card) {
        return card.id;
    }
}
CardGalleryComponent.ɵfac = function CardGalleryComponent_Factory(t) { return new (t || CardGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_card_service__WEBPACK_IMPORTED_MODULE_1__["CardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"])); };
CardGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardGalleryComponent, selectors: [["app-card-gallery"]], decls: 8, vars: 7, consts: [[1, "section-cards"], ["class", "text-center mb-5", 4, "ngIf"], ["infiniteScroll", "", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrolled"], [1, "d-flex", "justify-content-center"], [1, "card-deck", "justify-content-center"], ["class", "card mb-5", 3, "card", "i", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "text-center", 4, "ngIf"], [1, "text-center", "mb-5"], [1, "heading-secondary", "font-effect-fire", 3, "id"], [1, "card", "mb-5", 3, "card", "i"], [1, "text-center"], [1, "font-effect-fire", "m-auto", 3, "id"]], template: function CardGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardGalleryComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolled", function CardGalleryComponent_Template_div_scrolled_2_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardGalleryComponent_app_card_details_5_Template, 1, 2, "app-card-details", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardGalleryComponent_div_6_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CardGalleryComponent_div_7_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cards.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards)("ngForTrackBy", ctx.trackByCardId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.cards.length === 0 && !ctx.showErrorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showErrorMsg);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _card_details_card_details_component__WEBPACK_IMPORTED_MODULE_5__["CardDetailsComponent"]], styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::after, *[_ngcontent-%COMP%]::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nbody[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.card[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  perspective: 150rem;\n  -moz-perspective: 150rem;\n  min-width: 18rem;\n}\n\n.section-cards[_ngcontent-%COMP%] {\n  background-color: #000;\n  padding: 5rem 0;\n  font-family: \"EB Garamond\", Open Sans, sans-serif;\n}\n\n.card-deck[_ngcontent-%COMP%] {\n  max-width: 80rem;\n  margin: auto;\n  width: 100%;\n}\n\n.heading-secondary[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  text-transform: uppercase;\n  font-weight: 400;\n  display: inline-block;\n  letter-spacing: 0.2rem;\n  transition: all 0.2s;\n}\n\n.heading-secondary[_ngcontent-%COMP%]:hover {\n  transform: skewY(2deg) skewX(15deg) scale(1.1);\n}\n\n@media (min-width: 576px) {\n  .heading-secondary[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vY2FyZC1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCQTs7O0VBR0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ3JCSjs7QUR3QkE7RUFDSSxzQkFBQTtBQ3JCSjs7QUFSQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFXSjs7QUFSQTtFQUNJLHNCRENVO0VDQVYsZUFBQTtFQUNBLGlEQUFBO0FBV0o7O0FBUkE7RUFDSSxnQkRGUztFQ0dULFlBQUE7RUFDQSxXQUFBO0FBV0o7O0FBUkE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQVdKOztBQVRJO0VBQ0ksOENBQUE7QUFXUjs7QUFSSTtFQVpKO0lBYVEsZUFBQTtFQVdOO0FBQ0YiLCJmaWxlIjoiY2FyZC1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09MT1IgVkFSSUFCTEVTXG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiAjZmZiOTAwO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiAjZmY3NzMwO1xuXG4kY29sb3ItZ3JleS1saWdodC0xOiAjZjdmN2Y3O1xuJGNvbG9yLWdyZXktbGlnaHQtMjogI2VlZTtcbiRjb2xvci1ncmV5LWRhcms6ICM3Nzc7XG4kY29sb3ItZ3JleS1kYXJrLTI6ICM5OTk7XG4kY29sb3ItZ3JleS1kYXJrLTM6ICMzMzM7XG5cbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1ibGFjazogIzAwMDtcblxuLy8gR1JJRCBWQVJJQUJMRVNcbiRncmlkLXdpZHRoOiA4MHJlbTtcblxuLy8gUkVTUE9OU0lWRSBCUkVBS1BPSU5UU1xuJGJwLWxhcmdlc3Q6IDEyMDBweDtcbiRicC1sYXJnZTogOTkycHg7XG4kYnAtbWVkaXVtOiA3NjhweDtcbiRicC1zbWFsbDogNTc2cHg7XG5cbiosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbiIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy5zY3NzJztcblxuLmNhcmQge1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgICBwZXJzcGVjdGl2ZTogMTUwcmVtO1xuICAgIC1tb3otcGVyc3BlY3RpdmU6IDE1MHJlbTtcbiAgICBtaW4td2lkdGg6IDE4cmVtO1xufVxuXG4uc2VjdGlvbi1jYXJkcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrO1xuICAgIHBhZGRpbmc6IDVyZW0gMDtcbiAgICBmb250LWZhbWlseTogXCJFQiBHYXJhbW9uZFwiLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XG59XG5cbi5jYXJkLWRlY2sge1xuICAgIG1heC13aWR0aDogJGdyaWQtd2lkdGg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGluZy1zZWNvbmRhcnkge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMnJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2tld1koMmRlZykgc2tld1goMTVkZWcpIHNjYWxlKDEuMSk7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRicC1zbWFsbCkge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map