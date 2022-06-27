public with sharing class pdfController {
    @AuraEnabled
    public static Attachment generatePDF(Id recordId, String htmlData){
        Pagereference page = Page.renderAsPdf;
        page.getParameters().put('pdfText', htmlData);
        Contact con = new Contact(Id=recordId);
        Attachment ObjAtt = new Attachment();
        ObjAtt.Name = 'Invoice pdf';
        ObjAtt.ParentId = recordId;
        ObjAtt.Body = page.getContentaspdf();
        ObjAtt.IsPrivate = false;
        insert ObjAtt;
        return ObjAtt;
    }
}
