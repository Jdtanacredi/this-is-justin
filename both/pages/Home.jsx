Home = React.createClass({
  render() {
    return (
      <div className={classNames('Home', 'foo', 'bar')} >
        <ThinksHeCan topic="code" />
        <ThinksHeCan topic="skate" />
      </div>
    );
  }
});
