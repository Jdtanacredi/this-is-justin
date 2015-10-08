Home = React.createClass({
  render() {
    return (
      <div className={classNames('Home', 'foo', 'bar')} >
        <ThisIsJustin />
        <ThinksHeCan topic="code" />
        <ThinksHeCan topic="skate" />
      </div>
    );
  }
});
