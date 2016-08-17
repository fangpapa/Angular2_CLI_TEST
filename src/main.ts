import { bootstrap } from '@angular/platform-browser-dynamic';

// @angular/core 库是主要的 Angular 模块库，从这里能获得大部分需要的东西
// 还有另一些重要的Angular模块库，比如@angular/common、和 @angular/http和@angular/router。 
// 我们从一个Angular的library module导入我们需要的模块。
import { enableProdMode } from '@angular/core';

// 当需要引用 AppComponent 时，要像这样 导入 它
// import 语句告诉系统，它能从附近名叫 app.component 的文件中获得 AppComponent 组件。 
// 模块名 ( 又叫模块 ID) 通常和去掉扩展名后的文件名相同。
import { AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent);
