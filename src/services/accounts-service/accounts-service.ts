import ApiService from "../api-service";

import { Account } from "./models";

class AccountsService {
  constructor(private apiService: ApiService) {}

  async getAccounts(): Promise<Account[]> {
    return await this.apiService.getAccounts<Account[]>();
  }

  async getAccount(accountId: string): Promise<Account> {
    return await this.apiService.getAccount<Account>(accountId);
  }

  static createService() {
    return new AccountsService(ApiService.createService());
  }
}

export default AccountsService;
