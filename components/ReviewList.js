app.component('review-list',{

    props: {
        reviews: {
            type : Array,
            required : true
        }
    }
    ,
    template:
    /*html*/
    `
    <div class="review-container">

    <h2>Reviews:</h2>





    <ul>
        <li v-for="(review , index) in reviews" :key="index">{{review.name}} gave {{review.rating}} stars
        <br>
    "{{review.review}}"
        
        </li>
        
    </ul>
    
    

    </div>
    
    `,
}
)