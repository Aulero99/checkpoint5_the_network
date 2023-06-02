import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Sponsor.js').Sponsor[]} */
  sponsors:[],
  /** @type {import('./models/Post.js').Post[]} */
  postsService:[],
  postPage:0,
  postTotalPage:0,
  postNextPage:null,
  postPrevPage:null,
})
