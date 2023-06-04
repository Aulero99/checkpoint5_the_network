export class Post{
    constructor(data){
        this.id = data.id
        this.body = data.body || ''
        this.img = data.imgUrl || null
        this.creatorId = data.creatorId
        this.creatorName = data.creator.name || ''
        this.creatorImg = data.creator.picture || ''
        this.likeIds = data.likeIds || []
        this.updatedAt = new Date(data.updatedAt).toLocaleDateString('en-US')
    }

    get likeNum(){
        let num = this.likeIds?.length
        return num
    }
}