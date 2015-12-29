ThinksHeCan = React.createClass({
  render() {
    var thisTopic = this.props.topic + 'Section';
    console.log(thisTopic);
    return (
      <section className={classNames('fullPageSection', thisTopic)}>
      <div>Justin thinks he can {this.props.topic}</div>
      </section>
    );
  }
});
