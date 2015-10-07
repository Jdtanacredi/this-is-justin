Home = React.createClass({
  render() {
    return (
      <div className={classNames('Home', 'foo', 'bar')} >
        <ThinksCode />
        <ThinksSkate />
      </div>
    );
  }
});
