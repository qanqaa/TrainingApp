({
    onAccountsLoaded: function( component, event, helper ) {
    var accountsSize = event.getParam( 'accounts' );
        var cols = [
            {
                'label': 'Name',
                'fieldName': 'Name',
                'type': 'text'
            },
            {
                'label': 'Country',
                'fieldName': 'BillingCountry',
                'type': 'text'
            },
            {
                'label': 'Website',
                'fieldName': 'Website',
                'type': 'url'
            },
            {
                'label': 'Action',
                'type': 'button',
                'typeAttributes': {
                    'label': 'View details',
                    'name': 'view_details'
                }
            }
        ];
        let accountsList = event.getParam('accounts');
        component.set('v.cols', cols);
        component.set('v.rows', accountsList);
        if(accountsList.length > 0) {
            component.set('v.showTable', true);
        }
        else {
            component.set('v.showTable', false);
        }
    },
    onRowAction: function( component, event, helper ) {
        var action = event.getParam( 'action' );
        var row = event.getParam( 'row' );
        if ( action.name == 'view_details' ) {
            var navigation = component.find( 'navigation' );
            navigation.navigate({
                'type': 'standard__recordPage',
                'attributes': {
                    'objectApiName': 'Account',
                    'recordId': row.Id,
                    'actionName': 'view'
                }
            });
        }
    }
})