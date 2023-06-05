import { AppState } from "../AppState.js"
import { Sponsor } from "../models/Sponsor.js"
// import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class SponsorsService {
    async getSponsorsFromApi(){
        const res = await api.get('/api/ads')
        AppState.sponsors = res.data.map(s => new Sponsor(s))
        // logger.log('the sponsors are',AppState.sponsors) 
    }
}

export const sponsorsService = new SponsorsService()