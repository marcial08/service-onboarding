import axios from 'axios'
import { onboardingEndPoint } from '../util/endPoints.util'
import * as https from 'https'
import config from '../util/config'

const httpsAgent = new https.Agent({
  rejectUnauthorized: false
})

export const postOnboarding = async (pReq: object, enpoint: string) =>
  await axios.post(onboardingEndPoint[enpoint], pReq, { httpsAgent })

export const postInformix = async (pReq: object) => {
  const dataEnpoint = config.URL_INFORMIX
  console.log(dataEnpoint)
  return await axios.post(config.URL_INFORMIX, pReq, { httpsAgent })
}
