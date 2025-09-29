'use client'
import { useState } from "react";
import { customerSubmitAction } from "../../../_actions/fetch";
import { WatchRequest } from "@/payload-types";

export const useCustomerSubmitQuery = () => {
   const [loading, setLoading] = useState(false);

   const submitQuery = async (input: Omit<WatchRequest,'id' | 'createdAt' | 'updatedAt'>) => {
      setLoading(true);
      try {
         await customerSubmitAction(input);
      } catch (error) {
          setLoading(false);
          throw error;
      } finally {
         setLoading(false);
      }
   };
   return { loading, submitQuery };
}
