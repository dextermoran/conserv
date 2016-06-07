var NavBar = React.createClass ({
  handleClick: function(destination){
    this.props.onAction(destination);
    $('.button-collapse').sideNav('hide')
  },

  render: function(){
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo"><ConservLogo/></a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="side-nav navtext" id="mobile-demo">
            <li><a onClick={this.handleClick.bind(null, "userShow")} >Home</a></li>
            <li><a onClick={this.handleClick.bind(null, "claimEvent")} >Claim Events</a></li>
            <li><a onClick={this.handleClick.bind(null, "lineGraph")} >History </a></li>
            <li><a onClick={this.handleClick.bind(null, "house")} >House</a></li>
            <li><a onClick={this.handleClick.bind(null, "logout")} >Logout</a></li>
          </ul>
        </div>
      </nav>
    )
  }

})




