import { AppState } from '../AppState'
import { Account } from '../models/Account.js'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
      // logger.log(AppState.account)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async editAccount(formData){
    const res = await api.put('/account', {...formData})
    // logger.log(res.data)
    AppState.account = new Account(res.data)
    AppState.profile = new Account(res.data)
  }
}

export const accountService = new AccountService()
