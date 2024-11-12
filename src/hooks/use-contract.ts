import contractAction from "@/apis/contract.api";
import { UpdateContractType } from "@/schema/contract.schema";
import { ErrorType } from "@/types/error.type";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useContract = {
  useGetContracts() {
    return useQuery({
      queryKey: ["contracts"],
      queryFn: async () => {
        try {
          const result = await contractAction.getContracts();
          return result;
        } catch (error) {
          console.error("Error during get contracts:", error);
          throw error;
        }
      },
      retry: 0,
    });
  },
  useGetContractDetails(id: string | undefined) {
    return useQuery({
      queryKey: [`contractDetails-${id}`],
      queryFn: async () => {
        try {
          const result = await contractAction.getContractDetails(id);
          return result;
        } catch (error) {
          console.error("Error during get contracts:", error);
          throw error;
        }
      },
      retry: 0,
    });
  },
  useUpdateContract(
    id: string | undefined,
    router: ReturnType<typeof useRouter>
  ): UseMutationResult<any, ErrorType, Partial<UpdateContractType>> {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (updateContractBody: Partial<UpdateContractType>) =>
        contractAction.updateContract(id, updateContractBody),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [`contractDetails-${id}`],
        });
        router.push("/contracts");
      },
      onError: (error: ErrorType) => {
        console.error("Error during update contract:", error);
        throw error;
      },
    });
  },
};

export default useContract;