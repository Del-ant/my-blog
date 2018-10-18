export class Post {
  public date: Date
  constructor(public title: string, public content: string, public loveIt: number = 0) {
    this.date = new Date()
  }
}
