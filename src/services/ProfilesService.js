import { AppState } from "../AppState"
import { Profile } from "../models/Account"
// import { logger } from "../utils/Logger"
import { api } from "./AxiosService.js"

class ProfilesService {
    async getProfileById(id){
            // logger.log('getting profile', id)
        const res = await api.get(`api/profiles/${id}`)
            // logger.log('the response from the api is', res.data)
        AppState.profile = new Profile(res.data)
            // logger.log('the data saved to the appstate is',AppState.profile)
    }
}

export const profilesService = new ProfilesService()