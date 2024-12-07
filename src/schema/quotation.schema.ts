import { z } from "zod";

export const CreateQuotationBody = z.object({
    quoteReqId: z.string().uuid(),
    employeeId: z.string().uuid(),
    freightId: z.string().uuid(),
    pickupDate: z.string(),
    deliveryDate: z.string(),
    quotationDate: z.string(),
    expiredDate: z.string(),
    totalPrice: z.number(),
});

export const UpdateQuotationBody = z.object({
    pickupDate: z.string().optional(),
    deliveryDate: z.string().optional(),
    quotationDate: z.string().optional(),
    expiredDate: z.string().optional(),
    status: z.string().optional(),
    totalPrice: z.number().optional(),
    quoteReqId: z.string().optional(),
    employeeId: z.string().optional(),
    freightId: z.string().optional(),
});

export const QuotationDetailsRes = z.object({
    id: z.string(),
    totalPrice: z.number(),
    pickupDate: z.date(),
    deliveryDate: z.date(),
    quotationDate: z.date(),
    expiredDate: z.date(),
    status: z.string(),
    quoteReqId: z.string(),
    freightId: z.string(),
    employeeId: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
});

export const QuotationsRes = z.object({
    message: z.string(),
    data: z.array(QuotationDetailsRes),
});

export const QuoteRequestDetailsRes =  z.object({
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

export const BookedQuoteRequestRes = z.array(QuoteRequestDetailsRes);

export type UpdateQuotationType = z.TypeOf<typeof UpdateQuotationBody>;
export type CreateQuotationType = z.TypeOf<typeof CreateQuotationBody>;
export type QuotationResType = z.TypeOf<typeof QuotationsRes>;
export type QuotationDetailsType = z.TypeOf<typeof QuotationDetailsRes>;
export type BookedQuoteRequestType = z.TypeOf<typeof BookedQuoteRequestRes>;