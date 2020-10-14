var datasourcesList = [
	"adjustAtcAmtDS",
	"abstractPersistentEntityDS",
	"agentDS",
	"applDetailDS",
	"authorityDS",
	"builderDS",
	"certDS",
	"certDemandNoteItemDS",					
	"certificateDS",
	"chiOffensiveWordDS",
	"classSocietyDS",
	"clinicDS",
	"companySearchDS",
	"controlDataDS",
	"countryDS",
	"courseCodeDS",
	"codeTableDS",
	"crewDS",
	"crewListCoverDS",
	"csrFormDS",
	"csrOwnerDS",
	"demandNoteBillingPersonDS",
	"demandNoteHeaderDS",
	"demandNoteItemDS",
	"demandNoteReceiptDS",
	"demandNoteRefundDS",
	"disciplinaryDS",
	"documentCheckListDS",
	"documentRemarkDS",
	"employmentDS",
	"engOffensiveWordDS",
	"etoCorDS",
	"excelChangeTonnageDS",
	"excelMonthlyShipDeRegDS",
	"excelMonthlyShipRegDS",
	"excelNoteShipDeRegDS",
	"excelNoteShipRegDS",
	"excelShipRegInHKSRDS",
	"feeCodeDS",
	"financeCompanyDS",
	"firstRegFeeDS",
	"fsqcCertResultDS",
	"funcEntitleDS",
	"dmsDataDS",
	"injuctionDS",
	"lawyerDS",
	"licenseDS",
	"medicalDS",
	"mmoShipTypeDS",
	"mortgageDS",
	"mortgageeDS",
	"mortgagorDS",
	"mortgageRemarkDS",
	"nationalityDS",
	"nextOfKinDS",
	"officeDS",		
	"operationTypeDS",
	"ownerDS",
	"ownerEnquiryDS",
	"portDS",
	"preReserveDS",
	"preReserveNameDS",
	"previousSerbDS",
	"provinceDS",
	"rankDS",
	"ratingDS",
	"rdTranscriptApplicationDS",						 
	"reasonCodeDS",
	"regDS",
	"regMasterDS",
	"registrarDS",
	"repDS",
	"roleDS",
	"sdDataDS",
	"shipManagerDS",
	"shipSubTypeDS",
	"shipTypeDS",
	"shipListDS",
	"soapMessageInDS",
	"soapMessageOutDS",
	"stopListDS",
	"seafarerDS",
	"seafarerSearchDS",
	"seaServiceDS",
	"seaServiceCapacityDS",
	"systemFuncDS",
	"systemParamDS",
	"taskDS",
	"transactionCodeDS",
	"transcriptApplicantDS",
	"transcriptApplicationDS",
	"txnDS",
	"txnLockDS",
	"userDS",
	"userGroup2DS",	
	"userRoleDS",
	"vesselDS",
	];
var txCodeMap = {};
var txListCodeMap = {};


DataSource.load(datasourcesList, function(){
	var mmoJSList = [
	                 'js/code/createCodeTable.js',
	                 'js/mmo/seafarer/reg.js',
	                 'js/mmo/seafarer/medical.js',
	                 'js/mmo/seafarer/course.js',
	                 'js/mmo/seafarer/cert.js',
	                 'js/mmo/seafarer/seaService.js',
	                 'js/mmo/seafarer/employment.js',
	                 'js/mmo/seafarer/nextOfKin.js',
	                 'js/mmo/seafarer/rating.js',
	                 'js/mmo/seafarer/prevSerb.js',
	                 'js/mmo/seafarer/disciplinary.js',
	                 'js/mmo/sf_rec_details.js',
	                 'js/mmo/demandNote/adhoc_details.js',
	                 'js/mmo/crew_list_agt_details.js',
	                 ];
		isc.FileLoader.loadJSFiles(mmoJSList);
		DMI.call("ssrsApp", "securityDMI", "checkLogin", null, loginCallback);
		transactionCodeDS.fetchData(null,
		        function (dsResponse, data) {
			for (var i = 0; i < data.length; i++) {
				txCodeMap[data[i].id] = data[i].id + " " + data[i].tcDesc;
				txListCodeMap[data[i].id] = data[i].tcDesc;
			}
			}
		);
		isc.ListGrid.create({
			ID:"finDNDetailRefundListGrid", width: "100%", height: "*",  dataSource:"demandNoteRefundDS", sortField:"refundId",
			fields: [
			         //{name: "dnDemandNoteNo", showIf:"false"},
			         //{name: "refundId", showIf:"true", width:150},
			         {name: "refundAmount", 		title: "Refund Amount", format:"$#,##0.00", width:100},
			         {name: "remarks", title:"Refund Remarks", width:"*"},
			         {name: "voucherNo", 	width:150},
			         {name: "repayDate", title:"Refund Payment Date", width:150},
			         {name: "voucherDate", 	width:150},
			         {name: "refundStatus", title:"Refund Status", width:150},
			         {name: "dnsRemark", title:"DNS Remark", width:100},
			         {name: "userCode", title:"Recommend User",	width:150},
			         {name: "recommendedDate", title:"Recommended Date", width:150}
			         ],
			         rowDoubleClick:function(record, recordNum, fieldNum){
			         }
		});
});