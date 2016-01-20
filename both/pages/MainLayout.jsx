MainLayout = React.createClass({
  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        <main>{this.props.content}</main>
      </div>
    );
  }
});
