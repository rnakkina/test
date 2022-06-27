public with sharing class pdfPageController {
    public string pdfText{get; set;}
    public pdfPageController() {
        pdfText = String.escapeSingleQuotes(
            Apexpages.currentPage().getParameters().get('pdfText')
        );
    }
}
