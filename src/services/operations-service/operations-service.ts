import ApiService from "../api-service";

import { Operation } from "./models";

class OperationsService {
  constructor(private apiService: ApiService) {}

  async getAccountOperations(accountId: string) {
    return await this.apiService.getAccountOperations<Operation[]>(accountId);
  }

  async getOperation(operationId: string) {
    return await this.apiService.getOperation<Operation>(operationId);
  }

  static createService() {
    return new OperationsService(ApiService.createService());
  }
}

export default OperationsService;
