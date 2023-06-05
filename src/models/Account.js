export class Profile {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.picture = data.picture
    this.coverImg = data.coverImg || null
    this.bio = data.bio || ''
    this.github = data.github || null
    this.linkedin = data.linkedin || null
    this.resume = data.resume || null
    this.graduated = data.graduated || false
  }
}

export class Account extends Profile{
  constructor(data){
    super(data)
    this.email = data.email
  }
}
