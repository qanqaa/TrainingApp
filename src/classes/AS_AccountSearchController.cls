public with sharing class AS_AccountSearchController {
    @AuraEnabled
    public static List<Account> searchAccounts(String searchTerm) {
        List<Account> accounts = new List<Account>();
        if (String.isNotBlank(searchTerm)) {
            accounts = [
                    SELECT Id, Name, Phone, Website,
                            BillingStreet, BillingCity, BillingCountry,
                            BillingState, BillingPostalCode
                    FROM Account
                    WHERE Name LIKE :('%' + string.escapeSingleQuotes(searchTerm) + '%')
                    ORDER BY Name
                    LIMIT 1000
            ];
        }
        return accounts;
    }

    public static Account selectAccount(String id) {
        Account account = new Account();
        if (String.isNotBlank(id)) {
            account = [
                    SELECT Id, Name, Phone, Website,
                            BillingStreet, BillingCity, BillingCountry,
                            BillingState, BillingPostalCode
                    FROM Account
                    WHERE Id = :id
            ];
        }
        return account;
    }
}