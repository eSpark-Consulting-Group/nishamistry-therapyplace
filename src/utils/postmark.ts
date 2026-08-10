const postmark = require('postmark')
export const postmarkClient = new postmark.ServerClient(
  process.env.POSTMARK_API_KEY
)
