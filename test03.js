var style = {
  background : "red",
  padding : "10px",
  color : "#fff"
}
ReactDOM.render(
    <div data-val="box">
      <div style={style}>I'm a div.</div>
    </div>,
	document.getElementById('example')
);