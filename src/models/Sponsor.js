export class Sponsor{
    constructor(data){
        this.title = data.title
        this.link = data.linkURL
        this.tall = data.tall
        this.square = data.square
        this.banner = data.banner
    }

    get complink(){
        return ('http://www.'+ this.link)
    }
}