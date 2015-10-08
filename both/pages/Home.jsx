Home = React.createClass({
  render() {
    return (
      <div className={classNames('Home')} >
        <ThisIsJustin />
        <ThinksHeCan topic="code" />
        <ThinksHeCan topic="skate" />
      </div>
    );
  }
});
