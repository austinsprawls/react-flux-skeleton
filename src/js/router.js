const routes = {
  ''
}

function navigated(){
  //Grab everything after the #/ characters
  const normalizedHash = window.location.hash.replace(/^#\/?|\/$/g, '');

  //Set default path when app is initialized
  //Agent's is currently the default page
  //User will be forwarded to login page if the default route is an
  //authenticated component
  if(normalizedHash === '') startNavigating('/agents');

  //Otherwise update the applications state
  else setState({location: normalizedHash.split('/'), transitioning: false});
}

function startNavigating(newURI){
  const currentURI = window.location.hash.substr(1);

  if(currentURI != newURI){
    setState({transitioning: true});

    window.location.replace(
      window.location.pathname + window.location.search + '#' + newURI
    );
  }
}

function setState(changes){

  if(!state.transitioning){
    Reac
  }
}