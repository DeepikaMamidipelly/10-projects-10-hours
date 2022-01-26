class BookObject{
    constructor(name,pages,published){
        this.name=name;
        this.pages=pages;
        this.published=published;
    }


    daysCompleted(){
        let date=new Date();
        let publishedDate=new Date(this.published);
        let diff=Math.floor((date-publishedDate)/(1000*3600*24));
        return diff;
    }
}

export default BookObject;