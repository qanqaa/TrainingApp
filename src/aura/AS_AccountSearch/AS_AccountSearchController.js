({
    onSearchTermClick: function( component, event, helper ) {
        let searchTerm = component.get( "v.searchTerm" );
        helper.handleSearch( component, searchTerm );
    },
    onClearClick: function( component, event, helper ) {
        let searchTerm = component.set("v.searchTerm", "");
        helper.handleSearch( component, searchTerm );
    }
})