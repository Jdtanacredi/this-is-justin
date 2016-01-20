ThinksHeCan = React.createClass({
  render() {
    var thisTopic = this.props.topic + '-section';
    console.log(thisTopic);
    return (
      <section className={classNames('full-page-section', thisTopic)}>

      </section>
    );
  }
});

// <div>Justin thinks he can {this.props.topic}</div>
