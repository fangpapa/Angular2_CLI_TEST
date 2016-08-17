import { Component } from '@angular/core';

// Metadata
// 装饰器
@Component({
  moduleId: module.id,
  // 一个 css 选择器，它告诉 Angular 在 父级 HTML 中寻找一个 <hero-list> 标签，然后创建该组件，并插入此标签中
  selector: 'app-root',
  // 组件模板的地址
  templateUrl: 'app.component.html',
  // 套用的css設定
  styleUrls: ['app.component.css']
  // directives - 一个数组，包含 此 模板需要依赖的组件或指令
  // directives: []
  // providers - 一个数组，包含组件所依赖的服务所需要的 依赖注入提供商 。
  // providers: []
})

// 大多数应用都有一个 AppComponent 。按照惯例，它位于一个名叫 app.component.ts 的文件中。
// export 语句告诉 TypeScript ：这是一个模块，其中 AppComponent 类是公开的，可以被应用程序中的其它模块访问。
// 组件类是从模块中导出一种东西
export class AppComponent {
  title = 'app works!';
}
