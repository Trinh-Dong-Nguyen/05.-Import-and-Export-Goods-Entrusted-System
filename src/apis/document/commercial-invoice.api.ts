import { CreateDocumentType } from "@/schema/document/packinglist.schema";
import { CommercialInvoice } from "@/types/document/commericial-invoice.type";
import { ErrorType } from "@/types/error.type";
import http from "@/utils/http";
import axios from "axios";

const commericialInvoiceAction = {
createDocument: async (documentCreateType: CreateDocumentType) => {
 try {
      const response = await http.post(
        `v1/document`,
        documentCreateType
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const postError = error.response.data as ErrorType;
        console.error("Error during update quote request:", postError);
        throw postError;
      } else {
        console.error("Unexpected error during post:", error);
        throw error;
      }
    }
  }, 
  getDocument: async (userId?: string, type?: string) => {
    try {
        const response = await http.get<EximResponseWrapper<CommercialInvoice[]>>(
            "/v1/document",
            {
            params: {
                userId,
                type,
            },
            },
        );
        return response.data;
        } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
            const documentError = error.response.data as ErrorType;
            console.error("Error during get document:", documentError);
            throw documentError;
        } else {
            console.error("Unexpected error during get document:", error);
            throw error;
        }
        }
    },
  getDocumentById: async (id: string) => {
 try {
      const response = await http.get<EximResponseWrapper<CommercialInvoice[]>>(
        `v1/document/${id}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const getError = error.response.data as ErrorType;
        console.error("Error during get document:", getError);
        throw getError;
      } else {
        console.error("Unexpected error during get:", error);
        throw error;
      }
    }
  }, 
}
export default commericialInvoiceAction;