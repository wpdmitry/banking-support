import ApiService from "../api-service";

import { Deposit } from "./models";

class DepositsService {
  constructor(private apiService: ApiService) {}

  async getDeposits(): Promise<Deposit[]> {
    return await this.apiService.getDeposits<Deposit[]>();
  }

  async getDeposit(depositId: string): Promise<Deposit> {
    return await this.apiService.getDeposit<Deposit>(depositId);
  }

  static createService() {
    return new DepositsService(ApiService.createService());
  }
}

export default DepositsService;
