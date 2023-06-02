export class Post{
    constructor(data){
        this.id = data.id
        this.body = data.body || ''
        this.img = data.imgUrl 
        this.creatorId = data.creatorId
        this.creatorName = data.creator.name || ''
        this.creatorImg = data.creator.picture || ''
        this.likIds = data.likeIds || []
    }
}