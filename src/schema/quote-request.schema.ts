import { z } from "zod";
export const createQuoteRequestBody = z
  .object({
    requestDate: z.string(),
    customerId: z.string(),
    origin: z.string(),
    destination: z.string(),
    shipmentReadyDate: z.string(),
    shipmentDeadline: z.string(),
    cargoInsurance: z.boolean(),
    packageType: z.string(),
    weight: z.number(),
    length: z.number(),
    width: z.number(),
    height: z.number(),
  });

export const getQuoteRequest = z.array(
    z.object({
        id: z.string().uuid(),
        requestDate: z.date(),
        status: z.string(),
        customerId: z.string().uuid(),
        createdAt: z.date(),
        updatedAt: z.date()
    })
);
export const getQuoteRequestDetails =  z.object({
        id: z.string().uuid(),
        origin: z.string(),
        destination: z.string(),
        shipmentReadyDate: z.date(),
        shipmentDeadline: z.date(),
        cargoInsurance: z.boolean(),
        quoteReqId: z.string().uuid(),
        createdAt: z.date(),
        updatedAt:  z.date()
    });
export const getPackageDetails =  z.object({
        id: z.string().uuid(),
        packageType: z.string(),
        weight: z.number(),
        length: z.number(),
        width: z.number(),
        height: z.number(),
        detailId: z.string().uuid(),
        createdAt: z.date(),
        updatedAt:  z.date()
    });
export const getCustomerInfo =  z.object({
        message: z.string(),
        data: z.array(
          z.object({
            id: z.string(),
            name: z.string(),
            shortName: z.string(),
            email: z.string(),
            phone: z.string(),
            address: z.string(),
            taxId: z.string(),
            legalRepId: z.string()
          })
        ),
       
    });
function mapToQuoteRequest(data: z.infer<typeof getQuoteRequest>): QuoteRequest[] {
  return data.map((data) => ({
    quote_request_id: data.id,                
    customer_id: data.customerId,             
    request_date: new Date(data.requestDate).toDateString(),     
    status: data.status,
    create_at: new Date(data.createdAt).toDateString(),          
    update_at: new Date(data.updatedAt).toDateString()           
  }));
}

export type GetQuoteRequestType = z.TypeOf<typeof getQuoteRequest>;
export type GetQuoteRequestDetailsType = z.TypeOf<typeof getQuoteRequestDetails>;
export type CreateQuoteRequestType = z.TypeOf<typeof createQuoteRequestBody>;
export type GetPackageDetails= z.TypeOf<typeof getPackageDetails>;
export type GetCustomerInfo= z.TypeOf<typeof getCustomerInfo>;
export default mapToQuoteRequest;