import { api } from "@/lib/api";
import type { Customer } from "@/lib/types";
import type { ApiResponse } from "@/lib/types";

export const customersService = {
  getAll: () =>
    api<ApiResponse<Customer[]>>("customers"),
};