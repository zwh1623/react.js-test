var i = 0;
var arr = ["xiaoyu","qiaoer"]
ReactDOM.render(
    <div data-val="box">
      {/*这是注释...*/}
      {/*可以在代码中嵌套多个 HTML 标签，需要使用一个 div 元素包裹它*/}
      {/*自定义属性需要使用 data- 前缀*/}
  		<h1>Hello, world!</h1>
  		{/*三元表达式*/}
    	<h1>{i == 1 ? 'True!' : 'False'}</h1>
    	<p>{ 1+1 }</p>
    	<span>{ arr }</span>
    </div>,
	document.getElementById('example')
);